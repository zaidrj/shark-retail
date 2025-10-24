"use client";

import React, { useRef, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useInView } from 'framer-motion';

// --- Company Data ---
const companies = [
  { name: 'Microsoft', logo: '/images/companies/microsoft.png' },
  { name: 'Amazon', logo: '/images/companies/amazon.png' },
  { name: 'Google', logo: '/images/companies/google.png' },
  { name: 'Meta', logo: '/images/companies/meta.png' },
  { name: 'Tesla', logo: '/images/companies/tesla.png' },
  { name: 'Netflix', logo: '/images/companies/netflix.png' },
  { name: 'Uber', logo: '/images/companies/uber.png' },
  { name: 'Airbnb', logo: '/images/companies/airbnb.png' },
  { name: 'Spotify', logo: '/images/companies/spotify.png' },
  { name: 'Adobe', logo: '/images/companies/adobe.png' }
];

// --- Company Logo Component ---
const CompanyLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => {
  const isSmallLogo = ['Tesla', 'Amazon', 'Google', 'Netflix', 'Uber'].includes(name);
  const logoSize = isSmallLogo ? 'w-20 h-20' : 'w-36 h-36';
  const containerHeight = isSmallLogo ? 'h-32' : 'h-44';
  
  return (
    <div className={`flex items-center justify-center px-8 py-8 group ${containerHeight}`}>
      <div className={`relative ${logoSize} flex items-center justify-center`}>
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain object-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          style={{ verticalAlign: 'middle' }}
        />
      </div>
    </div>
  );
};

// --- Animated Number Component ---
const AnimatedNumber: React.FC<{ 
  value: string; 
  label: string; 
  delay?: number;
  duration?: number;
}> = ({ value, label, delay = 0, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      const increment = numericValue / (duration * 60); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <motion.div 
        className="text-3xl font-bold text-teal-600 mb-2"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {displayValue}
      </motion.div>
      <motion.div 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

// --- Main Companies Trust Us Section ---
const CompaniesTrustUs: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-transparent"></div>
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Challenges Brands Face in Competitive Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In today's fast-paced digital marketplace, brands must navigate complex challenges to stay competitive and deliver exceptional customer experiences.
          </p>
        </div>

        {/* First Marquee Line */}
        <div>
          <Marquee speed={50} gradient={false} className="py-0">
            {companies.map((company, index) => (
              <CompanyLogo key={`first-${index}`} {...company} />
            ))}
            {companies.map((company, index) => (
              <CompanyLogo key={`second-${index}`} {...company} />
            ))}
          </Marquee>
        </div>

        {/* Second Marquee Line - Opposite Direction */}
        <div className="-mt-4">
          <Marquee speed={50} gradient={false} direction="right" className="py-0">
            {companies.map((company, index) => (
              <CompanyLogo key={`third-${index}`} {...company} />
            ))}
            {companies.map((company, index) => (
              <CompanyLogo key={`fourth-${index}`} {...company} />
            ))}
          </Marquee>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedNumber 
              value="500+" 
              label="Brands Empowered" 
              delay={0}
              duration={2.5}
            />
            <AnimatedNumber 
              value="99.9%" 
              label="Uptime Guarantee" 
              delay={0.2}
              duration={2}
            />
            <AnimatedNumber 
              value="24/7" 
              label="Support Available" 
              delay={0.4}
              duration={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesTrustUs;
