"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { gsap, SplitText } from "@/lib/gsap";

type SplitRevealProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  /** Seconds before the first line starts */
  delay?: number;
  /** Seconds between each line */
  lineDelay?: number;
  duration?: number;
  /** Start playing immediately instead of on scroll */
  instant?: boolean;
  start?: string;
};

/**
 * Line-by-line masked text reveal. Equivalent of the template's `data-opai-split-text`.
 * Re-splits automatically when the font loads or the viewport is resized.
 */
export function SplitReveal({
  as: Tag = "div",
  delay = 0.1,
  lineDelay = 0.15,
  duration = 0.9,
  instant = false,
  start = "top 90%",
  children,
  ...props
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitText | undefined;
    const ctx = gsap.context(() => {
      split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          el.style.opacity = "1";
          return gsap.from(self.lines, {
            yPercent: 110,
            opacity: 0,
            duration,
            delay,
            ease: "power2.inOut",
            stagger: lineDelay,
            scrollTrigger: instant ? undefined : { trigger: el, start, once: true },
          });
        },
      });
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [delay, duration, instant, lineDelay, start]);

  return (
    <Tag ref={ref} data-split="" {...props}>
      {children}
    </Tag>
  );
}
