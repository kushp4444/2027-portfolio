import type Lenis from "lenis";

/** Singleton holder so nav links can drive the same Lenis instance. */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function scrollToTarget(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el as HTMLElement, { offset: -8, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
