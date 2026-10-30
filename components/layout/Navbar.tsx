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

const navTextClass =
  "font-inter-tight text-tagline-2 font-normal capitalize transition-colors duration-200";

function ItemRow({ item, onNavigate }: { item: MenuEntry["items"][number]; onNavigate: () => void }) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="group relative flex items-start gap-3 rounded-[12px] p-2.5 transition-all duration-200 hover:bg-background-2"
      >
        {item.icon && (
          <span className="text-primary-500 relative z-10 mt-1 shrink-0 p-1.5 rounded-lg bg-background-2 border border-stroke-1 group-hover:border-primary-500/30">
            <Icon name={item.icon} size={18} />
          </span>
        )}
        <span className="relative z-10 block space-y-0.5">
          <span className="text-tagline-2 font-medium text-secondary block">
            {item.title}
          </span>
          {item.description && (
            <span className="text-tagline-4 text-secondary/60 block font-normal">
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="relative z-50">
      <nav
        aria-label="Primary"
        className={`fixed top-4 left-1/2 z-50 mx-auto flex w-[92%] max-w-[350px] -translate-x-1/2 items-center justify-between rounded-full border border-stroke-1 bg-white/90 backdrop-blur-[15px] px-4 py-2.5 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-1.5 ${
          scrolled ? "top-2 shadow-md bg-white/95" : ""
        }`}
      >
        {/* Cirsec Logo */}
        <div className="flex items-center gap-3">
          <Logo variant="full" className="h-8 md:h-9 w-auto" theme="dark-text" priority />
        </div>

        {/* Desktop Nav Items */}
        <ul className="relative hidden items-center gap-2 lg:flex xl:gap-3">
          {navigation.map((entry) => {
            const current = isCurrent(entry);
            const textColor = current
              ? "text-secondary font-medium"
              : "text-secondary/70 hover:text-secondary";

            if (!("items" in entry)) {
              return (
                <li key={entry.label} className="relative py-2">
                  <Link
                    href={entry.href}
                    aria-current={current ? "page" : undefined}
                    className="flex items-center px-3.5 py-1.5 rounded-full hover:bg-background-2 transition-colors duration-200"
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
                className="relative py-2"
                onMouseEnter={() => showMenu(entry.menu)}
                onMouseLeave={scheduleHide}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  aria-controls={entry.menu}
                  onClick={() => (isOpen ? setActiveMenu(null) : showMenu(entry.menu))}
                  className="flex cursor-pointer items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-background-2 transition-colors duration-200"
                >
                  <span className={`${navTextClass} ${textColor}`}>{entry.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`size-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${current ? "stroke-secondary" : "stroke-secondary/70"}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <>
                    <div
                      className={`dropdown-menu-bridge absolute top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent ${isCompany ? "min-w-[680px]" : "min-w-[280px]"}`}
                    />
                    <div
                      id={entry.menu}
                      className={`absolute top-full left-1/2 z-50 mt-1 rounded-[20px] border border-stroke-1 bg-white p-4 shadow-xl -translate-x-1/2 ${
                        isCompany ? "flex w-[680px] items-start gap-x-6" : "w-[280px]"
                      }`}
                    >
                      <ul className={`space-y-1.5 ${isCompany ? "w-full max-w-[290px]" : "w-full"}`}>
                        {entry.items.map((item) => (
                          <ItemRow key={item.href + item.title} item={item} onNavigate={closeAll} />
                        ))}
                      </ul>
                      {isCompany && (
                        <div className="flex-1 space-y-2 border-l border-stroke-1 pl-6">
                          <p className="text-tagline-4 font-semibold text-secondary uppercase tracking-wider">
                            Latest Initiative
                          </p>
                          <Link
                            href="#features"
                            onClick={closeAll}
                            className="group relative block min-h-[220px] w-full overflow-hidden rounded-[14px]"
                          >
                            <Image
                              src={featuredImage}
                              alt=""
                              fill
                              sizes="320px"
                              className="rounded-[14px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent p-4 flex flex-col justify-end">
                              <p className="text-tagline-3 font-semibold text-white">
                                Cyber Safety Awareness
                              </p>
                              <p className="text-tagline-4 text-white/80 line-clamp-2">
                                Practical guidance and interactive tools to safeguard your digital footprint.
                              </p>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="btn btn-secondary btn-md rounded-full shadow-sm text-tagline-2"
          >
            <span>Get started</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex cursor-pointer flex-col items-end justify-center space-y-1.5 lg:hidden p-1.5"
        >
          <span className="bg-secondary block h-0.5 w-6 rounded-full" />
          <span className="bg-secondary block h-0.5 w-4 rounded-full" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <aside
          aria-label="Mobile menu"
          className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-lg flex flex-col p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-6 border-b border-stroke-1">
            <Logo variant="full" className="h-8 w-auto" theme="dark-text" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex size-10 items-center justify-center rounded-full bg-background-2 border border-stroke-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-secondary"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-4 py-6 flex-1">
            {navigation.map((entry) => {
              if (!("items" in entry)) {
                return (
                  <li key={entry.label}>
                    <Link
                      href={entry.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-heading-6 text-secondary font-medium block py-2"
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={entry.label} className="space-y-2">
                  <p className="text-tagline-3 uppercase tracking-wider text-secondary/60 font-semibold">
                    {entry.label}
                  </p>
                  <ul className="pl-3 space-y-2 border-l-2 border-primary-500/30">
                    {entry.items.map((sub) => (
                      <li key={sub.title}>
                        <Link
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-tagline-1 text-secondary block py-1"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="pt-4 border-t border-stroke-1">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary btn-xl w-full text-center"
            >
              <span>Get started</span>
            </Link>
          </div>
        </aside>
      )}
    </header>
  );
}
