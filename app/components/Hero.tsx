'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
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
      <div className="text-center max-w-4xl">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0">
          Hi, I'm <span className="text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Your Name</span>
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 opacity-0">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            View My Work
          </a>
          <a href="#contact" className="border border-white/20 hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}