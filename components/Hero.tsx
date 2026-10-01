"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { hero, profile } from "@/lib/content";
import MeshCanvas from "./MeshCanvas";
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
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <MeshCanvas className="opacity-70" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-32 md:px-8 md:pb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 font-tech text-[11px] tracking-[0.35em] uppercase text-muted"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display leading-[0.88] tracking-[-0.03em]">
          <span className="block text-[clamp(4.5rem,17vw,13rem)] font-extrabold">
            {started && <KineticWord word={profile.firstName.toUpperCase()} delay={0.2} />}
          </span>
          <span className="block text-[clamp(4.5rem,17vw,13rem)] font-extrabold">
            {started && (
              <KineticWord
                word={profile.lastName.toUpperCase()}
                delay={0.45}
                className="text-outline"
              />
            )}
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : reduced ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-snug text-ink/90 md:text-xl"
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
            className="flex items-center gap-6 font-tech text-[11px] tracking-[0.2em] uppercase text-muted"
          >
            <span>{profile.location}</span>
            <span className="hidden sm:inline">{profile.school} &rsquo;28</span>
            <button
              onClick={() => scrollToTarget("#work")}
              aria-label="Scroll to selected work"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
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
