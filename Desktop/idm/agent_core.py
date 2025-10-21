import os
from dotenv import load_dotenv, find_dotenv
from prisma import Prisma
try:
    from agents import Agent, RunConfig, AsyncOpenAI, OpenAIChatCompletionsModel, Runner, handoff, ModelSettings
    from agents.tool import function_tool
except ImportError as e:
    print(f"Failed to import necessary components from 'agents': {e}")
    print("Please ensure the 'agents' library is correctly installed and structured.")
   
    Agent = None
    RunConfig = None
    AsyncOpenAI = None
    OpenAIChatCompletionsModel = None
    Runner = None
    function_tool = lambda f: f 

# Load environment variables needed by the agent core (e.g., API keys)
load_dotenv(find_dotenv())
print("[agent_core.py] Environment variables loaded.")

# --------------------------------------------------------------------------
# Step 1: Provider, Step 2: Model, Step 3: Run Configuration 
# --------------------------------------------------------------------------

# --------------------------------------------------------------------------
# Gemini LLM via OpenRouter configuration (with OpenAI API key fallback)
# --------------------------------------------------------------------------


provider = AsyncOpenAI(
    api_key=os.getenv("GOOGLE_API_KEY"),             
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.5-flash", 
    openai_client=provider,
)

run_config = RunConfig(
    model=model,
    model_provider=provider,
    tracing_disabled=True
)

db = Prisma()
print("[agent_core.py] Prisma DB instance created.")

# Database Tools
@function_tool
async def get_cancellation_count(whatsapp_number: str) -> int:
    print(f"[agent_core.py] get_cancellation_count called with whatsapp_number={whatsapp_number}")
    if db is None:
        raise RuntimeError("Database not initialized")
    user = await db.user.find_unique(where={"whatsappNumber": whatsapp_number})
    print(f"[agent_core.py] get_cancellation_count user: {user}")
    return user.cancellationCount if user else 0

@function_tool
async def save_order(whatsapp_number: str, order_details: str) -> str:
    """Save a new order for a user."""
    if db is None:
        raise RuntimeError("Database not initialized")
    
    # First check cancellation count
    user = await db.user.find_unique(where={"whatsappNumber": whatsapp_number})
    if not user:
        user = await db.user.create(data={"whatsappNumber": whatsapp_number})
    
    # Check if user has cancelled 2 or more orders
    if user.cancellationCount >= 2:
        return "I apologize, but due to your previous order cancellations, you can now only purchase perfumes from our physical branch. Please visit our store for your purchases. Thank you for understanding."
    
    print(f"[agent_core.py] save_order user: {user}")
    order = await db.order.create(data={"whatsappNumber": whatsapp_number, "details": order_details})
    print(f"[agent_core.py] save_order created order: {order}")
    return f"Order {order.id} placed successfully! Thankyou for letting us serve."

@function_tool
async def cancel_order(whatsapp_number: str, order_id: str) -> str:
    """Cancel an order and increment the user's cancellation count."""
    if db is None:
        raise RuntimeError("Database not initialized")
    order = await db.order.find_unique(where={"id": order_id}, include={"user": True})
    print(f"[agent_core.py] cancel_order order: {order}")
    if order and order.user.whatsappNumber == whatsapp_number and order.status == "placed":
        await db.order.update(where={"id": order_id}, data={"status": "cancelled"})
        await db.user.update(where={"whatsappNumber": whatsapp_number}, data={"cancellationCount": {"increment": 1}})
        print(f"[agent_core.py] cancel_order cancelled order and incremented cancellation count.")
        return f"Order {order_id} cancelled."
    print(f"[agent_core.py] cancel_order: Order not found or already cancelled.")
    return "Order not found or already cancelled."

