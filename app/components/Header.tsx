'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    
    gsap.fromTo(navItemsRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
      }
    );
  }, []);

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <header ref={headerRef} className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            Your Name
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <a
                key={item}
                ref={addToRefs}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                style={{ opacity: 0 }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-xl hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-gray-800/95 backdrop-blur-md p-6 rounded-lg border border-white/10">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-blue-400 py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}