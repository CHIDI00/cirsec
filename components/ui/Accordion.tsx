"use client";

import { useId, useState, type ReactNode } from "react";

export type AccordionEntry = {
  question: string;
  answer: string | ReactNode;
};

/** One-open-at-a-time FAQ accordion with smooth toggle and clean styling. */
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
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-all duration-200 bg-white shadow-sm ${
              isOpen ? "border-primary-500/40 ring-1 ring-primary-500/10" : "border-stroke-1 hover:border-stroke-2"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className="font-inter-tight text-tagline-1 font-medium text-secondary">
                  {item.question}
                </span>
                <span
                  className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-primary-500 text-white" : "bg-background-2 text-secondary/60"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 sm:px-6 pb-6 pt-1 border-t border-stroke-1/60">
                <div className="text-tagline-2 font-inter-tight text-secondary/70 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
