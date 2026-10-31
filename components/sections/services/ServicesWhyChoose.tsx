"use client";

import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const avatars = [
  { src: "/images/opai-avatar-img-09.png", alt: "Participant 1" },
  { src: "/images/opai-avatar-img-10.png", alt: "Participant 2" },
  { src: "/images/opai-avatar-img-11.png", alt: "Participant 3" },
  { src: "/images/opai-avatar-img-12.png", alt: "Participant 4" },
];

export function ServicesWhyChoose() {
  return (
    <section className="overflow-hidden py-20 md:py-28 xl:py-36" aria-labelledby="why-cirsec-heading">
      <div className="main-container space-y-14 md:space-y-18">
        {/* Header & Social Proof */}
        <div className="space-y-6 text-center">
          <div>
            <h2
              id="why-cirsec-heading"
              className="font-sora text-sora-heading-3 md:text-sora-heading-2 inline-block font-normal text-white/95"
            >
              <SplitReveal>
                Why <span className="text-white/30">Cirsec?</span>
              </SplitReveal>
            </h2>
          </div>

          {/* Avatar stack */}
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative size-9 rounded-full ring-2 ring-white/20 overflow-hidden shadow-md"
                  style={{ zIndex: idx + 1 }}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div
                className="bg-brand/40 z-10 flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-white/20 backdrop-blur-md"
              >
                <p className="font-ibm-plex-mono text-[11px] font-semibold text-brand-cyan">99+</p>
              </div>
            </div>
            <div className="text-left">
              <p className="font-inter-tight text-tagline-3 block font-medium text-white/95">Trusted by 100+</p>
              <p className="font-inter-tight text-tagline-4 font-normal text-white/60">Organizations & teams protected</p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 items-stretch gap-y-8 lg:gap-x-8">
          {/* Bento Card 1 */}
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={0.2} direction="left" className="h-full">
              <div className="border-stroke-1/15 group relative flex h-full min-h-[340px] flex-col justify-end rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.04]">
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-brand/20 px-3 py-1 font-ibm-plex-mono text-[11px] font-medium text-brand-cyan border border-brand/30">
                    Human-Centered Clinics
                  </span>
                  <h3 className="font-sora text-sora-heading-6 sm:text-sora-heading-5 font-normal text-white/95 leading-snug">
                    Actionable, jargon-free clinics that equip everyday staff to stop breaches instinctively.
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 2 (Stacked two items) */}
          <div className="col-span-12 space-y-8 lg:col-span-4">
            <Reveal delay={0.3} direction="up">
              <div className="border-stroke-1/15 group relative flex min-h-[156px] sm:min-h-[160px] flex-col justify-end rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.04]">
                <div className="space-y-2">
                  <span className="inline-block rounded-full bg-brand/20 px-3 py-1 font-ibm-plex-mono text-[11px] font-medium text-brand-cyan border border-brand/30">
                    Real-World Threat Modeling
                  </span>
                  <h3 className="font-sora text-tagline-1 sm:text-sora-heading-6 font-normal text-white/95 leading-snug">
                    Continuous intelligence tuned to evolving regional and global threat landscapes.
                  </h3>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="border-stroke-1/15 group relative flex min-h-[156px] sm:min-h-[160px] flex-col justify-end rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.04]">
                <div className="space-y-2">
                  <span className="inline-block rounded-full bg-brand/20 px-3 py-1 font-ibm-plex-mono text-[11px] font-medium text-brand-cyan border border-brand/30">
                    Frictionless Defense
                  </span>
                  <h3 className="font-sora text-tagline-1 sm:text-sora-heading-6 font-normal text-white/95 leading-snug">
                    Defensive frameworks designed to strengthen daily workflows without slowing operations.
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bento Card 3 (Image Card) */}
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={0.4} direction="right" className="h-full">
              <div className="border-stroke-1/15 group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:border-brand-cyan/50">
                <Image
                  src="/images/opai-img-475.jpg"
                  alt="Security operations briefing"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay for text readability */}
                <div
                  className="absolute inset-0 z-0 size-full bg-gradient-to-t from-background-6 via-background-6/80 to-transparent transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative z-10 space-y-3">
                  <span className="inline-block rounded-full bg-brand/40 px-3 py-1 font-ibm-plex-mono text-[11px] font-medium text-brand-cyan border border-brand-cyan/40 backdrop-blur-sm">
                    Rapid Containment
                  </span>
                  <h3 className="font-sora text-sora-heading-6 sm:text-sora-heading-5 font-normal text-white/95 leading-snug">
                    Save weeks of panic with verified incident containment protocols and expert triage.
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Center CTA Button */}
        <div className="text-center pt-4">
          <Reveal delay={0.2}>
            <div className="inline-block">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Talk to our security advisors
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
