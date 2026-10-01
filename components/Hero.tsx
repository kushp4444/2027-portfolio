"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, profile } from "@/lib/content";
import MeshCanvas from "./MeshCanvas";
import Magnetic from "./Magnetic";
import SocialLinks from "./SocialLinks";

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

        <div className="mt-4 flex flex-col gap-4 md:mt-5 md:flex-row md:items-end md:gap-8 md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : reduced ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 max-w-2xl text-xl font-medium leading-[1.3] tracking-tight text-ink/90 md:text-2xl"
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
            className="flex shrink-0 flex-col gap-3 font-tech text-[10px] tracking-[0.14em] uppercase text-muted"
          >
            <div className="flex items-center gap-3">
              <SocialLinks />
              <Magnetic strength={0.4}>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="u-sweep inline-flex min-h-11 items-center text-ink"
                  data-cursor
                >
                  Resume
                </a>
              </Magnetic>
            </div>
            <div className="flex flex-col gap-1 text-right leading-[1.5]">
              <span>{profile.location}</span>
              <span>{profile.school} &rsquo;28</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