@function_tool
async def perfume_info(query: str) -> str:
    """Provide comprehensive information about all available perfumes and their properties."""
    all_perfumes_info = (
        "Here are all the exquisite perfumes we offer at Elyscents:\n\n"
        "🌸 **SALSA SPIRIT** - Inspired by Creed Aventus\n"
        "   A captivating fragrance that opens with zesty lemon and pink pepper, followed by crisp apple and exotic pineapple. The heart features elegant jasmine, while the base combines patchouli, birch, ambroxan, cedarwood, oakmoss, and musk. This sophisticated scent lasts up to 8 hours with strong sillage, perfect for confident individuals who want to make a lasting impression.\n\n"
        "👑 **ROYAL OUD** - Luxurious Unisex Scent\n"
        "   A masterpiece of luxury featuring precious saffron and warm nutmeg in the opening. The heart reveals aromatic lavender, while the base showcases the rare and precious agarwood (oud), patchouli, and musk. This opulent fragrance lasts up to 8 hours with strong sillage, ideal for those who appreciate the finest things in life.\n\n"
        "🌿 **WILD ESSENCE** - Inspired by Sauvage Dior\n"
        "   A fresh and invigorating scent that starts with Calabrian bergamot and spicy pepper. The heart features patchouli and elemi, while the base combines lavender, geranium, cedarwood, and ambroxan. This versatile fragrance offers affordable luxury with exceptional longevity and a scent that adapts beautifully to any occasion.\n\n"
        "🎁 **SPECIAL BUNDLE OFFER**\n"
        "   Our exclusive bundle includes all three 100ml scents (Salsa Spirit, Royal Oud, and Wild Essence) at a special discounted price. This is perfect for perfume enthusiasts who want to experience our complete collection and discover their signature scent!\n\n"
        "✨ **Why Choose Elyscents?**\n"
        "   All our perfumes are crafted with premium ingredients and offer exceptional longevity and sillage. Each scent is designed to be versatile and suitable for various occasions, from daily wear to special events. Our fragrances are inspired by luxury brands but offered at accessible prices, making luxury accessible to everyone."
    )
    
    # If query specifically asks about bundle, focus on bundle
    if 'bundle' in query.lower():
        bundle_info = (
            "Our special bundle includes three 100ml scents:\n"
            "1. Salsa Spirit - Inspired by Creed Aventus: A captivating fragrance with zesty lemon, pink pepper, apple, exotic pineapple, jasmine, patchouli, birch, ambroxan, cedarwood, oakmoss, and musk. Lasts up to 8 hours with strong sillage.\n"
            "2. Royal Oud - A luxurious unisex scent with saffron, nutmeg, lavender, agarwood (oud), patchouli, and musk. Lasts up to 8 hours with strong sillage.\n"
            "3. Wild Essence - Inspired by Sauvage Dior: Features Calabrian bergamot, spicy pepper, patchouli, elemi, lavender, geranium, cedarwood, and ambroxan. Affordable luxury with a lasting scent.\n\n"
            "This bundle offers incredible value and lets you experience our complete collection!"
        )
        return f"Here's what I found about '{query}':\n{bundle_info}"
    
    # For any other query, return comprehensive information
    return f"Here's what I found about '{query}':\n{all_perfumes_info}"

@function_tool
async def get_last_message(whatsapp_number: str = None) -> str:
    """Retrieve the last message sent by the user. If whatsapp_number is not provided, extract it from the conversation context."""
    if db is None:
        raise RuntimeError("Database not initialized")
    
    # If whatsapp_number is not provided, try to extract from context
    if not whatsapp_number:
        return "I need your WhatsApp number to retrieve your last message. Please provide it."
    
    last_msg = await db.conversationhistory.find_first(
        where={"whatsappNumber": whatsapp_number, "role": "user"},
        order={"timestamp": "desc"}
    )
    if last_msg:
        return f"Your last message was: '{last_msg.content}'"
    return "No previous messages found."

