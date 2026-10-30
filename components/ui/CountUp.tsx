"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Digits only, e.g. "500" */
  value: string;
  /** Rendered after the digits, e.g. "+", "%", "K+" */
  suffix?: string;
  className?: string;
};

/**
 * Odometer-style rolling number that plays when scrolled into view.
 * The server-rendered HTML contains the final value (accessible + SEO friendly).
 */
export function CountUp({ value, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // "final" = SSR / no-JS, "reset" = digits parked at 0 waiting for view, "roll" = animating
  const [phase, setPhase] = useState<"final" | "reset" | "roll">("final");
  const digits = Array.from(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- park the digits at zero once hydrated, then roll on view
    setPhase("reset");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("roll");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-flex items-center ${className}`}>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className="inline-flex items-center">
        {digits.map((d, i) => {
          const n = Number(d);
          const target = phase === "reset" ? 0 : n;
          return (
            <span key={i} className="relative inline-block h-[1.3em] w-[0.62em] overflow-hidden text-center">
              <span
                className="absolute top-0 left-0 block w-full"
                style={{
                  transform: `translateY(-${target * 10}%)`,
                  transition:
                    phase === "roll" ? "transform 2s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                  transitionDelay: phase === "roll" ? `${(digits.length - i) * 0.2}s` : "0s",
                }}
              >
                {Array.from({ length: 10 }, (_, k) => (
                  <span key={k} className="block h-[1.3em] leading-[1.3em]">
                    {k}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
        <span>{suffix}</span>
      </span>
    </span>
  );
}
