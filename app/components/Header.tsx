'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerMotion();
    if (!prefersReducedMotion() && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 },
      );
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const ids = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled || isMenuOpen
          ? 'bg-ink/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-4 md:px-10" aria-label="Primary">
        <a href="#hero" className="font-heading text-lg tracking-[0.18em] uppercase text-paper">
          Roshni
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`kicker !normal-case tracking-[0.16em] transition-colors duration-300 ${
                active === item.href.slice(1) ? 'text-accent' : 'text-muted hover:text-paper'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden kicker text-paper"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden min-h-[100svh] bg-ink px-5 pb-16 pt-6"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-heading text-4xl tracking-tight text-paper"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
