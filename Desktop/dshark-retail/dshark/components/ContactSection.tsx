"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

// --- Modern 3D Icons ---
const Globe3DIcon = () => (
  <div className="relative w-12 h-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <defs>
        <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
          <stop offset="60%" stopColor="#0d9488" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#134e4a" stopOpacity="0.7"/>
        </radialGradient>
        <linearGradient id="globeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main globe sphere with 3D effect */}
      <circle cx="24" cy="24" r="18" fill="url(#globeGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#glow)"/>
      
      {/* 3D highlight for depth */}
      <ellipse cx="20" cy="20" rx="6" ry="10" fill="url(#globeHighlight)" opacity="0.6"/>
      
      {/* Outer rings like Saturn - outside the globe */}
      <ellipse cx="24" cy="24" rx="22" ry="3" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.4"/>
      <ellipse cx="24" cy="24" rx="25" ry="2" fill="none" stroke="#14b8a6" strokeWidth="0.8" opacity="0.3"/>
      <ellipse cx="24" cy="24" rx="28" ry="1.5" fill="none" stroke="#14b8a6" strokeWidth="0.6" opacity="0.2"/>
      
      {/* Additional outer rings for depth */}
      <ellipse cx="24" cy="24" rx="20" ry="4" fill="none" stroke="#14b8a6" strokeWidth="0.8" opacity="0.35"/>
      <ellipse cx="24" cy="24" rx="26" ry="2.5" fill="none" stroke="#14b8a6" strokeWidth="0.7" opacity="0.25"/>
      
      {/* Subtle connection points */}
      <circle cx="10" cy="18" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="38" cy="18" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="10" cy="30" r="1" fill="#14b8a6" opacity="0.6"/>
      <circle cx="38" cy="30" r="1" fill="#14b8a6" opacity="0.6"/>
    </svg>
  </div>
);

const Users3DIcon = () => (
  <div className="relative w-12 h-12">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
      <defs>
        <radialGradient id="usersGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
          <stop offset="60%" stopColor="#0d9488" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#134e4a" stopOpacity="0.7"/>
        </radialGradient>
        <linearGradient id="usersHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="usersGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Leadership team - 3 people */}
      <circle cx="16" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="16" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="14" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      <circle cx="24" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="24" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="22" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      <circle cx="32" cy="16" r="4" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#usersGlow)"/>
      <ellipse cx="32" cy="16" rx="2" ry="2.5" fill="url(#usersHighlight)" opacity="0.5"/>
      <rect x="30" y="20" width="4" height="8" rx="2" fill="url(#usersGradient)" stroke="#14b8a6" strokeWidth="0.5"/>
      
      {/* Leadership crown above center person */}
      <path d="M22 8 L24 6 L26 8 L25 10 L27 12 L24 10 L21 12 L23 10 Z" fill="#14b8a6" opacity="0.9"/>
      <circle cx="24" cy="10" r="1" fill="#ffffff" opacity="0.8"/>
      
      {/* Connection network lines */}
      <path d="M20 18 Q24 14 28 18" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M20 18 Q24 22 28 18" stroke="#14b8a6" strokeWidth="1" fill="none" opacity="0.4"/>
      
      {/* Global reach indicators */}
      <circle cx="8" cy="12" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="40" cy="12" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="8" cy="36" r="1.5" fill="#14b8a6" opacity="0.6"/>
      <circle cx="40" cy="36" r="1.5" fill="#14b8a6" opacity="0.6"/>
      
      {/* Connection lines to global points */}
      <path d="M12 14 Q16 12 20 16" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M28 16 Q32 12 36 14" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M12 34 Q16 32 20 28" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M28 28 Q32 32 36 34" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3"/>
    </svg>
  </div>
);

