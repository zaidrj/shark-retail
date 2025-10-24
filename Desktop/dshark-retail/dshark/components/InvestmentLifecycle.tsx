"use client";
// src/components/InvestmentLifecycle.tsx

import React, { useRef, useEffect, useState } from 'react';
import { Link2 } from 'lucide-react';

// --- Custom SVG Icon Components for a professional look ---
const StrategyIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m.5-1.5l.5 1.5m0 0l1.5-2.25m1.5 2.25l1.5-2.25m0 0l1.5 2.25m-16.5 5.25h16.5" />
  </svg>
);

// --- Chain Link Connector Component ---
const ChainLinkConnector = ({ isLast = false, isVisible = false }: { isLast?: boolean; isVisible?: boolean }) => (
  <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 transition-all duration-1500 ease-in-out ${
    isLast ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-30'
  }`} style={{ left: 'calc(100% + 1rem)', zIndex: 5 }}>
    {/* Right Chain Link - on the right side of current card */}
    <Link2 className="w-8 h-8 text-teal-400 transition-all duration-500 ease-in-out group-hover:text-teal-300 group-hover:drop-shadow-lg" strokeWidth={3} />
  </div>
);

const DevelopmentIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const ScalingIcon = () => (
  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 12l3-3 3 3 5-5" />
  </svg>
);

// --- Data for the timeline steps ---
const stepsData = [
  {
    number: "01",
    stage: "Strategy",
    title: "Portfolio Strategy & Market Analysis",
    description: "We collaborate to define your investment thesis and risk profile, identifying high-margin verticals within the enduring $6T global e-commerce market.",
    icon: <StrategyIcon />,
  },
  {
    number: "02",
    stage: "Store Creation",
    title: "Asset Development & Brand Structuring",
    description: "Our team of specialists constructs your turnkey e-commerce enterprise—a tangible, revenue-generating asset built for scale and market dominance.",
    icon: <DevelopmentIcon />,
  },
  {
    number: "03",
    stage: "Marketing",
    title: "Capital Deployment for Customer Acquisition",
    description: "We deploy capital with surgical precision into performance marketing channels, driving profitable growth and maximizing return on ad spend (ROAS).",
    icon: <MarketingIcon />,
  },
  {
    number: "04",
    stage: "Scaling",
    title: "Portfolio Scaling & Optimization",
    description: "We systematically reinvest profits and optimize operations to compound growth, transforming your initial asset into a diversified, self-sustaining portfolio.",
    icon: <ScalingIcon />,
  },
];

// --- Main Investment Lifecycle Component ---
const InvestmentLifecycle: React.FC = () => {
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
              }, i * 800); // 800ms delay between each card for smoother flow
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
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(0,0,0,0) 70%) z-0"></div>
      
      {/* Teal Glow from Right Bottom */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>
      
      {/* Teal Glow from Top Left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/60 rounded-full blur-xl z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Investment Lifecycle</span>
          </h2>
          <p className="text-xl text-gray-400">
            From Capital to Commerce
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-16 lg:gap-x-8">
            {stepsData.map((step, index) => (
            <div key={index} className={`relative group transition-all duration-1500 ease-in-out ${
              visibleCards.includes(index) 
                ? 'opacity-100 blur-0' 
                : 'opacity-60 blur-lg'
            }`}>
              {/* Timeline Node */}
              <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <div className="absolute top-0 left-8 lg:left-auto lg:top-auto w-0.5 h-full lg:w-auto lg:h-0.5"></div>
                <div className="absolute top-0 -left-1.5 lg:left-auto lg:top-auto transform-none lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-teal-400/50 group-hover:border-teal-400 transition-colors duration-300">
                      <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_theme(colors.teal.400)]"></div>
                  </div>
                </div>
              </div>


              {/* Right Chain Link Connector */}
              <ChainLinkConnector 
                isLast={index === stepsData.length - 1} 
                isVisible={visibleCards.includes(index)}
              />

                {/* Content Card */}
                <div className="pl-16 lg:pl-0 lg:pt-20 text-center lg:text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-teal-400/25 transition-all duration-500 ease-in-out">
                        {/* Card Number Label */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-teal-400 text-white font-bold rounded-full flex items-center justify-center text-sm z-10">
                            {index + 1}
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                            {step.icon}
                            <span className="text-sm font-bold uppercase tracking-widest text-teal-400">{step.stage}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentLifecycle;