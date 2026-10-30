import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function AboutStory() {
  return (
    <section className="overflow-hidden py-20 md:py-28 xl:py-34 2xl:py-44" aria-labelledby="about-story-heading">
      <div className="main-container">
        <div className="flex flex-col items-start justify-between gap-y-12 xl:flex-row xl:items-center xl:gap-x-14">
          {/* Left Column: Story & 4 Feature/Stat Cards */}
          <div className="w-full space-y-8">
            <div className="space-y-3">
              <h2
                id="about-story-heading"
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/95"
              >
                <SplitReveal>
                  How Cirsec <span className="text-white/40">was founded</span>
                </SplitReveal>
              </h2>
              <p className="font-inter-tight text-tagline-2 max-w-xl font-normal text-white/60">
                <SplitReveal as="span" delay={0.2}>
                  Cirsec was established to bridge the critical gap between complex cybersecurity regulations and everyday human practice. Our practical clinics, hands-on drills, and proactive defense guidance empower organizations worldwide to build authentic cyber resilience.
                </SplitReveal>
              </p>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {/* Card 1: Stat Counter */}
              <div className="col-span-12 md:col-span-6">
                <Reveal delay={0.1} direction="left" className="h-full">
                  <div className="border-stroke-1/10 bg-background-6 flex h-full flex-col justify-center rounded-xl border p-8 text-left transition-all duration-300 hover:border-brand/40">
                    <h3 className="font-sora text-sora-heading-3 flex items-center font-normal text-white/90">
                      <CountUp value="98" suffix="%" />
                    </h3>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/70 mt-1">
                      Practical retention & threat awareness score
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Card 2: Interactive Cyber Clinics */}
              <div className="col-span-12 md:col-span-6">
                <Reveal delay={0.2} direction="up" className="h-full">
                  <div className="border-stroke-1/10 bg-background-6 flex h-full flex-col justify-center rounded-xl border p-8 text-left transition-all duration-300 hover:border-brand/40">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">
                      Targeted Cyber Clinics
                    </h3>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/60 mt-1">
                      Interactive drills and simulations turning security guidelines into instinctive muscle memory.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Card 3: Defense Architecture with Brand Glow SVG */}
              <div className="col-span-12 md:col-span-6">
                <Reveal delay={0.1} direction="left" className="h-full">
                  <div className="border-stroke-1/10 bg-background-6 relative flex h-full flex-col justify-center overflow-hidden rounded-xl border p-8 text-left transition-all duration-300 hover:border-brand/40">
                    <figure className="pointer-events-none absolute top-0 left-0 z-0 size-full select-none" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="149"
                        height="140"
                        viewBox="0 0 149 140"
                        fill="none"
                      >
                        <g opacity="0.85" filter="url(#filter0_f_cirsec_story)">
                          <ellipse
                            cx="6.79936"
                            cy="-1.32236"
                            rx="58.0362"
                            ry="84.3854"
                            transform="rotate(-0.311865 6.79936 -1.32236)"
                            fill="#1C50D0"
                          />
                        </g>
                        <g
                          opacity="0.6"
                          filter="url(#filter1_f_cirsec_story)"
                          style={{ mixBlendMode: "plus-lighter" }}
                        >
                          <ellipse
                            cx="-55.7497"
                            cy="-34.2889"
                            rx="82.0362"
                            ry="120.414"
                            transform="rotate(-10.8579 -55.7497 -34.2889)"
                            fill="#00D1FE"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_cirsec_story"
                            x="-135.234"
                            y="-169.707"
                            width="284.07"
                            height="336.77"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur" />
                          </filter>
                          <filter
                            id="filter1_f_cirsec_story"
                            x="-190.469"
                            y="-204.566"
                            width="269.438"
                            height="340.555"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur" />
                          </filter>
                        </defs>
                      </svg>
                    </figure>
                    <h3 className="font-sora text-sora-heading-5 relative z-10 font-normal text-white/95">
                      Proactive Defense Architecture
                    </h3>
                    <p className="font-inter-tight text-tagline-2 relative z-10 font-normal text-white/60 mt-1">
                      Actionable vulnerability posture reviews and tailored incident readiness frameworks.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Card 4: Community & Culture with Avatar Stack */}
              <div className="col-span-12 md:col-span-6">
                <Reveal delay={0.2} className="h-full">
                  <div className="border-stroke-1/10 bg-background-6 flex h-full flex-col justify-center gap-y-4 rounded-xl border p-8 text-left transition-all duration-300 hover:border-brand/40">
                    <div className="flex items-center -space-x-3">
                      <Image
                        className="inline-block size-9 rounded-full ring-2 ring-white/80 object-cover"
                        src="/images/opai-avatar-img-09.png"
                        alt="Community member"
                        width={36}
                        height={36}
                      />
                      <Image
                        className="inline-block size-9 rounded-full ring-2 ring-white/80 object-cover"
                        src="/images/opai-avatar-img-10.png"
                        alt="Community member"
                        width={36}
                        height={36}
                      />
                      <Image
                        className="inline-block size-9 rounded-full ring-2 ring-white/80 object-cover"
                        src="/images/opai-avatar-img-11.png"
                        alt="Community member"
                        width={36}
                        height={36}
                      />
                      <Image
                        className="inline-block size-9 rounded-full ring-2 ring-white/80 object-cover"
                        src="/images/opai-avatar-img-12.png"
                        alt="Community member"
                        width={36}
                        height={36}
                      />
                      <div className="bg-brand-ink/90 flex size-9 shrink-0 items-center justify-center rounded-full ring-2 ring-brand-cyan/80 backdrop-blur-xs">
                        <span className="font-sora text-tagline-4 font-normal text-brand-cyan">10k+</span>
                      </div>
                    </div>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/90">
                      Individuals & teams empowered across global organizations.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Engagements Photo */}
          <figure className="w-full shrink-0 max-w-full xl:max-w-[495px]">
            <Reveal delay={0.3} direction="right" className="overflow-hidden rounded-xl border border-stroke-1/10 shadow-2xl">
              <div className="relative aspect-[4/5] w-full max-h-[520px] overflow-hidden">
                <Image
                  src="/images/opai-img-474.jpg"
                  alt="Cirsec digital safety clinic session"
                  fill
                  sizes="(max-width: 1280px) 100vw, 495px"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </figure>
        </div>
      </div>
    </section>
  );
}
