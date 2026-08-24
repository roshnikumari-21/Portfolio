'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimationWrapper({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className,
}: AnimationWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    registerMotion();

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0, x: 0, scale: 1, clipPath: 'none' });
      return;
    }

    const ctx = gsap.context(() => {
      const base = {
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      };

      switch (animation) {
        case 'fadeIn':
          gsap.fromTo(element, { opacity: 0 }, { opacity: 1, ...base });
          break;
        case 'scaleIn':
          gsap.fromTo(element, { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, ...base });
          break;
        case 'clipUp':
          gsap.fromTo(
            element,
            { clipPath: 'inset(100% 0 0 0)', y: 24, opacity: 1 },
            { clipPath: 'inset(0% 0 0 0)', y: 0, ...base },
          );
          break;
        default:
          gsap.fromTo(element, { y: 48, opacity: 0 }, { y: 0, opacity: 1, ...base });
      }
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return <div ref={elementRef} className={className}>{children}</div>;
}
