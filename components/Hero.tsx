"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { hero, profile } from "@/lib/content";
import MeshCanvas from "./MeshCanvas";
import Magnetic from "./Magnetic";
import { scrollToTarget } from "@/lib/lenis";

function KineticWord({
  word,
  delay,
  className = "",
}: {
  word: string;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const chars = word.split("");
  return (
    <span className={`inline-flex overflow-hidden pb-[0.08em] ${className}`} aria-label={word}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-transform"
          initial={{ y: reduced ? 0 : "110%", rotate: reduced ? 0 : 6 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{
            duration: reduced ? 0 : 0.9,
            delay: reduced ? 0 : delay + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ started }: { started: boolean }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[52svh] flex-col justify-center overflow-hidden">
      <MeshCanvas className="opacity-70" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 font-tech text-[10px] tracking-[0.28em] uppercase text-muted"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="flex flex-wrap items-baseline gap-x-[0.18em] font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.03em]">
          <span className="block font-extrabold">
            {started && <KineticWord word={profile.firstName.toUpperCase()} delay={0.2} />}
          </span>
          <span className="block font-extrabold">
            {started && (
              <KineticWord
                word={profile.lastName.toUpperCase()}
                delay={0.45}
                className="text-outline"
              />
            )}
          </span>
        </h1>

        <div className="mt-4 flex flex-col gap-4 md:mt-5 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : reduced ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-sm leading-[1.4] text-ink/90 md:text-base"
          >
            {hero.positioning}{" "}
            <em className="font-flair italic text-accent">
              {hero.positioningAccent}
            </em>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: started ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-tech text-[10px] tracking-[0.14em] uppercase text-muted"
          >
            <Magnetic strength={0.4}>
              <a href={profile.github} target="_blank" rel="noreferrer" className="u-sweep inline-flex min-h-10 items-center text-ink" data-cursor>GitHub</a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="u-sweep inline-flex min-h-10 items-center text-ink" data-cursor>Resume</a>
            </Magnetic>
            <span>{profile.location}</span>
            <span className="hidden xl:inline">{profile.school} &rsquo;28</span>
            <button
              onClick={() => scrollToTarget("#work")}
              aria-label="Scroll to selected work"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
              data-cursor
            >
              <motion.span
                animate={reduced ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowDown size={16} strokeWidth={1.75} />
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
