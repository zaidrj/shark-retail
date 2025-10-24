// src/components/Header.tsx

import React from 'react';

// --- Reusable Icon Components ---

// Official Shark Retail logo
const SharkRetailLogo = () => (
  <img
    src="/images/sharks-retail-logo.png"
    alt="Shark Retail Logo"
    className="h-16 w-auto"
  />
);

// Simple theme toggle switch
const ThemeToggle = () => (
  <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false">
    <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out" />
  </button>
);

// Chevron down icon for dropdowns
const ChevronDownIcon = () => (
  <svg
    className="h-4 w-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// --- Main Header Component ---

const Header: React.FC = () => {
  const navLinks = [
    'Home Page',
    'About Company',
    'Automation Solutions',
    'Additional Services',
    'Contact Information',
  ];

  return (
    <header className="bg-black text-white font-avant-garde">
      {/* 
        CUSTOM FONT INSTRUCTIONS:
        1. Add your font file (e.g., itcavantgardestd-bk.woff2) to `/public/fonts`.
        2. In `globals.css`, define the font-face:
           @font-face {
             font-family: 'Itcavantgardestd Bk';
             src: url('/fonts/itcavantgardestd-bk.woff2') format('woff2');
             font-weight: normal;
             font-style: normal;
           }
        3. In `tailwind.config.ts`, extend the theme:
           theme: {
             extend: {
               fontFamily: {
                 'avant-garde': ['Itcavantgardestd Bk', 'sans-serif'],
               },
             },
           },
      */}
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="group relative">
            <div className="flex items-center gap-0">
              <div className="transition-transform duration-700 ease-in-out group-hover:-translate-x-2">
                <SharkRetailLogo />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-x-2 group-hover:translate-x-0">
                <span className="font-bold text-lg">
                  <span className="text-teal-400">Shark</span> <span className="text-white">Retail</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-sm font-light tracking-wider">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={
                    link === "Home Page" ? "/" : 
                    link === "About Company" ? "/about" :
                    link === "Contact Information" ? "/contact" : 
                    "#"
                  } 
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  {link}
                  <ChevronDownIcon />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="border border-teal-400 bg-teal-400 text-white font-light py-3 px-6 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
            Explore Careers
          </button>
          <a href="/contact" className="border border-teal-400 text-teal-400 font-light py-3 px-6 rounded-full text-sm hover:bg-teal-400 hover:text-black transition-colors">
            Let's Talk Business
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
