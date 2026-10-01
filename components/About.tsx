"use client";

import { motion } from "motion/react";
import { aboutLines, profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <h2 className="mb-10 font-tech text-[11px] tracking-[0.35em] uppercase text-muted md:mb-14">
          About
        </h2>
      </Reveal>
      <div className="max-w-3xl">
        {aboutLines.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              {i === 0 ? (
                <>
                  I build <em className="font-flair italic text-accent">production</em> AI systems — not demos.
                </>
              ) : (
                line
              )}
            </p>
            {i < aboutLines.length - 1 && (
              <div className="my-6 border-t border-hairline md:my-8" aria-hidden />
            )}
          </Reveal>
        ))}
        <Reveal delay={0.2}>
          <p className="mt-10 font-tech text-[11px] tracking-[0.2em] uppercase text-muted">
            {profile.degree} — {profile.grad}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
