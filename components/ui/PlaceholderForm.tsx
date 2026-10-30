"use client";

import { useState, type ComponentPropsWithoutRef } from "react";

interface PlaceholderFormProps extends ComponentPropsWithoutRef<"form"> {
  actionName?: string;
  successMessage?: string;
}

/**
 * Accessible form shell for the template's newsletter / contact forms.
 * Intercepts submission, displays optimistic feedback, and prevents full-page reload.
 */
export function PlaceholderForm({
  children,
  onSubmit,
  actionName,
  successMessage = "Thank you! Your submission has been received.",
  className = "",
  ...props
}: PlaceholderFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full">
      {submitted ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center text-emerald-300 font-inter-tight text-tagline-2 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
          <p className="font-medium">{successMessage}</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-3 text-xs underline text-emerald-400 hover:text-emerald-200 transition-colors"
          >
            Send another {actionName ? actionName.toLowerCase() : "response"}
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.(e);
            setSubmitted(true);
          }}
          className={className}
          {...props}
        >
          {children}
        </form>
      )}
    </div>
  );
}
