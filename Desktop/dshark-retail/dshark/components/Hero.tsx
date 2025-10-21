"use client";
import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay was prevented by the browser:', error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 
        Video Background:
        - Added a `poster` image. This is crucial. It shows an image while the video
          loads and ensures the video element is visually present.
        - Added diagnostic event handlers (`onCanPlay`, `onError`) to log the video's status
          in the browser console (F12).
      */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        poster="/images/hero-poster.jpg"
        onCanPlay={() => {
          console.log("Video is ready to play.");
        }}
        onError={(e) => {
          console.error("Video Error:", e);
        }}
      >
        <source src="/videos/hero-vid-1.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-15 flex h-full items-center justify-start">
        <div className="text-left text-white p-8">
              <h1 className="mb-6 tracking-tight" style={{ fontFamily: 'Poppins', fontSize: '70px', fontWeight: '700', lineHeight: '1.2' }}>
              In a landscape of<br /><span className="text-teal-400">volatile</span> speculation,  
              </h1>
           <p className="mb-8 text-xl font-black lg:text-2xl max-w-3xl">
           We offer a tangible, high-yield alternative. We build, scale, and manage proprietary e-commerce portfolios for discerning investors seeking superior, risk-adjusted returns.
           </p>
          <div className="flex justify-start">
            <button className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full">
             Schedule Your Capital Intro Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;