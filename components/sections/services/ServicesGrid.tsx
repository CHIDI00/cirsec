"use client";

import Link from "next/link";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceItem {
  id: string;
  title1: string;
  title2: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "hygiene-clinics",
    title1: "Cyber Hygiene &",
    title2: "Security Clinics",
    description:
      "Interactive, hands-on workshops that transform security policies into daily human habits, teaching teams to spot threats instinctively.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "threat-assessment",
    title1: "Threat Assessment &",
    title2: "Risk Posture Audits",
    description:
      "Comprehensive analysis of your external attack surface, exposed credentials, and critical vulnerabilities before adversaries exploit them.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "phishing-simulations",
    title1: "Phishing & Human",
    title2: "Factor Drills",
    description:
      "Controlled phishing campaigns and behavioral training that teach employees to detect sophisticated pretexting, CEO fraud, and spoofing.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        <path d="M12 12v3a2 2 0 0 0 2 2h1" />
      </svg>
    ),
  },
  {
    id: "incident-response",
    title1: "Incident Response &",
    title2: "Emergency Playbooks",
    description:
      "Step-by-step crisis playbooks and rapid triage protocols to contain ransomware, account takeovers, and business email compromises.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "vulnerability-management",
    title1: "Vulnerability Scanning &",
    title2: "Remediation Guidance",
    description:
      "Continuous scanning of infrastructure, software dependencies, and web portals with prioritized, practical remediation steps.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="m11 8 2 3-4 1 3 3" />
      </svg>
    ),
  },
  {
    id: "cloud-identity",
    title1: "Cloud & Identity Access",
    title2: "Hardening (M365/Google)",
    description:
      "Multi-factor authentication enforcement, least-privilege role setup, and zero-trust configuration for email suites and cloud stores.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <rect width="6" height="4" x="9" y="14" rx="1" />
      </svg>
    ),
  },
  {
    id: "compliance-governance",
    title1: "Regulatory Compliance &",
    title2: "Framework Alignment",
    description:
      "Practical assistance preparing for NDPR, GDPR, SOC 2, and ISO 27001 readiness without excessive enterprise red tape.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "executive-briefings",
    title1: "Executive Briefings &",
    title2: "Tabletop Simulations",
    description:
      "Simulated breach scenarios for leadership teams, aligning executive decision-makers on risk appetite, PR strategy, and cyber governance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
  },
  {
    id: "community-advisory",
    title1: "SME & Community",
    title2: "Managed Advisory",
    description:
      "Accessible fractional security advisory and direct helpline support designed specifically for emerging companies, schools, and non-profits.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-28" aria-labelledby="services-grid-heading">
      <div className="main-container">
        {/* Section Header */}
        <div className="mb-14 md:mb-18 space-y-3 text-center">
          <h2
            id="services-grid-heading"
            className="font-sora text-sora-heading-3 md:text-sora-heading-2 font-normal text-white/95"
          >
            <SplitReveal>
              Tailored defense.{" "}
              <span className="text-white/30">proven resilience.</span>
            </SplitReveal>
          </h2>
          <p className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[560px] text-white/60 font-normal leading-relaxed">
            <SplitReveal as="span" delay={0.2} lineDelay={0.1}>
              From foundational hygiene clinics to continuous threat modeling, we help organizations build defensible perimeters and high-confidence teams.
            </SplitReveal>
          </p>
        </div>

        {/* 9 Services Grid (3x3 on desktop) */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {services.map((service, index) => {
            const glowId = `card_glow_${service.id}`;
            const paintId = `card_paint_${service.id}`;
            const iconGlowId = `icon_glow_${service.id}`;
            const iconPaintId = `icon_paint_${service.id}`;

            return (
              <div
                key={service.id}
                className="col-span-12 h-full md:col-span-6 lg:col-span-4"
              >
                <Reveal delay={0.1 + (index % 3) * 0.1} duration={0.6}>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="group border-stroke-1/15 relative block h-full space-y-12 sm:space-y-16 overflow-hidden rounded-2xl border bg-white/[0.02] px-7 py-9 sm:px-8 sm:py-11 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,80,208,0.18)]"
                  >
                    {/* SVG card ambient glow with Cirsec Blue & Cyan */}
                    <figure
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 left-0 size-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="283"
                        height="197"
                        viewBox="0 0 283 197"
                        fill="none"
                      >
                        <g filter={`url(#${glowId})`}>
                          <path
                            d="M243.755 2.32552C275.022 48.06 127.176 14.2046 75.6406 57.9165C26.943 91.2101 -42.6327 197.411 -73.9004 151.677C-105.168 105.942 -27.4704 -1.58272 21.2272 -34.8763C69.9249 -68.1699 212.487 -43.4089 243.755 2.32552Z"
                            fill={`url(#${paintId})`}
                          />
                        </g>
                        <defs>
                          <filter
                            id={glowId}
                            x="-115.109"
                            y="-84.2188"
                            width="397.164"
                            height="281.152"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="17" result="blur_effect" />
                          </filter>
                          <linearGradient
                            id={paintId}
                            x1="12.5123"
                            y1="-28.9181"
                            x2="109.479"
                            y2="112.912"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#1C50D0" stopOpacity="0.28" />
                            <stop offset="1" stopColor="#00D1FE" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </figure>

                    {/* Glass icon badge with inner glow */}
                    <div className="border-stroke-1/15 relative z-10 flex size-[60px] items-center justify-center overflow-hidden rounded-[14px] border p-4 backdrop-blur-[28px] bg-white/[0.04] transition-transform duration-300 group-hover:scale-105 group-hover:border-brand-cyan/50">
                      <figure
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 size-full -translate-x-1/2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="49"
                          viewBox="0 0 60 49"
                          fill="none"
                        >
                          <g filter={`url(#${iconGlowId})`}>
                            <path
                              d="M41.6753 -2L45 19.5385C39.1277 23.4496 31.239 14.2505 28.7922 13.2727L13 26L17.987 -2L41.6753 -2Z"
                              fill={`url(#${iconPaintId})`}
                            />
                          </g>
                          <defs>
                            <filter
                              id={iconGlowId}
                              x="-10"
                              y="-25"
                              width="78"
                              height="74"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="11.5" result="blur_icon" />
                            </filter>
                            <linearGradient
                              id={iconPaintId}
                              x1="28.7922"
                              y1="26.1958"
                              x2="28.7922"
                              y2="-2"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#00D1FE" stopOpacity="0" />
                              <stop offset="1" stopColor="#1C50D0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </figure>

                      <span className="relative z-10 text-white/90 group-hover:text-brand-cyan transition-colors duration-300">
                        {service.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-2.5">
                      <h3 className="font-sora text-sora-heading-6 font-normal text-white/95 transition-colors duration-300 group-hover:text-brand-cyan">
                        {service.title1} <br />
                        {service.title2}
                      </h3>
                      <p className="font-inter-tight text-tagline-3 text-white/60 font-normal leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
