"use client";

import { motion } from "motion/react";
import { aboutLines, profile } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section-shell">
      <Reveal>
        <h2 className="section-heading font-tech text-[10px] tracking-[0.28em] uppercase text-muted">
          About
        </h2>
      </Reveal>
      <div className="max-w-3xl">
        {aboutLines.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <p className="font-display text-lg font-medium leading-[1.3] tracking-tight md:text-3xl">
              {i === 0 ? (
                <>
                  I build <em className="font-flair italic text-accent">production</em> AI systems — not demos.
                </>
              ) : (
                line
              )}
            </p>
            {i < aboutLines.length - 1 && (
              <div className="my-4 border-t border-hairline md:my-5" aria-hidden />
            )}
          </Reveal>
        ))}
        <Reveal delay={0.2}>
          <p className="mt-6 font-tech text-[10px] tracking-[0.2em] uppercase text-muted">
            {profile.degree} — {profile.grad}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
