import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function registerMotion() {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isFinePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export function revealFrom(
  elements: gsap.TweenTarget,
  vars: gsap.TweenVars & { y?: number } = {},
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0, x: 0, clipPath: 'none', clearProps: 'transform' });
    return;
  }

  return gsap.fromTo(
    elements,
    { opacity: 0, y: vars.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08,
      ...vars,
    },
  );
}