// --- Global Network Earth Component ---
const GlobalNetworkEarth = () => {
  // Global office locations with coordinates
  const offices = [
    { name: "USA", x: 25, y: 35, flag: "🇺🇸", size: "lg" },
    { name: "UK", x: 50, y: 25, flag: "🇬🇧", size: "md" },
    { name: "Canada", x: 20, y: 30, flag: "🇨🇦", size: "md" },
    { name: "Australia", x: 75, y: 65, flag: "🇦🇺", size: "md" },
    { name: "UAE", x: 55, y: 45, flag: "🇦🇪", size: "sm" },
    { name: "Pakistan", x: 60, y: 40, flag: "🇵🇰", size: "lg" }
  ];

  return (
    <div className="absolute top-12 right-0 w-64 h-64 lg:w-96 lg:h-96 -z-1">
      <div className="relative w-full h-full animate-spin-slow">
        {/* Earth Globe with 3D Effect */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Earth gradient */}
            <radialGradient id="earthGradient" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
              <stop offset="40%" stopColor="#0d9488" stopOpacity="0.6"/>
              <stop offset="70%" stopColor="#134e4a" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3"/>
            </radialGradient>
            
            {/* Earth highlight */}
            <linearGradient id="earthHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
            </linearGradient>
            
            {/* Glow effect */}
            <filter id="earthGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Animated gradient for connections */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="1"/>
              <stop offset="50%" stopColor="#0d9488" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#134e4a" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          
          {/* Main Earth sphere with rotation */}
          <circle cx="50" cy="50" r="45" fill="url(#earthGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#earthGlow)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Earth highlight for 3D effect */}
          <ellipse cx="40" cy="40" rx="15" ry="20" fill="url(#earthHighlight)" opacity="0.4"/>
          
          {/* Continental outlines with animation */}
          <path d="M30 45 Q35 40 40 45 Q45 50 50 45 Q55 40 60 45 Q65 50 70 45" 
                stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M25 55 Q30 50 35 55 Q40 60 45 55 Q50 50 55 55 Q60 60 65 55 Q70 50 75 55" 
                stroke="#14b8a6" strokeWidth="0.6" fill="none" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
          </path>
          
          {/* Global network connections with animation */}
          {offices.map((office, index) => (
            <g key={office.name}>
              {/* Connection lines from center to offices */}
              <line x1="50" y1="50" x2={office.x} y2={office.y} 
                    stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4" 
                    strokeDasharray="2 2">
                <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin={`${index * 0.5}s`}/>
              </line>
              
              {/* Office location dots with pulsing animation */}
              <circle cx={office.x} cy={office.y} r={office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5} 
                      fill="#14b8a6" opacity="0.8">
                <animate attributeName="r" values={`${office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5};${office.size === 'lg' ? 3.5 : office.size === 'md' ? 3 : 2.5};${office.size === 'lg' ? 2.5 : office.size === 'md' ? 2 : 1.5}`} 
                         dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`}/>
              </circle>
            </g>
          ))}
          
          {/* Orbital rings around Earth with rotation */}
          <ellipse cx="50" cy="50" rx="50" ry="8" fill="none" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="15s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="50" cy="50" rx="52" ry="6" fill="none" stroke="#14b8a6" strokeWidth="0.3" opacity="0.15">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="50" cy="50" rx="54" ry="4" fill="none" stroke="#14b8a6" strokeWidth="0.2" opacity="0.1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
        
        {/* Floating network particles with enhanced animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-60">
            <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute"></div>
          </div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}>
            <div className="w-full h-full bg-teal-300 rounded-full animate-ping absolute" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}>
            <div className="w-full h-full bg-teal-500 rounded-full animate-ping absolute" style={{animationDelay: '2s'}}></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}>
            <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Info Block Component ---
interface InfoBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-6 group">
    <div className="text-teal-400 mt-1 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-teal-400/50">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-teal-400 text-transparent bg-clip-text group-hover:from-teal-300 group-hover:to-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-300 mt-2 max-w-sm group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      <button className="bg-teal-400 text-black font-bold py-3 px-8 rounded-full mt-6 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-400/25 hover:-translate-y-1">
        Learn more
      </button>
    </div>
  </div>
);

// --- Reusable Form Field Components ---
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  as?: 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({ label, as, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-1">
      {label} <span className="text-red-400">*</span>
    </label>
    {as === 'textarea' ? (
      <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} rows={4} className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" />
    ) : (
      <input {...props as React.InputHTMLAttributes<HTMLInputElement>} className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" />
    )}
  </div>
);

interface CheckboxProps {
  label: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id }) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className="h-4 w-4 text-teal-400 border-white/20 rounded focus:ring-teal-400 bg-white/10" />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-300">{label}</label>
  </div>
);

// --- Main Contact Section Component ---
const ContactSection: React.FC = () => {
  const servicesOptions = [
    "E-commerce Platform Development", "Online Store Setup", "Payment Gateway Integration",
    "Inventory Management System", "Order Processing Automation", "Customer Analytics",
    "Mobile Commerce App", "Multi-vendor Marketplace", "Digital Marketing Solutions",
    "SEO & Performance Optimization", "Customer Support Chatbot", "Other E-commerce Services"
  ];

  return (
    <section className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Column: Form */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl shadow-teal-400/25">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-400">Ready To Get Started</h2>
          <p className="text-gray-300 mt-2 mb-8">
            Connect with us to explore how we can deliver exceptional IT solutions for your needs.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="First Name" type="text" />
              <FormField label="Last Name" type="text" />
            </div>
            <FormField label="Email" type="email" />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Phone number <span className="text-red-400">*</span></label>
              <div className="flex">
                <select className="bg-white/10 border border-white/20 rounded-l-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors">
                  <option className="bg-black text-white">Pakistan (پاکستان)</option>
                </select>
                <input type="text" defaultValue="+92" className="w-full bg-white/10 border-t border-b border-r border-white/20 rounded-r-md p-3 text-white placeholder-gray-400 focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Budget <span className="text-red-400">*</span></label>
              <div className="relative">
                <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors">
                  <option className="bg-black text-white">Your Budget</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <FormField label="Company name" type="text" />
            <FormField label="Company domain / URL" type="text" />
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">Region <span className="text-red-400">*</span></label>
              <div className="relative">
                <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors">
                  <option className="bg-black text-white">Please Select</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Services you're looking for <span className="text-red-400">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOptions.map((service) => (
                  <Checkbox key={service} label={service} id={service.replace(/\s+/g, '-').toLowerCase()} />
                ))}
              </div>
            </div>
            <FormField label="Project Details" as="textarea" />
             <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1">I am looking for a job at Devsinc</label>
              <div className="relative">
                <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-md p-3 text-white focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-colors">
                  <option className="bg-black text-white">Please Select</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            {/* reCAPTCHA Placeholder */}
            <div className="bg-white/5 border border-white/20 rounded p-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-7 h-7 bg-teal-400 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="ml-3 text-xs text-gray-400">protected by reCAPTCHA</span>
                </div>
                 <div className="text-xs text-gray-500">Privacy - Terms</div>
            </div>
            <button type="submit" className="w-full bg-teal-400 text-black font-bold py-4 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25">
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="relative pt-16">
            <GlobalNetworkEarth />
            <div className="space-y-16">
                <InfoBlock 
                    icon={<Globe3DIcon />}
                    title="Global Presence"
                    description="We're across 5 continents, explore our office nearest to you."
                />
                <InfoBlock 
                    icon={<Users3DIcon />}
                    title="Global Leaders"
                    description="Our capability and competencies are backed by diverse Global leadership."
                />
            </div>
        </div>
      </div>
       {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25">
        Let&apos;s Talk Business
      </button>
    </section>
  );
};

export default ContactSection;
