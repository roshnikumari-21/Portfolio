'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

function icosahedron() {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw: number[][] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ];
  const vertices = raw.map(([x, y, z]) => {
    const len = Math.hypot(x, y, z);
    return [x / len, y / len, z / len] as [number, number, number];
  });
  const faces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];
  const edges = new Set<string>();
  faces.forEach((face) => {
    for (let i = 0; i < 3; i++) {
      const a = face[i];
      const b = face[(i + 1) % 3];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      edges.add(key);
    }
  });
  return { vertices, edges: [...edges].map((key) => key.split('-').map(Number) as [number, number]) };
}

export default function WireSculpture({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const { vertices, edges } = icosahedron();
    let raf = 0;
    let rotX = 0.4;
    let rotY = 0.2;
    let targetX = 0.4;
    let targetY = 0.2;

    const resize = () => {
      const size = canvas.clientWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const rotate = (v: [number, number, number], ax: number, ay: number) => {
      const x = v[0];
      const y0 = v[1];
      const z0 = v[2];
      const y = y0 * Math.cos(ax) - z0 * Math.sin(ax);
      const z = y0 * Math.sin(ax) + z0 * Math.cos(ax);
      const x1 = x * Math.cos(ay) + z * Math.sin(ay);
      const z2 = -x * Math.sin(ay) + z * Math.cos(ay);
      return [x1, y, z2] as [number, number, number];
    };

    const draw = () => {
      const size = canvas.clientWidth;
      ctx.clearRect(0, 0, size, size);
      rotX += (targetX - rotX) * 0.06;
      rotY += (targetY - rotY) * 0.06;
      if (!reduced) {
        rotY += 0.004;
        rotX += 0.0015;
      }

      const projected = vertices.map((v) => {
        const [x, y, z] = rotate(v, rotX, rotY);
        const scale = size * 0.38 * (1 + z * 0.18);
        return {
          x: size / 2 + x * scale,
          y: size / 2 + y * scale,
          z,
        };
      });

      ctx.lineWidth = 1;
      edges.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        const depth = (pa.z + pb.z) * 0.5;
        const alpha = 0.22 + (depth + 1) * 0.28;
        ctx.strokeStyle = `rgba(239, 230, 217, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });

      projected.forEach((p) => {
        ctx.fillStyle = p.z > 0.2 ? 'rgba(197, 106, 60, 0.85)' : 'rgba(239, 230, 217, 0.45)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.z > 0.2 ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      targetY = 0.2 + nx * 0.8;
      targetX = 0.4 + ny * 0.6;
    };

    resize();
    draw();
    if (!reduced) raf = requestAnimationFrame(loop);

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
