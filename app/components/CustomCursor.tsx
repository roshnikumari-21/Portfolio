'use client';

import { useEffect, useRef } from 'react';
import { isFinePointer, prefersReducedMotion } from '../lib/motion';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    document.body.classList.add('has-custom-cursor');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    const move = (event: PointerEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;

      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [data-cursor]');
      const view = target?.closest('[data-cursor="view"]');
      ringRef.current?.classList.toggle('is-hover', Boolean(interactive));
      ringRef.current?.classList.toggle('is-view', Boolean(view));
      labelRef.current?.classList.toggle('is-visible', Boolean(view));
      if (labelRef.current) labelRef.current.textContent = view ? 'View' : '';
    };

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={labelRef} className="cursor-label" aria-hidden="true" />
    </>
  );
}
