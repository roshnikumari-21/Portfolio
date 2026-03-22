'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-[var(--color-cyber-cyan)]/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold glitch-text text-white hover:text-[var(--color-cyber-cyan)] transition-colors duration-300" data-text="ROSHNI_K">
            ROSHNI_K
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-mono text-sm uppercase">
            {['About', 'Experience', 'Projects', 'Skills', 'Music', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[var(--color-cyber-pink)] hover:shadow-[0_0_10px_var(--color-cyber-pink)] tracking-widest transition-all duration-300 transform hover:scale-110 relative group"
              >
                <span className="text-[var(--color-cyber-yellow)] mr-1 group-hover:opacity-100 opacity-0 transition-opacity">&gt;</span>
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-cyber-cyan)] text-xl hover:text-[var(--color-cyber-pink)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            [ MENU ]
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-black/95 backdrop-blur-md p-6 rounded-none border border-[var(--color-cyber-cyan)]/50 font-mono text-sm uppercase">
            {['About', 'Experience', 'Projects', 'Skills', 'Music', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[var(--color-cyber-cyan)] hover:text-black py-3 px-4 rounded-none hover:bg-[var(--color-cyber-cyan)] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                &gt; {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}