"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";

/** Abstract generative preview per project — no external images. */
function PreviewArt({ project }: { project: Project }) {
  if (project.id === "mesh") {
    // wireframe triangle mesh
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.85">
          <path d="M20 170 L90 60 L160 170 Z" />
          <path d="M90 60 L160 170 L230 60 Z" />
          <path d="M160 170 L230 60 L300 170 Z" />
          <path d="M90 60 L130 20 L200 40 L230 60" />
          <path d="M20 170 L90 60 M160 170 L90 60 M160 170 L230 60" opacity="0.4" />
        </g>
        <g fill="currentColor">
          <circle cx="20" cy="170" r="3.5" />
          <circle cx="90" cy="60" r="3.5" />
          <circle cx="160" cy="170" r="3.5" />
          <circle cx="230" cy="60" r="3.5" />
          <circle cx="300" cy="170" r="3.5" className="text-accent" fill="currentColor" />
        </g>
      </svg>
    );
  }
  if (project.id === "rxid") {
    // concentric signal rings
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
        <g stroke="currentColor" fill="none" opacity="0.85">
          <circle cx="160" cy="100" r="18" strokeWidth="1.5" />
          <circle cx="160" cy="100" r="42" strokeWidth="1" opacity="0.7" />
          <circle cx="160" cy="100" r="68" strokeWidth="1" opacity="0.45" />
          <circle cx="160" cy="100" r="94" strokeWidth="1" opacity="0.25" />
        </g>
        <circle cx="160" cy="100" r="5" className="text-accent" fill="currentColor" />
        <text x="160" y="104" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="monospace">1st</text>
      </svg>
    );
  }
  // resdex — collaboration bars
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <g fill="currentColor" opacity="0.8">
        {[38, 74, 110, 146, 182, 218, 254].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={150 - (26 + ((i * 37) % 88))}
            width="18"
            height={26 + ((i * 37) % 88)}
            opacity={0.35 + (i % 3) * 0.2}
            className={i === 3 ? "text-accent" : ""}
          />
        ))}
      </g>
      <line x1="20" y1="152" x2="300" y2="152" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function ProjectRow({
  project,
  onHover,
  onLeave,
}: {
  project: Project;
  onHover: (p: Project, e: React.MouseEvent) => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="group rule-t last:border-b last:border-hairline"
      onMouseMove={(e) => onHover(project, e)}
      onMouseLeave={onLeave}
      data-cursor
    >
      <div className="flex items-baseline gap-4 py-7 transition-transform duration-500 ease-out group-hover:translate-x-2 md:gap-8 md:py-9">
        <span className="font-tech text-xs text-muted">{project.index}</span>
        <div className="flex-1">
          <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline px-3 py-1 font-tech text-[10px] tracking-[0.14em] uppercase text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className="font-tech text-xs text-muted">{project.year}</span>
          <ArrowUpRight
            size={20}
            strokeWidth={1.5}
            className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>
      </div>
      <p className="pb-6 pl-8 font-tech text-[11px] tracking-[0.2em] uppercase text-accent md:pl-14">
        {project.tagline}
      </p>
    </div>
  );
}

export default function Work() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<Project | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleHover = (p: Project, e: React.MouseEvent) => {
    if (reduced) return;
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
    setActive(p);
  };

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <div ref={wrapRef} className="relative">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-14">
            <h2 className="font-tech text-[11px] tracking-[0.35em] uppercase text-muted">
              Selected Work
            </h2>
            <span className="font-tech text-[11px] tracking-[0.2em] text-muted">
              (03)
            </span>
          </div>
        </Reveal>

        <div>
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectRow
                project={p}
                onHover={handleHover}
                onLeave={() => setActive(null)}
              />
            </Reveal>
          ))}
        </div>

        {/* cursor-following preview (desktop, no reduced motion) */}
        <AnimatePresence>
          {active && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-40 hidden lg:block"
              style={{ x: sx, y: sy }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <div className="-translate-x-1/2 -translate-y-[112%]">
                <div className="h-[200px] w-[320px] overflow-hidden rounded-xl border border-hairline bg-paper p-4 text-ink shadow-2xl shadow-ink/10">
                  <PreviewArt project={active} />
                </div>
                <p className="mt-2 text-center font-tech text-[10px] tracking-[0.25em] uppercase text-muted">
                  {active.title} — {active.year}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
