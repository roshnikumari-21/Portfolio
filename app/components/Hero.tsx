'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(photoRef.current, 
      { scale: 0, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' }
    )
    .fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Background animation
    gsap.to(heroRef.current, {
      background: 'linear-gradient(45deg, #1f2937, #111827, #1e40af)',
      duration: 2,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div 
              ref={photoRef}
              className="relative group"
            >
              {/* Main Photo Container */}
              <div className="relative z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-blue-400/50 transition-all duration-500">
                  <Image
                    src="/myfacelogo.png" // Update with your actual file name
                    alt="Roshni Kumari - Full Stack Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30 animate-float">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 animate-float-delayed">
                  <span className="text-xl">💻</span>
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30 animate-float-slow">
                  <span className="text-lg">⭐</span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-1000 -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0">
              Hi, I'm <span className="text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Roshni Kumari</span>
            </h1>
            <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 opacity-0">
              Full Stack Developer • Competitive Programmer •  Former Flipkart SDE Intern
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 opacity-0" ref={buttonsRef}>
              <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                CGPA: 9.60/10.0
              </div>
              <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                Top 20 Flipkart Runway
              </div>
              <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                1500+ Problems Solved
              </div>
            </div>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
              <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                <span>View My Projects</span>
                <span>→</span>
              </a>
              <a href="#contact" className="border border-white/20 hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2">
                <span>Get In Touch</span>
                <span>📧</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}