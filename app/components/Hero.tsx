'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Magnetic from './Magnetic';
import WireSculpture from './WireSculpture';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<HTMLSpanElement[]>([]);
  const metaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerMotion();
    if (prefersReducedMotion()) {
      gsap.set([lineRefs.current, metaRef.current, photoRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
        clipPath: 'none',
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        photoRef.current,
        { clipPath: 'inset(100% 0 0 0)', scale: 1.08 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 1.15 },
      )
        .fromTo(
          lineRefs.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.05, stagger: 0.08 },
          '-=0.7',
        )
        .fromTo(
          metaRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.45',
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.35',
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addLine = (el: HTMLSpanElement | null) => {
    if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-28 md:px-10 md:pb-16"
    >
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="kicker mb-6">Portfolio / 2026</p>
          <h1 className="mb-8">
            <span className="block overflow-hidden">
              <span
                ref={addLine}
                className="block font-heading text-[clamp(4.4rem,16vw,11.5rem)] font-semibold leading-[0.78] tracking-tight"
              >
                Roshni
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={addLine}
                className="block font-display italic text-[clamp(4.4rem,16vw,11.5rem)] leading-[0.78] text-accent"
              >
                Kumari
              </span>
            </span>
          </h1>

          <div ref={metaRef} className="max-w-xl space-y-6">
            <p className="text-lg md:text-xl text-paper/80 leading-relaxed">
              Full Stack Developer · Competitive Programmer · Former Flipkart SDE Intern
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 kicker">
              <span>CGPA 9.34/10.0</span>
              <span>Top 20 Flipkart Runway</span>
              <span>1200+ Problems Solved</span>
            </div>
          </div>

          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-paper bg-paper px-7 py-3 font-heading text-sm tracking-[0.14em] uppercase text-ink transition-colors hover:bg-transparent hover:text-paper"
              >
                View My Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-line px-7 py-3 font-heading text-sm tracking-[0.14em] uppercase text-paper transition-colors hover:border-paper"
              >
                Get In Touch
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="relative lg:col-span-4">
          <div className="relative mx-auto max-w-sm lg:ml-auto">
            <div ref={photoRef} className="overflow-hidden">
              <Image
                src="/myfacelogo.png"
                alt="Roshni Kumari - Full Stack Developer"
                width={480}
                height={480}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
            <WireSculpture className="pointer-events-auto absolute -bottom-8 -left-10 h-40 w-40 opacity-80 md:h-52 md:w-52" />
          </div>
        </div>
      </div>
    </section>
  );
}
