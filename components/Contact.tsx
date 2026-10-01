"use client";

import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/content";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

function ContactRow({
  label,
  value,
  href,
  pending = false,
}: {
  label: string;
  value: string;
  href?: string;
  pending?: boolean;
}) {
  const inner = (
    <>
      <span className="font-tech text-[10px] tracking-[0.25em] uppercase text-muted">
        {label}
      </span>
      <span className="flex items-center gap-2 break-all font-display text-base font-semibold tracking-tight md:text-lg">
        {pending ? (
          <span className="text-muted">Link pending</span>
        ) : (
          <>
            <span className={href ? "u-sweep" : ""}>{value}</span>
            {href && (
              <ArrowUpRight
                size={18}
                strokeWidth={1.75}
                className="text-muted transition-colors group-hover:text-accent"
              />
            )}
          </>
        )}
      </span>
    </>
  );

  const cls =
    "group rule-t flex items-center justify-between gap-3 py-4 last:border-b last:border-hairline";

  return href && !pending ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls} data-cursor>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="section-shell"
    >
      <Reveal>
        <h2 className="section-heading font-tech text-[10px] tracking-[0.28em] uppercase text-muted">
          Contact
        </h2>
      </Reveal>

      <Reveal>
        <p className="max-w-3xl font-display text-3xl font-bold leading-[1.02] tracking-tight md:text-5xl">
          Let&apos;s build something{" "}
          <em className="font-flair italic font-normal text-accent">real.</em>
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-tech text-[10px] tracking-[0.2em] uppercase text-paper transition-transform"
              data-cursor
            >
              {profile.email}
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-ink"
              data-cursor
            >
              {copied ? (
                <Check size={17} strokeWidth={1.75} className="text-accent" />
              ) : (
                <Copy size={17} strokeWidth={1.75} />
              )}
            </button>
          </Magnetic>
        </div>
      </Reveal>

      <div className="mt-8 md:mt-10">
        <ContactRow
          label="GitHub"
          value={`@${profile.githubHandle}`}
          href={profile.github}
        />
        <ContactRow
          label="LinkedIn"
          value="—"
          pending={profile.linkedin === ""}
          href={profile.linkedin || undefined}
        />
        <ContactRow label="Resume" value="resume.pdf" href={profile.resume} />
      </div>
    </section>
  );
}
