"use client";

import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ServicesHero() {
  return (
    <section className="pt-34 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 xl:pt-50 relative overflow-hidden" aria-labelledby="services-hero-heading">
      {/* Ambient background brand glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-brand/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-20 right-10 size-[350px] rounded-full bg-brand-cyan/10 blur-[100px]" aria-hidden="true" />

      <div className="main-container relative z-10">
        <div>
          <div className="space-y-4 text-center">
            <div className="mx-auto w-full max-w-[720px]">
              <h1
                id="services-hero-heading"
                className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 inline-block font-normal text-white/95 max-md:leading-[110%]"
              >
                <SplitReveal>
                  Actionable defense for{" "}
                  <span className="text-white/30">real-world risks</span>
                </SplitReveal>
              </h1>
            </div>
            <p className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[560px] text-white/60 font-normal leading-relaxed">
              <SplitReveal as="span" delay={0.2} lineDelay={0.1}>
                Cirsec delivers hands-on cyber hygiene clinics, tactical risk audits, and tailored resilience advisory to protect individuals, institutions, and growing businesses from digital harm.
              </SplitReveal>
            </p>
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Reveal delay={0.4} duration={0.7}>
              <div className="inline-block">
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Talk to our security advisors
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
