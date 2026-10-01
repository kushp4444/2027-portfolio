"use client";

import { useEffect, useRef } from "react";

/**
 * One restrained canvas moment: a quiet particle/mesh field that drifts and
 * gently reacts to the pointer. Pauses offscreen; static when reduced motion.
 */
export default function MeshCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    const css = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    function resize() {
      const r = canvas!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function step() {
      if (!running) return;
      const accent = css("--accent") || "#d9481c";
      const ink = css("--ink") || "#1b1a16";
      ctx!.clearRect(0, 0, w, h);

      for (const p of pts) {
        // gentle pointer repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 120 * 120 && d2 > 1) {
          const d = Math.sqrt(d2);
          p.vx += (dx / d) * 0.03;
          p.vy += (dy / d) * 0.03;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        // keep a whisper of drift
        p.vx += (Math.random() - 0.5) * 0.002;
        p.vy += (Math.random() - 0.5) * 0.002;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // links
      ctx!.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx!.strokeStyle = ink;
            ctx!.globalAlpha = 0.07 * (1 - d / 130);
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      ctx!.globalAlpha = 1;

      // nodes — a few in accent, rest in ink
      pts.forEach((p, i) => {
        ctx!.fillStyle = i % 9 === 0 ? accent : ink;
        ctx!.globalAlpha = i % 9 === 0 ? 0.5 : 0.28;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, i % 9 === 0 ? 2 : 1.2, 0, Math.PI * 2);
        ctx!.fill();
      });
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(step);
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    if (reduced) {
      // draw one static frame
      running = false;
      const accent = css("--accent") || "#d9481c";
      const ink = css("--ink") || "#1b1a16";
      pts.forEach((p, i) => {
        ctx.fillStyle = i % 9 === 0 ? accent : ink;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    } else {
      const io = new IntersectionObserver(
        ([entry]) => {
          const visible = entry.isIntersecting;
          if (visible && !running) {
            running = true;
            raf = requestAnimationFrame(step);
          } else if (!visible && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        },
        { threshold: 0 }
      );
      io.observe(canvas);
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", resize);
      return () => {
        running = false;
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", resize);
      };
    }

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
