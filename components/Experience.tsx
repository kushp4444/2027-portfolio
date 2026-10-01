"use client";

import { experience } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell"
    >
      <Reveal>
        <div className="section-heading flex items-baseline justify-between">
          <h2 className="font-tech text-[10px] tracking-[0.28em] uppercase text-muted">
            Experience
          </h2>
        </div>
      </Reveal>

      <div>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <article className="rule-t py-5 last:border-b last:border-hairline md:py-6">
              <div className="grid gap-2.5 md:grid-cols-[1fr_2fr] md:gap-6">
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight tracking-tight md:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1.5 font-tech text-[10px] tracking-[0.18em] uppercase text-muted">
                    {job.period}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink/90">
                    {job.role}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-xs leading-[1.45] text-muted"
                      >
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
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
