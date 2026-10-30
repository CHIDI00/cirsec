"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";

/**
 * Wrapper that feeds the cursor position to every `.glowing-card-v2` inside it
 * (--xPos / --yPos), which the card's CSS uses to place the glow.
 */
export function GlowingCards({ children, ...props }: ComponentPropsWithoutRef<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  const update = (e: React.MouseEvent<HTMLDivElement>) => {
    ref.current?.querySelectorAll<HTMLElement>(".glowing-card-v2").forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--xPos", `${e.clientX - rect.left}px`);
      card.style.setProperty("--yPos", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <div ref={ref} onMouseEnter={update} onMouseMove={update} {...props}>
      {children}
    </div>
  );
}
