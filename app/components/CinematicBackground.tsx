'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

type Stroke = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: string;
};

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    let pointer = { x: 0.5, y: 0.4 };
    let time = 0;

    const strokes: Stroke[] = [
      { x: 0.2, y: 0.3, vx: 0.00012, vy: 0.00008, radius: isMobile ? 180 : 280, hue: 'rgba(197, 106, 60, 0.11)' },
      { x: 0.75, y: 0.25, vx: -0.00009, vy: 0.00011, radius: isMobile ? 160 : 240, hue: 'rgba(212, 175, 122, 0.08)' },
      { x: 0.55, y: 0.7, vx: 0.00007, vy: -0.0001, radius: isMobile ? 200 : 320, hue: 'rgba(239, 230, 217, 0.05)' },
      { x: 0.15, y: 0.8, vx: 0.0001, vy: -0.00006, radius: isMobile ? 140 : 200, hue: 'rgba(197, 106, 60, 0.07)' },
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      strokes.forEach((stroke, i) => {
        if (!reduced) {
          stroke.x += stroke.vx + Math.sin(time * 0.0003 + i) * 0.00004;
          stroke.y += stroke.vy + Math.cos(time * 0.00025 + i) * 0.00004;
          if (stroke.x < -0.1 || stroke.x > 1.1) stroke.vx *= -1;
          if (stroke.y < -0.1 || stroke.y > 1.1) stroke.vy *= -1;
        }

        const px = (stroke.x + (pointer.x - 0.5) * 0.06) * width;
        const py = (stroke.y + (pointer.y - 0.5) * 0.06) * height;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, stroke.radius);
        gradient.addColorStop(0, stroke.hue);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(px, py, stroke.radius * 1.2, stroke.radius * 0.72, time * 0.00008 + i, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = (now: number) => {
      time = now;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (event: PointerEvent) => {
      pointer = { x: event.clientX / width, y: event.clientY / height };
    };

    resize();
    draw();

    if (!reduced) {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