@function_tool
async def get_order_details(order_id: str) -> str:
    """Retrieve detailed information about a specific order by order ID."""
    if db is None:
        raise RuntimeError("Database not initialized")
    
    order = await db.order.find_unique(
        where={"id": order_id}, 
        include={"user": True}
    )
    
    if not order:
        return f"Order with ID '{order_id}' not found. Please check the order ID and try again."
    
    # Format the order details nicely
    order_info = (
        f"📦 **Order Details**\n\n"
        f"**Order ID:** {order.id}\n"
        f"**Status:** {order.status.title()}\n"
        f"**Order Details:** {order.details}\n"
        f"**Order Date:** {order.createdAt.strftime('%B %d, %Y at %I:%M %p')}\n"
        f"**Customer:** {order.user.whatsappNumber}\n\n"
        f"Thank you for choosing Elyscents! 🌸"
    )
    
    return order_info

@function_tool
async def get_greeting_message() -> str:
    """Get the official Elyscents greeting message."""
    greeting = (
        "Welcome to Elyscents - the perfume hub of Pakistan! 🌸\n\n"
        "We're delighted to have you here! Let me introduce you to our exclusive collection of premium fragrances.\n\n"
        "🎁 **SPECIAL BUNDLE OFFER**\n"
        "Our amazing bundle includes three 100ml scents:\n"
        "• Salsa Spirit - Inspired by Creed Aventus\n"
        "• Royal Oud - Luxurious unisex scent\n"
        "• Wild Essence - Inspired by Sauvage Dior\n\n"
        "How can I assist you today? Would you like to explore our perfumes, place an order, or learn more about our special offers?"
    )
    return greeting

# Agents
print("[agent_core.py] Creating agents...")

# Main Agent - Orchestrator with all tools and comprehensive flow management
main_agent = Agent(
    name="MainAgent",
    instructions="""You are Elyscents'(perfume brand) main customer service agent. Handle the complete conversation flow with a polite, welcoming tone.

CONVERSATION FLOW:
1. GREETING: If this is a new conversation or user says hi,hello etc, ALWAYS use the get_greeting_message tool first to provide the official welcome message. This tool contains the exact greeting: "Welcome to Elyscents - the perfume hub of Pakistan!" and introduces our special bundle.

2. PERFUME QUERIES: If user asks about perfumes, use perfume_info tool to provide detailed information about scents, properties, and our special bundle. Always encourage purchases by highlighting quality and value.

3. ORDERING: If user wants to order:
   - Collect perfume name, quantity, and delivery address
   - Check cancellation count using get_cancellation_count
   - If count < 2, save order using save_order tool
   - Ask if they want add-ons or extra perfumes
   - Confirm their complete order details
   - Always suggest our special bundle

4. CANCELLATION: If user wants to cancel:
   - Use cancel_order tool to process cancellation
   - Maintain polite tone even during cancellation

5. HISTORY: If user asks about previous messages, use get_last_message tool.
6. ORDER DETAILS: If user asks about order details or provides an order ID, use get_order_details tool to retrieve comprehensive order information.

7. HISTORY: If user asks about previous messages, use get_last_message tool.

8. PERSISTENCE: Always maintain context from previous messages. Reference past conversations naturally.

TOOLS AVAILABLE:
- get_greeting_message: ALWAYS use this for greetings - contains official welcome message
- perfume_info: For perfume details and bundle information
- get_cancellation_count: Check user's cancellation history
- save_order: Save new orders to database
- cancel_order: Cancel existing orders
- get_order_details: Retrieve detailed information about a specific order by order ID
- get_last_message: Retrieve user's last message

IMPORTANT: For ANY greeting (hi, hello, good morning, etc.), ALWAYS use get_greeting_message tool first to ensure the correct welcome message is displayed.

Always be polite, encouraging, and helpful. Guide users through the complete purchase journey while maintaining conversation history.""",
    tools=[get_greeting_message, perfume_info, get_cancellation_count, save_order, cancel_order, get_order_details, get_last_message]
)



print("[agent_core.py] MainAgent created.")
