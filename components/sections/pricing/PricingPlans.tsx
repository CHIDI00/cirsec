"use client";

import { useState } from "react";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type BillingPeriod = "monthly" | "yearly";

interface PlanTier {
  id: string;
  name: string;
  tagline: string;
  monthly: {
    originalPrice: string;
    currentPrice: string;
    unit: string;
  };
  yearly: {
    originalPrice: string;
    currentPrice: string;
    unit: string;
  };
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaHref: string;
  icon: "lightning" | "shield" | "diamond";
}

const tiers: PlanTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For community groups, startups & teams building foundational cyber hygiene",
    monthly: {
      originalPrice: "₦45,000",
      currentPrice: "₦25,000",
      unit: "/month",
    },
    yearly: {
      originalPrice: "₦350,000",
      currentPrice: "₦250,000",
      unit: "/year",
    },
    features: [
      "Foundational cyber hygiene clinic access",
      "Baseline vulnerability self-assessment checklist",
      "Curated threat intelligence & monthly advisories",
      "Simulated phishing awareness templates",
      "Standard incident response playbook",
      "Email security advisory support",
    ],
    ctaText: "Get started",
    ctaHref: "/contact?tier=starter",
    icon: "lightning",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing organizations scaling infrastructure & needing proactive defense",
    featured: true,
    monthly: {
      originalPrice: "₦250,000",
      currentPrice: "₦180,000",
      unit: "/month",
    },
    yearly: {
      originalPrice: "₦2,400,000",
      currentPrice: "₦1,800,000",
      unit: "/year",
    },
    features: [
      "Everything in Starter plan",
      "Up to 15 team clinic seats per quarter",
      "Hands-on threat simulation & response drills",
      "Attack surface & digital exposure review",
      "Customized phishing campaign simulations",
      "Priority advisory desk & monthly debriefs",
    ],
    ctaText: "Get started",
    ctaHref: "/contact?tier=professional",
    icon: "shield",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For institutions, healthcare, & civic bodies requiring dedicated governance",
    monthly: {
      originalPrice: "₦550,000",
      currentPrice: "₦390,000",
      unit: "/month",
    },
    yearly: {
      originalPrice: "₦5,000,000",
      currentPrice: "₦3,900,000",
      unit: "/year",
    },
    features: [
      "Unlimited clinic seats & team access",
      "Executive tabletop crisis simulations",
      "Zero-day advisory & targeted threat modeling",
      "Compliance readiness audit (SOC2 / ISO)",
      "Dedicated Senior Security Advisor",
      "24/7 critical incident escalation SLA",
    ],
    ctaText: "Get started",
    ctaHref: "/contact?tier=enterprise",
    icon: "diamond",
  },
];

function PlanIcon({ type }: { type: PlanTier["icon"] }) {
  if (type === "shield") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="size-6 stroke-brand-cyan"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (type === "diamond") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="size-6 stroke-white/90"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-6 stroke-white/90"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  );
}

