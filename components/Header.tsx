"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { nav, profile } from "@/lib/content";
import { scrollToTarget } from "@/lib/lenis";
import Magnetic from "./Magnetic";

function LocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Toronto",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-tech text-[10px] tracking-widest text-muted tabular-nums">
      TOR {time}
    </span>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("kp-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <Magnetic strength={0.4}>
      <button
        onClick={toggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-ink"
      >
        {dark ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
      </button>
    </Magnetic>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <button
          onClick={() => scrollToTarget("#top")}
          className="font-tech text-[10px] font-semibold tracking-[0.2em] uppercase"
          data-cursor
        >
          {profile.name}
        </button>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToTarget(item.href)}
              className="u-sweep font-tech text-[10px] tracking-[0.18em] uppercase text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocalTime />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
