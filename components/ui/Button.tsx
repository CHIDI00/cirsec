import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

export type Variant = "primary" | "secondary" | "light" | "dark";

export type ButtonProps = {
  children: string;
  href?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  /** Show the sliding chevron on the right */
  arrow?: boolean;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const variantStyles: Record<"primary" | "secondary", { base: string; text: string; arrow: string }> = {
  primary: {
    base: "bg-background-7 hover:border-stroke-3 border-transparent shadow-sm",
    text: "text-background-5",
    arrow: "stroke-background-6",
  },
  secondary: {
    base: "bg-background-6 hover:bg-background-4 border-stroke-3/18 shadow-sm",
    text: "text-white/90",
    arrow: "stroke-white/90",
  },
};

const sizeStyles = {
  sm: "px-4 py-2 max-h-10 text-xs",
  md: "px-6 py-[11px] max-h-12 text-sm",
  lg: "px-7 py-[13px] max-h-13 text-sm",
};

/**
 * Rolling label: every character slides up and is replaced by the same character
 * coming from below, staggered. Pure CSS (no JS), so it works in Server Components.
 */
function RollingLabel({ text, className }: { text: string; className: string }) {
  const chars = Array.from(text);
  const label = `font-ibm-plex-mono text-tagline-2 leading-[1.4] font-medium text-nowrap ${className}`;
  const char =
    "inline-block whitespace-pre transition-all duration-[400ms] ease-in-out";

  return (
    <span className="relative block overflow-hidden" aria-label={text}>
      <span className={`block h-5.5 ${label}`} aria-hidden="true">
        {chars.map((c, i) => (
          <span
            key={i}
            style={{ transitionDelay: `${i * 6.25}ms` }}
            className={`${char} group-hover:-translate-y-full group-hover:opacity-0`}
          >
            {c}
          </span>
        ))}
      </span>
      <span className={`absolute top-0 left-0 block h-5.5 ${label}`} aria-hidden="true">
        {chars.map((c, i) => (
          <span
            key={i}
            style={{ transitionDelay: `${i * 6.25}ms` }}
            className={`${char} translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
}

function SlidingChevron({ strokeClass }: { strokeClass: string }) {
  const chevron = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M6.75 13.5L11.25 9L6.75 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <span className="relative mt-[2px] flex size-6 shrink-0 items-center justify-center overflow-hidden">
      <span
        className={`ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6 ${strokeClass}`}
      >
        {chevron}
      </span>
      <span
        className={`ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0 ${strokeClass}`}
      >
        {chevron}
      </span>
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  type = "button",
}: ButtonProps) {
  // Normalize alias variants
  const resolvedVariant = variant === "light" ? "primary" : variant === "dark" ? "secondary" : variant;
  const config = variantStyles[resolvedVariant];
  const sizeClass = sizeStyles[size] || sizeStyles.md;

  const inner = (
    <>
      <RollingLabel text={children} className={config.text} />
      {arrow && <SlidingChevron strokeClass={config.arrow} />}
    </>
  );

  const sharedClass = `group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border transition-all duration-300 ease-in-out ${sizeClass} ${config.base} ${className}`;

  if (href) {
    return (
      <Link href={href} className={sharedClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={sharedClass}>
      {inner}
    </button>
  );
}
