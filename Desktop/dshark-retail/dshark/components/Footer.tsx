import React from 'react';
import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';

// --- Reusable SVG Logo Component ---
const SharkRetailLogo = () => (
  <div className="flex items-center gap-3">
    <img
      src="/images/sharks-retail-logo.png"
      alt="Shark Retail Logo"
      className="h-14 w-auto"
    />
    <div className="flex flex-col">
      <span className="text-2xl font-bold">
        <span className="text-teal-400">Shark</span> <span className="text-white">Retail</span>
      </span>
      <span className="text-sm text-gray-400">Retail Automation Solutions</span>
    </div>
  </div>
);

// --- Custom X (Twitter) Icon ---
const XIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// --- Data for the Footer ---
const footerNavLinks = ["Home Page", "About Company", "Automation Solutions", "Additional Services", "Contact Information"];

const locationsData = [
  { 
    country: "United States", 
    officeType: "Headquarters", 
    flagEmoji: "🇺🇸", 
    address: ["22023 Rustic Canyon Ln", "Richmond, TX 77469", "USA"] 
  },
  { 
    country: "Pakistan", 
    officeType: "Global Delivery Center", 
    flagEmoji: "🇵🇰", 
    address: ["DHA Commercial", "Bukhari, Karachi", "Pakistan"] 
  }
];

const socialLinks = [
  { href: "#", icon: <Facebook size={20} /> },
  { href: "#", icon: <Linkedin size={20} /> },
  { href: "#", icon: <Instagram size={20} /> },
  { href: "#", icon: <XIcon /> }
];

// --- Reusable Child Components ---
const FooterLink: React.FC<{ label: string }> = ({ label }) => (
  <a 
    href={
      label === "Home Page" ? "/" : 
      label === "Contact Information" ? "/contact" : 
      "#"
    } 
    className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors"
  >
    {label}
    <ChevronDown size={16} className="text-teal-400" />
  </a>
);

interface LocationCardProps {
  country: string;
  officeType: string;
  flagEmoji: string;
  address: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({ country, officeType, flagEmoji, address }) => (
  <div>
    <h3 className="text-xl font-bold text-white flex items-center gap-3">
      {country}
      <span className="text-gray-400 text-sm font-normal flex items-center gap-1">
        ({officeType})
        {officeType === "Global Delivery Center" && (
          <span className="text-teal-400">🇵🇰</span>
        )}
        {officeType === "Headquarters" && (
          <span className="text-teal-400">🇺🇸</span>
        )}
      </span>
    </h3>
    <p className="mt-4 text-gray-400 leading-relaxed">
      {address.map(line => <React.Fragment key={line}>{line}<br/></React.Fragment>)}
    </p>
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} className="text-white bg-white/10 p-2 rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300">
    {icon}
  </a>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 px-8 sm:px-16 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-400/25 to-transparent z-0"></div>

      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm hover:bg-white transition-colors">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        {/* Top Section: Logo and Nav */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <SharkRetailLogo />
          <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {footerNavLinks.map(link => <FooterLink key={link} label={link} />)}
          </nav>
        </div>

        {/* Middle Section: Globe and Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Left Side: Globe Visualization */}
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="relative w-full h-full animate-spin-slow">
                {/* Earth Globe with 3D Effect */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Earth gradient */}
                    <radialGradient id="footerEarthGradient" cx="40%" cy="30%" r="60%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8"/>
                      <stop offset="40%" stopColor="#0d9488" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="#134e4a" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0.3"/>
                    </radialGradient>
                    
                    {/* Earth highlight */}
                    <linearGradient id="footerEarthHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
                    </linearGradient>
                    
                    {/* Glow effect */}
                    <filter id="footerEarthGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Main Earth sphere with rotation */}
                  <circle cx="50" cy="50" r="45" fill="url(#footerEarthGradient)" stroke="#14b8a6" strokeWidth="0.5" filter="url(#footerEarthGlow)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 50 50;360 50 50"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  {/* Earth highlight for 3D effect */}
                  <ellipse cx="40" cy="40" rx="15" ry="20" fill="url(#footerEarthHighlight)" opacity="0.4"/>
                  
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
                  <line x1="50" y1="50" x2="25" y2="35" stroke="#14b8a6" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50" y1="50" x2="60" y2="40" stroke="#14b8a6" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" values="0;4;0" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                  </line>
                  
                  {/* Office location dots with pulsing animation */}
                  <circle cx="25" cy="35" r="2.5" fill="#14b8a6" opacity="0.8">
                    <animate attributeName="r" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="60" cy="40" r="2" fill="#14b8a6" opacity="0.8">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                  
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
                </svg>
                
                {/* Floating network particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-60">
                    <div className="w-full h-full bg-teal-400 rounded-full animate-ping absolute"></div>
                  </div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}>
                    <div className="w-full h-full bg-teal-300 rounded-full animate-ping absolute" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Address Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locationsData.map(location => <LocationCard key={location.country} {...location} />)}
          </div>
        </div>

        {/* Bottom Section: Contact Info, Legal, and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16 pt-8 border-t border-white/10">
          <div className="space-y-6">
            <div className="space-y-3">
              <a href="mailto:business@sharkretail.com" className="text-xl font-bold text-white hover:text-teal-400 transition-colors block">
                business@sharkretail.com
              </a>
              <a href="tel:+14694807938" className="text-lg font-semibold text-white hover:text-teal-400 transition-colors block">
                (469) 480-7938
              </a>
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => <SocialIcon key={index} {...link} />)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
