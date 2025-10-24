"use client";
// src/components/CallToAction.tsx

import React from 'react';

// --- Main Call to Action Component ---
const CallToAction: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(0,0,0,0) 70%) z-0"></div>
      
      {/* Border Moving Glows */}
      <div className="absolute w-64 h-64 bg-teal-400/50 rounded-full blur-2xl z-0" style={{
        animation: 'borderMove 8s linear infinite',
        top: '0%',
        left: '0%'
      }}></div>
      
      <div className="absolute w-48 h-48 bg-teal-400/40 rounded-full blur-xl z-0" style={{
        animation: 'borderMove 6s linear infinite reverse',
        top: '0%',
        right: '0%'
      }}></div>
      
      <style jsx>{`
        @keyframes borderMove {
          0% { transform: translate(0, 0); }
          25% { transform: translate(calc(100vw - 100%), 0); }
          50% { transform: translate(calc(100vw - 100%), calc(100vh - 100%)); }
          75% { transform: translate(0, calc(100vh - 100%)); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      <div className="container mx-auto relative z-10">
        {/* Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Diversify Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Tangible Growth Asset?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Schedule your confidential strategy session with our investment team. Explore the data, review the performance, and discover how to structure your e-commerce portfolio for financial autonomy.
          </p>
          
          <div className="flex justify-center">
            <button className="bg-teal-400 px-8 py-4 text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black rounded-full hover:shadow-2xl hover:shadow-teal-400/25">
              Schedule Your Capital Intro Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
