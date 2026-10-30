"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { navigation, type NavEntry } from "@/lib/site";
import featuredImage from "@/assets/images/opai-img-22.jpg";

type MenuEntry = Extract<NavEntry, { menu: string }>;

/** The thin highlight line + soft glow shown above a nav item on hover. */
function HoverGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] transition-all duration-500 ease-out group-hover/nav-item:w-42" />
      <div className="absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#00D1FE55] from-40% to-[#00D1FE00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80" />
    </div>
  );
}

const navTextClass =
  "font-ibm-plex-mono text-tagline-3 leading-[21.7px] font-normal capitalize transition-colors duration-500 group-hover/nav-item:text-white";

function ItemRow({ item, onNavigate }: { item: MenuEntry["items"][number]; onNavigate: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300"
      >
        <div className="group-hover:bg-background-3 absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-xl opacity-0 transition-all duration-400 group-hover:opacity-100" />
        {item.icon && (
          <span className="text-brand-cyan relative z-10 mt-1">
            <Icon name={item.icon} size={20} />
          </span>
        )}
        <span className="relative z-10 block space-y-0.5">
          <span className="text-tagline-2 font-sora text-background-7 block font-normal">{item.title}</span>
          {item.description && (
            <span className="text-tagline-4 font-inter-tight text-background-7/70 block font-normal">
              {item.description}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>("company-menu");
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = null;
  }, []);
  const showMenu = useCallback(
    (id: string) => {
      cancelHide();
      setActiveMenu(id);
    },
    [cancelHide],
  );
  const scheduleHide = useCallback(() => {
    cancelHide();
    hideTimer.current = setTimeout(() => setActiveMenu(null), 200);
  }, [cancelHide]);
  const closeAll = useCallback(() => {
    cancelHide();
    setActiveMenu(null);
    setMobileOpen(false);
  }, [cancelHide]);

  // Header tightens to the top edge once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; Escape closes menus.
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const isCurrent = (entry: NavEntry) =>
    "items" in entry ? entry.items.some((i) => pathname === i.href) : pathname === entry.href;

  return (
    <header>
      <Reveal
        as="nav"
        aria-label="Primary"
        instant
        delay={0.8}
        direction="up"
        className={`bg-background-6 border-stroke-3/18 fixed top-6 left-1/2 z-30 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-full border py-1.5 pr-5 pl-2 transition-[top] duration-500 ease-in-out md:max-w-[640px] lg:max-w-[818px] lg:gap-12 lg:py-0 lg:pr-1.5 lg:pl-1.5 ${scrolled ? "scroll-header" : ""}`}
      >
        <Logo className="size-11" priority />

        <ul className="relative hidden items-center gap-6 lg:flex lg:gap-8">
          {navigation.map((entry) => {
            const current = isCurrent(entry);
            const textColor = current ? "text-white" : "text-white/60";

            if (!("items" in entry)) {
              return (
                <li key={entry.label} className="group/nav-item relative py-4">
                  <HoverGlow />
                  <Link
                    href={entry.href}
                    aria-current={current ? "page" : undefined}
                    className="relative z-5 flex items-center gap-1.5"
                  >
                    <span className={`${navTextClass} ${textColor}`}>{entry.label}</span>
                  </Link>
                </li>
              );
            }

            const isOpen = activeMenu === entry.menu;
            const isCompany = entry.menu === "company-menu";
            return (
              <li
                key={entry.label}
                className={`nav-item group/nav-item relative py-4 ${isOpen ? "active" : ""}`}
                onMouseEnter={() => showMenu(entry.menu)}
                onMouseLeave={scheduleHide}
              >
                <HoverGlow />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  aria-controls={entry.menu}
                  onClick={() => (isOpen ? setActiveMenu(null) : showMenu(entry.menu))}
                  className="relative z-5 flex cursor-pointer items-center gap-1.5"
                >
                  <span className={`${navTextClass} ${textColor}`}>{entry.label}</span>
                  <span className="nav-arrow block origin-center translate-y-px transition-all duration-500" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                      <path
                        d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
                        className={`transition-colors duration-500 group-hover/nav-item:stroke-white ${current ? "stroke-white" : "stroke-white/60"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`dropdown-menu-bridge absolute top-full left-1/2 z-40 h-10 w-full -translate-x-1/2 bg-transparent ${isCompany ? "min-w-[692px]" : "min-w-[280px]"}`}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                />
                <div
                  id={entry.menu}
                  className={`dropdown-menu border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 rounded-[20px] border p-4 ${isOpen ? "active" : ""} ${isCompany ? "flex w-[692px] items-start gap-x-8" : "w-[280px]"}`}
                >
                  <ul className={`space-y-2 ${isCompany ? "w-full max-w-[284px]" : "w-full"}`}>
                    {entry.items.map((item) => (
                      <ItemRow key={item.href + item.title} item={item} onNavigate={closeAll} />
                    ))}
                  </ul>
                  {isCompany && (
                    <div className="flex-1 space-y-3">
                      <p className="text-tagline-4 font-sora text-background-7 font-medium">What&apos;s New</p>
                      <Link href="/blog" onClick={closeAll} className="group relative block min-h-[272px] w-full overflow-hidden rounded-[14px]">
                        <Image
                          src={featuredImage}
                          alt=""
                          fill
                          sizes="340px"
                          className="rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out group-hover:top-5 group-hover:left-5">
                          <p className="text-tagline-3 font-sora text-background-7 font-medium">Cyber Safety Awareness</p>
                          <p className="text-tagline-4 font-inter-tight w-full max-w-[212px] font-normal text-white/90">
                            Practical guidance to help you stay safe in a connected world.
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" arrow={false} className="py-[11px]! shadow-[0_3px_18px_0_rgba(0,209,254,0.45)]">
            Get started
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex cursor-pointer flex-col items-end justify-center space-y-2 lg:hidden"
        >
          <span className="bg-background-7 block h-px w-9" />
          <span className="bg-background-7 block h-px w-6" />
        </button>
      </Reveal>

      {/* Mobile menu */}
      <aside
        inert={!mobileOpen}
        aria-label="Mobile menu"
        className={`border-stroke-3/18 bg-background-6 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full border-l transition-all duration-300 sm:w-1/2 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="space-y-4 p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <Logo className="size-11" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-white/20"
            >
              <span className="absolute block h-0.5 w-4 rotate-45 bg-white/90" />
              <span className="absolute block h-0.5 w-4 -rotate-45 bg-white/90" />
            </button>
          </div>

          <div className="scroll-bar mt-6 h-[80vh] w-full overflow-x-hidden overflow-y-auto pb-10">
            <ul className="space-y-2">
              {navigation.map((entry) =>
                "items" in entry ? (
                  <li key={entry.label} className="space-y-2">
                    <button
                      type="button"
                      aria-expanded={mobileSection === entry.menu}
                      onClick={() => setMobileSection(mobileSection === entry.menu ? null : entry.menu)}
                      className="flex w-full cursor-pointer items-center justify-between py-2.5"
                    >
                      <span className="font-sora text-tagline-2 block font-normal text-white/90">{entry.label}</span>
                      <span className={`transition-transform duration-300 ${mobileSection === entry.menu ? "rotate-90" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M10 12L14 8L10 4" className="stroke-white/90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <ul className={mobileSection === entry.menu ? "block" : "hidden"}>
                      {entry.items.map((item) => (
                        <li key={item.href + item.title}>
                          <Link
                            href={item.href}
                            onClick={closeAll}
                            className="text-tagline-3 ml-4 block py-2.5 text-left font-normal text-white/80 transition-colors duration-200 hover:text-white"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={entry.label}>
                    <Link
                      href={entry.href}
                      onClick={closeAll}
                      className="font-sora text-tagline-2 block py-2.5 font-normal text-white/90"
                    >
                      {entry.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6" onClick={closeAll}>
              <Button href="/contact">Get started</Button>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
