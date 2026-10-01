"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/content";
import { scrollToTarget } from "@/lib/lenis";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 pt-6 md:px-8">
      <div className="rule-t flex items-center justify-between pt-6">
        <p className="font-tech text-[11px] tracking-[0.2em] uppercase text-muted">
          © 2026 {profile.name}
        </p>
        <p className="hidden font-tech text-[11px] tracking-[0.2em] uppercase text-muted sm:block">
          Built with Next.js
        </p>
        <button
          onClick={() => scrollToTarget("#top")}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-accent hover:text-accent"
          data-cursor
        >
          <ArrowUp size={16} strokeWidth={1.75} />
        </button>
      </div>
    </footer>
  );
}
