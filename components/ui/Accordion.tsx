"use client";

import { useId, useState, type ReactNode } from "react";

export type AccordionEntry = {
  question: string;
  answer: string | ReactNode;
};

/** One-open-at-a-time FAQ accordion with an animated height (CSS grid rows). */
export function Accordion({
  items,
  defaultOpen = 0,
  className = "",
}: {
  items: AccordionEntry[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={`accordion space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.question}
            className={`accordion-item border-stroke-1/10 rounded-lg border px-6 transition-colors duration-300 ${isOpen ? "is-open bg-white/[0.03]" : ""}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-4 pt-6 text-left transition-all duration-300 ease-in-out ${isOpen ? "pb-4" : "pb-6"}`}
              >
                <span className="font-inter-tight text-tagline-2 text-white">{item.question}</span>
                <span className="accordion-plus-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-body">
              <div className="overflow-hidden">
                <div className="text-tagline-2 font-inter-tight max-w-[531px] pb-6 font-extralight text-white/50">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
