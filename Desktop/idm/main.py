# --- FIX: Load environment variables BEFORE any other application imports ---
from dotenv import load_dotenv
load_dotenv()
print("[main.py] Environment variables loaded.")
# --- End of fix ---

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from prisma import Prisma
from agents import Runner
import agent_core # This now runs AFTER the environment is loaded

db = Prisma()
print("[main.py] Prisma DB instance created.")

# Conversation History Management
async def get_conversation_history(whatsapp_number: str):
    """Retrieve conversation history for a user."""
    history = await db.conversationhistory.find_many(
        where={"user": {"whatsappNumber": whatsapp_number}},
        order={"timestamp": "asc"}
    )
    return [{"role": msg.role, "content": msg.content} for msg in history]

async def save_message(whatsapp_number: str, role: str, content: str):
    """Save a message to the conversation history."""
    user = await db.user.find_unique(where={"whatsappNumber": whatsapp_number})
    if not user:
        user = await db.user.create(data={"whatsappNumber": whatsapp_number})
    await db.conversationhistory.create(data={"whatsappNumber": whatsapp_number, "role": role, "content": content})

# FastAPI App
app = FastAPI()

class ChatRequest(BaseModel):
    whatsapp_number: str
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    """Handle incoming messages and return the agent's response."""
    whatsapp_number = request.whatsapp_number
    message = request.message

    await db.connect()
    print("[main.py] Database connected.")
    try:
        # Pass the connected db instance to the agent_core module
        agent_core.db = db
        print("[main.py] agent_core.db set.")
        
        # Retrieve and update conversation history
        history = await get_conversation_history(whatsapp_number)
        print(f"[main.py] Retrieved conversation history: {history}")
        
        # Add system message with whatsapp_number for agent context
        history.append({"role": "system", "content": f"User's WhatsApp number: {whatsapp_number}"})
        history.append({"role": "user", "content": message})
        print(f"[main.py] Updated history: {history}")

        # Run the agent with the updated history
        print("[main.py] Running agent...")
        result = await Runner.run(agent_core.main_agent, history, run_config=agent_core.run_config)
        print(f"[main.py] Agent result: {result}")
        response = result.final_output
        print(f"[main.py] Agent response: {response}")

        # Save the conversation
        await save_message(whatsapp_number, "user", message)
        print(f"[main.py] Saved user message: {message}")
        await save_message(whatsapp_number, "assistant", response)
        print(f"[main.py] Saved assistant response: {response}")

        return {"response": response}
    except Exception as e:
        print(f"[main.py] Error: {e}")
        raise HTTPException(status_code=500, detail=f"Error processing message: {str(e)}")
    finally:
        # Clean up the reference after the request is done
        agent_core.db = None
        print("[main.py] agent_core.db cleared.")
        if db.is_connected():
            await db.disconnect()
            print("[main.py] Database disconnected.")

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)