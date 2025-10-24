"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

// --- Interactive Plexus Background Component ---
// This component draws the animated, interactive constellation effect on a canvas.
const PlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const particleCount = 50;
    const mouse = { x: -200, y: -200, radius: 100 };

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || 500;
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number = 2;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx!.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(0, 0, 0, ${1 - distance / 120})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
        // Connect particles to the mouse
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distanceMouse < mouse.radius) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.strokeStyle = `rgba(0, 0, 0, ${1 - distanceMouse / mouse.radius})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
        }
      }
    };
    
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 500;
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


// --- Data for the Logos ---
const logos = [
  { src: '/images/forbes.png', alt: 'Forbes', className: 'col-span-4 col-start-2 row-start-2 h-12' },
  { src: '/images/yahoo.png', alt: 'Yahoo Finance', className: 'col-span-4 col-start-2 row-start-3 h-12' },
  { src: '/images/khaleej-times.png', alt: 'Khaleej Times', className: 'col-span-4 col-start-6 row-start-2 h-12' },
  { src: '/images/mashable.png', alt: 'Mashable', className: 'col-span-3 col-start-6 row-start-3 h-8' },
  { src: '/images/benzinga.png', alt: 'Benzinga', className: 'col-span-3 col-start-10 row-start-2 h-20' },
  { src: '/images/new-york-weekly.png', alt: 'New York Weekly', className: 'col-span-3 col-start-10 row-start-3 h-12' },
];

const LogoItem: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={200}
      height={80}
      className="object-contain w-auto h-full filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    />
  </div>
);

// --- Main "Featured In" Section Component ---
const FeaturedInSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 px-8 overflow-hidden">
      <PlexusBackground />
      
      {/* Floating Side Button */}
      <button className="fixed top-1/2 right-0 -translate-y-1/2 bg-teal-400 text-black font-bold py-4 px-3 rounded-l-xl z-50 [writing-mode:vertical-rl] transform rotate-180 uppercase tracking-wider text-sm">
        Let&apos;s Talk Business
      </button>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-12 grid-rows-3 gap-y-8 gap-x-6 items-center">
          {/* Section Title */}
          <div className="col-span-4 col-start-2 row-start-1">
            <h2 className="text-4xl font-bold text-black">Industry Coverage</h2>
          </div>

          {/* Logos */}
          {logos.map((logo) => (
            <LogoItem key={logo.alt} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
