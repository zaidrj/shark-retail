"use client";
// src/components/WhySharkRetail.tsx

import React, { useRef, useEffect, useState } from 'react';

// --- Custom SVG Icon Components ---
const TrackRecordIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SolutionsIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CommunicationIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ScalableIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Data for the points ---
const pointsData = [
  {
    title: "A History of Outperformance",
    description: "Our proprietary systems and strategic playbooks are battle-tested, consistently delivering market-beating growth and establishing a new benchmark for e-commerce ROI.",
    icon: <TrackRecordIcon />,
  },
  {
    title: "An End-to-End Capital Solution",
    description: "From initial setup to global fulfillment, we are your single point of accountability. This eliminates operational friction and allows for pure, passive capital growth.",
    icon: <SolutionsIcon />,
  },
  {
    title: "Institutional-Grade Reporting",
    description: "You are not a customer; you are a partner. Gain clear, data-driven insights into your asset's performance with transparent P&L reporting and strategic reviews.",
    icon: <CommunicationIcon />,
  },
  {
    title: "Engineered for Compounding Returns",
    description: "Our models are designed for scalability from the ground up. We systematically reinvest profits to compound your returns, building long-term, transferable wealth.",
    icon: <ScalableIcon />,
  },
];

// --- Main Why Shark Retail Component ---
const WhySharkRetail: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and start animation
            setVisibleCards([]);
            
            // Reveal cards one by one with delay
            for (let i = 0; i < 4; i++) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, i]);
              }, i * 600); // 600ms delay between each card
            }
          } else {
            // Reset when leaving the section
            setVisibleCards([]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/videos/bg-pattern.mp4" type="video/mp4" />
      </video>
      
      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-400/ z-10"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Allocate Capital with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">The Shark Retail?</span>
          </h2>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pointsData.map((point, index) => (
            <div key={index} className={`group relative transition-all duration-1000 ease-in-out ${
              visibleCards.includes(index) 
                ? 'opacity-100 blur-0 translate-y-0' 
                : 'opacity-60 blur-lg translate-y-8'
            }`}>
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
              
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  {point.icon}
                  <h3 className="text-2xl font-bold text-white">{point.title}</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySharkRetail;
