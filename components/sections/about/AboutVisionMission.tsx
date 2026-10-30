import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";

export function AboutVisionMission() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="vision-mission-heading">
      <div className="main-container">
        <div className="space-y-16 lg:space-y-20">
          <div className="space-y-3 text-center">
            <h2
              id="vision-mission-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/95"
            >
              <SplitReveal>
                Shaping the future of <br className="hidden lg:block" />
                <span className="text-white/40">cyber resilience & digital trust</span>
              </SplitReveal>
            </h2>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
              <SplitReveal as="span" delay={0.2}>
                At Cirsec, we believe security should never hinder innovation. Our objective is to build an inclusive digital environment where everyone can operate securely.
              </SplitReveal>
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-y-6 lg:flex-row lg:gap-x-6">
            {/* Vision Card */}
            <div className="flex-1">
              <Reveal delay={0.1} className="h-full">
                <div className="border-stroke-1/10 bg-background-6 relative flex h-full flex-col justify-between space-y-10 overflow-hidden rounded-xl border px-8 py-12 transition-all duration-300 hover:border-brand/40">
                  {/* Brand Aura Glow */}
                  <figure className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none" aria-hidden="true">
                    <svg width="398" height="135" viewBox="0 0 398 135" fill="none">
                      <g filter="url(#filter_vision_glow)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="199" cy="-16.5" rx="115" ry="67.5" fill="#1C50D0" />
                      </g>
                      <g opacity="0.6" filter="url(#filter_vision_cyan)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="205.5" rx="67.5" ry="21" fill="#00D1FE" />
                      </g>
                      <defs>
                        <filter id="filter_vision_glow" x="0" y="-168" width="398" height="303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="42" />
                        </filter>
                        <filter id="filter_vision_cyan" x="87" y="-72" width="237" height="144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="25.5" />
                        </filter>
                      </defs>
                    </svg>
                  </figure>

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand-cyan shadow-[0_0_25px_rgba(0,209,254,0.25)]">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="relative z-10 space-y-3 text-center">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">Our Vision</h3>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/60 leading-relaxed max-w-[460px] mx-auto">
                      A connected world where individuals and organizations navigate cyberspace fearlessly, armed with intuitive knowledge, proactive threat discernment, and uncompromising digital safety habits.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Mission Card */}
            <div className="flex-1">
              <Reveal delay={0.2} className="h-full">
                <div className="border-stroke-1/10 bg-background-6 relative flex h-full flex-col justify-between space-y-10 overflow-hidden rounded-xl border px-8 py-12 transition-all duration-300 hover:border-brand/40">
                  {/* Brand Aura Glow */}
                  <figure className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none" aria-hidden="true">
                    <svg width="398" height="135" viewBox="0 0 398 135" fill="none">
                      <g filter="url(#filter_mission_glow)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="199" cy="-16.5" rx="115" ry="67.5" fill="#1C50D0" />
                      </g>
                      <g opacity="0.6" filter="url(#filter_mission_cyan)" style={{ mixBlendMode: "plus-lighter" }}>
                        <ellipse cx="205.5" rx="67.5" ry="21" fill="#00D1FE" />
                      </g>
                      <defs>
                        <filter id="filter_mission_glow" x="0" y="-168" width="398" height="303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="42" />
                        </filter>
                        <filter id="filter_mission_cyan" x="87" y="-72" width="237" height="144" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feGaussianBlur stdDeviation="25.5" />
                        </filter>
                      </defs>
                    </svg>
                  </figure>

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand-cyan shadow-[0_0_25px_rgba(0,209,254,0.25)]">
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="relative z-10 space-y-3 text-center">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">Our Mission</h3>
                    <p className="font-inter-tight text-tagline-2 font-normal text-white/60 leading-relaxed max-w-[460px] mx-auto">
                      To design and deliver practical educational clinics, realistic cyber simulations, and accessible threat defense frameworks that eliminate digital vulnerabilities and protect vital everyday operations.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
