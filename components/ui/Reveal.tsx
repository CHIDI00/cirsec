"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { gsap } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  /** Seconds before the animation starts */
  delay?: number;
  duration?: number;
  /** Direction the element travels *from* ("down" = rises up from below) */
  direction?: Direction;
  /** Distance in px */
  offset?: number;
  /** Play immediately instead of waiting for the element to scroll into view */
  instant?: boolean;
  start?: string;
  blur?: number;
};

/**
 * Fade/blur/slide-in on scroll. Equivalent of the template's `data-opai-animate`.
 * The markup is fully visible in the server-rendered HTML; GSAP only takes over once
 * hydrated (see `html.js [data-reveal]` in globals.css).
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  duration = 0.6,
  direction = "down",
  offset = 60,
  instant = false,
  start = "top 90%",
  blur = 16,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";

      const vars: gsap.TweenVars = {
        opacity: 0,
        filter: `blur(${blur}px)`,
        duration,
        delay,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(el, { clearProps: "filter" });
        },
      };
      if (direction === "left") vars.x = -offset;
      else if (direction === "right") vars.x = offset;
      else if (direction === "up") vars.y = -offset;
      else vars.y = offset;

      if (!instant) {
        vars.scrollTrigger = { trigger: el, start, end: "top 50%" };
      }
      gsap.from(el, vars);
    }, el);

    return () => ctx.revert();
  }, [blur, delay, direction, duration, instant, offset, start]);

  return (
    <Tag ref={ref} data-reveal="" {...props}>
      {children}
    </Tag>
  );
}
