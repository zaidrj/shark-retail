"use client";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero: React.FC = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;
    
    if (video1) {
      video1.play().catch((error) => {
        console.log('Autoplay was prevented by the browser:', error);
      });
    }
    if (video2) {
      video2.play().catch((error) => {
        console.log('Autoplay was prevented by the browser:', error);
      });
    }
  }, []);

  const slides = [
    {
      video: "/videos/hero-vid-1.mp4",
      title: "In a landscape of",
      highlight: "volatile",
      titleEnd: "speculation,",
      description: "We offer a tangible, high-yield alternative. We build, scale, and manage proprietary e-commerce portfolios for discerning investors seeking superior, risk-adjusted returns.",
      buttonText: "Schedule Your Capital Intro Call"
    },
    {
      video: "/videos/hero-vid-2.mp4",
      title: "Strategic Capital Deployment in",
      highlight: "Global Commerce",
      titleEnd: "",
      description: "While traditional markets fluctuate on sentiment, global e-commerce grows on fundamental demand. We identify and capitalize on this permanent shift. Our firm provides a seamless, institutional-grade gateway into this $6 trillion ecosystem. We handle all operations—from asset creation to global logistics—transforming your capital into a actively managed, cash-flow generative enterprise.",
      buttonText: "Explore Our Solutions"
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full overflow-hidden bg-black">
              {/* Video Background */}
              <video
                ref={index === 0 ? videoRef1 : videoRef2}
                className={`absolute inset-0 h-full object-cover z-10 ${
                  index === 1 
                    ? 'w-full opacity-30' 
                    : 'w-full'
                }`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                poster="/images/hero-poster.jpg"
                onCanPlay={() => {
                  console.log(`Video ${index + 1} is ready to play.`);
                }}
                onError={(e) => {
                  console.error(`Video ${index + 1} Error:`, e);
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Content */}
              <div className="relative z-15 flex h-full items-center justify-start">
                <div className="text-left text-white p-8">
                  <h1 className={`mb-6 tracking-tight ${index === 1 ? 'max-w-3xl' : ''}`} style={{ fontFamily: 'Poppins', fontSize: '70px', fontWeight: '700', lineHeight: '1.2' }}>
                    {index === 1 ? (
                      <>
                        Strategic Capital Deployment in<br />
                        <span className="text-teal-400">Global</span> <span className="text-white">Commerce</span>
                      </>
                      ) : (
                        <>
                          {slide.title}<br />
                          <span className="text-teal-400">{slide.highlight}</span> {slide.titleEnd}
                        </>
                      )
                    }
                  </h1>
                  <p className="mb-8 text-xl font-black lg:text-2xl max-w-3xl">
                    {slide.description}
                  </p>
                  <div className="flex justify-start">
                    <button className="bg-teal-400 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black rounded-full">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 12px !important;
        }
        
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 16px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          margin: 0 !important;
          border-radius: 50% !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative !important;
          cursor: pointer !important;
          border: 2px solid rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(10px) !important;
        }
        
        .swiper-pagination-bullet::before {
          content: '' !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.6) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #14b8a6, #0d9488) !important;
          transform: scale(1.3) !important;
          border: 2px solid rgba(20, 184, 166, 0.8) !important;
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3) !important;
        }
        
        .swiper-pagination-bullet-active::before {
          background: rgba(255, 255, 255, 0.9) !important;
          transform: translate(-50%, -50%) scale(1.2) !important;
        }
        
        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.6) !important;
          transform: scale(1.1) !important;
          border: 2px solid rgba(255, 255, 255, 0.4) !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
        }
        
        .swiper-pagination-bullet:hover::before {
          background: rgba(255, 255, 255, 0.8) !important;
        }
        
        /* Add a subtle pulse animation for the active bullet */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(20, 184, 166, 0.8), 0 0 50px rgba(20, 184, 166, 0.4);
          }
          100% {
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3);
          }
        }
        
        .swiper-pagination-bullet-active {
          animation: pulse 2s ease-in-out infinite !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;