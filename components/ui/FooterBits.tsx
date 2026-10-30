"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";

/** Thin divider that grows from the centre when scrolled into view. */
export function ExpandLine({
  className = "",
  delay = 0.6,
  duration = 2,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
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

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Encrypted/scramble text animation for the large footer title.
 * Scrambles through cipher characters and sequentially resolves into the target text.
 * Re-scrambles on hover for an interactive cybersecurity terminal feel.
 */
export function EncryptedFooterTitle({
  text = "CIRSEC",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimatingRef = useRef(false);
  const containerRef = useRef<HTMLParagraphElement>(null);
  const hasTriggeredOnScroll = useRef(false);

  const shuffle = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const duration = 2000;
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const revealed = Math.floor(progress * text.length);

      const scrambled = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          return i < revealed
            ? text[i]
            : CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        isAnimatingRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  }, [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredOnScroll.current) {
            hasTriggeredOnScroll.current = true;
            shuffle();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shuffle]);

  return (
    <p
      ref={containerRef}
      onMouseEnter={shuffle}
      aria-label={text}
      className={`cursor-pointer select-none transition-all duration-300 hover:brightness-125 ${className}`}
    >
      <span aria-hidden="true">{displayText}</span>
    </p>
  );
}