export function PricingPlans() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section className="pt-32 pb-24 xl:pt-40 2xl:pt-48" aria-labelledby="pricing-heading">
      <div className="main-container">
        {/* Section Header */}
        <div className="mb-14 sm:mb-[70px] space-y-3 text-center">
          <h1
            id="pricing-heading"
            className="font-sora text-sora-heading-3 md:text-sora-heading-2 font-normal text-white/95"
          >
            <SplitReveal>
              Pricing <span className="text-white/30">plans</span>
            </SplitReveal>
          </h1>
          <p className="font-inter-tight text-tagline-2 mx-auto w-full max-w-md font-normal text-white/60 leading-relaxed">
            <SplitReveal as="span" delay={0.2}>
              Predictable tiers designed to scale with your organization. Clear cybersecurity guidance, no hidden costs.
            </SplitReveal>
          </p>
        </div>

        {/* Pricing Toggle & Grid */}
        <div className="space-y-12 sm:space-y-14">
          {/* Monthly / Yearly Switcher */}
          <div className="flex justify-center">
            <div className="relative inline-flex items-center rounded-full bg-white/[0.06] p-1 backdrop-blur-xl border border-white/10 shadow-inner">
              {/* Sliding Pill */}
              <div
                className={`absolute top-1 bottom-1 w-[96px] rounded-full bg-white shadow-md transition-all duration-300 ease-out ${
                  period === "monthly" ? "left-1" : "left-[102px]"
                }`}
              />

              <button
                type="button"
                onClick={() => setPeriod("monthly")}
                aria-pressed={period === "monthly"}
                className={`relative z-10 flex h-9 w-[96px] items-center justify-center rounded-full font-inter-tight text-tagline-2 font-medium transition-colors duration-200 ${
                  period === "monthly" ? "text-background-6 font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setPeriod("yearly")}
                aria-pressed={period === "yearly"}
                className={`relative z-10 flex h-9 w-[96px] items-center justify-center rounded-full font-inter-tight text-tagline-2 font-medium transition-colors duration-200 ${
                  period === "yearly" ? "text-background-6 font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Cards Flex Grid */}
          <div className="flex flex-col items-center justify-center gap-y-8 xl:flex-row xl:items-start xl:gap-x-8 2xl:gap-x-12">
            {tiers.map((tier) => {
              const currentPricing = period === "monthly" ? tier.monthly : tier.yearly;

              if (tier.featured) {
                return (
                  <div key={tier.id} className="relative w-full max-w-[608px] flex-1 xl:basis-[408px]">
                    {/* Placeholder space keeper for desktop absolute position */}
                    <div
                      aria-hidden="true"
                      className="hidden h-[643px] w-full rounded-4xl border border-dashed border-stroke-1/20 bg-transparent px-5 py-8 xl:block xl:px-8 xl:py-11"
                    />

                    {/* Main Featured Card */}
                    <div className="pricing-card relative overflow-hidden rounded-4xl shadow-[0_24px_90px_rgba(28,80,208,0.28)] border border-brand/40 xl:absolute xl:top-0 xl:w-[408px] transition-all duration-300 hover:border-brand-cyan/60">
                      <div className="bg-background-5 rounded-4xl p-8 sm:p-11 relative">
                        {/* Cirsec Blue & Cyan Brand Aura (Replaces Purple) */}
                        <figure
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-[109px] right-[-121px] size-[371px] -rotate-7 mix-blend-plus-lighter blur-[100px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="440"
                            height="502"
                            viewBox="0 0 440 502"
                            fill="none"
                          >
                            <g filter="url(#cirsec_glow_featured)" style={{ mixBlendMode: "plus-lighter" }}>
                              <circle
                                cx="385.507"
                                cy="116.14"
                                r="185.5"
                                transform="rotate(-4 385.507 116.14)"
                                fill="#1C50D0"
                              />
                            </g>
                            <g filter="url(#cirsec_glow_inner)" style={{ mixBlendMode: "plus-lighter" }}>
                              <circle
                                cx="419.992"
                                cy="43.0437"
                                r="64"
                                transform="rotate(-4 419.992 43.0437)"
                                fill="#00D1FE"
                              />
                            </g>
                            <defs>
                              <filter
                                id="cirsec_glow_featured"
                                x="0"
                                y="-269.367"
                                width="771.016"
                                height="771.016"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_featured" />
                              </filter>
                              <filter
                                id="cirsec_glow_inner"
                                x="255.988"
                                y="-120.957"
                                width="328.008"
                                height="328.004"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_inner" />
                              </filter>
                            </defs>
                          </svg>
                        </figure>

                        <div className="relative z-10">
                          {/* Top Info */}
                          <div className="border-b border-stroke-1/15 space-y-6 pb-6">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="flex size-12 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand/20 text-white/90">
                                  <PlanIcon type={tier.icon} />
                                </span>
                                <span className="rounded-full bg-brand/25 px-3 py-1 font-ibm-plex-mono text-[11px] font-medium uppercase tracking-wider text-brand-cyan border border-brand-cyan/30">
                                  Most Popular
                                </span>
                              </div>
                              <div className="space-y-1">
                                <h3 className="font-sora text-sora-heading-5 sm:text-sora-heading-4 xl:text-sora-heading-3 font-normal text-white/95">
                                  {tier.name}
                                </h3>
                                <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                                  {tier.tagline}
                                </p>
                              </div>
                            </div>

                            {/* Pricing Figures */}
                            <div>
                              <div className="flex items-baseline space-x-3">
                                <span className="font-inter-tight text-it-heading-6 relative z-30 font-normal text-white/50">
                                  {currentPricing.originalPrice}
                                  <span className="absolute top-1/2 left-0 z-10 h-0.5 w-full -translate-y-1/2 bg-white/60" />
                                </span>
                                <span className="font-manrope text-manrope-heading-4 sm:text-manrope-heading-3 font-medium text-white/95">
                                  {currentPricing.currentPrice}
                                </span>
                                <span className="font-inter-tight text-tagline-2 font-normal text-white/60">
                                  {currentPricing.unit}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Features List */}
                          <div className="pt-8">
                            <ul className="space-y-4 pb-8">
                              {tier.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/70"
                                >
                                  <span className="flex size-4 shrink-0 items-center justify-center text-brand-cyan">
                                    <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-3.5 stroke-brand-cyan">
                                      <path d="M11.5 0.5L4.5 7.49969L1 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    </svg>
                                  </span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA Action */}
                            <div className="block w-full">
                              <Button href={tier.ctaHref} variant="primary" size="md" arrow className="w-full justify-center">
                                {tier.ctaText}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Plan Cards (Starter and Enterprise)
              return (
                <div key={tier.id} className="w-full max-w-[608px] flex-1 xl:basis-[408px]">
                  <div className="pricing-card rounded-4xl bg-white/[0.02] border border-white/10 px-6 py-8 xl:px-8 xl:py-11 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                    {/* Top Info */}
                    <div className="border-b border-stroke-1/15 space-y-6 pb-6">
                      <div className="space-y-4">
                        <span className="flex size-12 items-center justify-center rounded-full border border-stroke-1/20 bg-white/5 text-white/90">
                          <PlanIcon type={tier.icon} />
                        </span>
                        <div className="space-y-1">
                          <h3 className="font-sora text-sora-heading-5 sm:text-sora-heading-4 xl:text-sora-heading-3 font-normal text-white/95">
                            {tier.name}
                          </h3>
                          <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
                            {tier.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Pricing Figures */}
                      <div>
                        <div className="flex items-baseline space-x-3">
                          <span className="font-inter-tight text-it-heading-6 relative z-30 font-normal text-white/50">
                            {currentPricing.originalPrice}
                            <span className="absolute top-1/2 left-0 z-10 h-0.5 w-full -translate-y-1/2 bg-white/60" />
                          </span>
                          <span className="font-manrope text-manrope-heading-4 sm:text-manrope-heading-3 font-medium text-white/95">
                            {currentPricing.currentPrice}
                          </span>
                          <span className="font-inter-tight text-tagline-2 font-normal text-white/60">
                            {currentPricing.unit}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="pt-8">
                      <ul className="space-y-4 pb-8">
                        {tier.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/60"
                          >
                            <span className="flex size-4 shrink-0 items-center justify-center">
                              <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-3.5 stroke-white/80">
                                <path d="M11.5 0.5L4.5 7.49969L1 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              </svg>
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Action */}
                      <div className="block w-full">
                        <Button href={tier.ctaHref} variant="secondary" size="md" arrow className="w-full justify-center">
                          {tier.ctaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
