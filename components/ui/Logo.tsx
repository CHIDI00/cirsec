import Image from "next/image";
import Link from "next/link";

/** Cirsec logo. `variant="icon"` is the mark only, `"full"` is mark + wordmark. */
export function Logo({
  variant = "icon",
  className = "",
  priority = false,
}: {
  variant?: "icon" | "full";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="Cirsec home" className={`block shrink-0 ${className}`}>
      {variant === "icon" ? (
        <Image
          src="/logo/cirsec-logo.svg"
          alt="Cirsec"
          width={1024}
          height={1042}
          priority={priority}
          className="size-full object-contain"
        />
      ) : (
        <Image
          src="/logo/cirsec_logo_with_name.svg"
          alt="Cirsec"
          width={3195}
          height={1042}
          priority={priority}
          className="h-full w-auto"
        />
      )}
    </Link>
  );
}
