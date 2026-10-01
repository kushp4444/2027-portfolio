"use client";

import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36"
    >
      <Reveal>
        <div className="mb-10 flex items-baseline justify-between md:mb-14">
          <h2 className="font-tech text-[11px] tracking-[0.35em] uppercase text-muted">
            Experience
          </h2>
          <span className="font-tech text-[11px] tracking-[0.2em] text-muted">
            (03)
          </span>
        </div>
      </Reveal>

      <div>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <article className="rule-t py-8 last:border-b last:border-hairline md:py-10">
              <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-2 font-tech text-[11px] tracking-[0.18em] uppercase text-muted">
                    {job.period}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-ink/90">
                    {job.role}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
