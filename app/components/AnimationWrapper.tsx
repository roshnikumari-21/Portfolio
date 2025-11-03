'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
}

export default function AnimationWrapper({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 1 
}: AnimationWrapperProps) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      switch (animation) {
        case 'fadeUp':
          gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration, 
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
        
        case 'fadeIn':
          gsap.fromTo(element,
            { opacity: 0 },
            {
              opacity: 1,
              duration,
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
        
        case 'scaleIn':
          gsap.fromTo(element,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration,
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
        
        default:
          gsap.fromTo(element,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration,
              delay,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
      }
    });

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return <div ref={elementRef}>{children}</div>;
}