"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/** Thin divider that grows from the centre when scrolled into view. */
export function ExpandLine({ className = "", delay = 0.6, duration = 2 }: { className?: string; delay?: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scaleX: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 100%" },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, duration]);

  return <div ref={ref} aria-hidden="true" className={className} />;
}

/** Current year, filled in on the client (avoids reading the clock during prerender). */
export function CurrentYear() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.textContent = String(new Date().getFullYear());
  }, []);
  return (
    <span ref={ref} suppressHydrationWarning>
      2026
    </span>
  );
}
