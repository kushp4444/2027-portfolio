"use client";

import Image from "next/image";
import { experience } from "@/lib/content";
import Reveal from "./Reveal";

const companyLogos: Record<string, string> = {
  "RBC - Enterprise Architecture": "rbc-logo.png",
  "Moriroku Technology North America": "moriroku-logo.png",
  "PBJ Cleaning Depot": "pbj-logo.png",
};
const assetBase = process.env.NODE_ENV === "production" ? "/2027-portfolio" : "";

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
                  <h3 className="flex items-start gap-2 font-display text-lg font-bold leading-tight tracking-tight md:text-2xl">
                    {job.current && (
                      <>
                        <span className="current-position-dot mt-[0.45em] shrink-0" aria-hidden="true" />
                        <span className="sr-only">Current position: </span>
                      </>
                    )}
                    <span>{job.company}</span>
                  </h3>
                  <p className="mt-1.5 font-tech text-[10px] tracking-[0.18em] uppercase text-muted">
                    {job.period}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    {companyLogos[job.company] && (
                      <Image
                        src={`${assetBase}/${companyLogos[job.company]}`}
                        alt=""
                        width={44}
                        height={28}
                        unoptimized
                        className="h-7 w-11 shrink-0 rounded-sm object-contain opacity-70 grayscale"
                      />
                    )}
                    <p className="min-w-0 text-xs font-medium text-ink/90">
                      {job.role}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-[1.55] text-ink/80"
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
