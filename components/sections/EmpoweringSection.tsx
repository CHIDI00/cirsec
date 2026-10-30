import Image from "next/image";
import { GlowingCards } from "@/components/ui/GlowingCards";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function EmpoweringSection() {
  return (
    <section
      id="solutions"
      className="relative -my-0.5 overflow-hidden py-10 sm:py-20 md:py-28 lg:py-30 xl:py-44"
      aria-labelledby="empowering-cybersecurity-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="main-container relative z-20">
        <div className="space-y-10 md:space-y-14 lg:space-y-20">
          {/* Header */}
          <div className="space-y-2 text-center md:space-y-3">
            <h2
              id="empowering-cybersecurity-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[760px] font-normal max-md:leading-[110%]"
              itemProp="name"
            >
              <SplitReveal>
                Empowering your{" "}
                <span className="text-black/40">
                  organization <br className="hidden md:block" />
                  with cybersecurity expertise
                </span>
              </SplitReveal>
            </h2>

            <p
              className="font-inter-tight text-tagline-2 text-black/60 mx-auto max-w-[460px] font-normal"
              itemProp="description"
            >
              <SplitReveal as="span" delay={0.2}>
                Through awareness, practical education, and modern threat defense,
                Cirsec makes digital safety actionable for every team.
              </SplitReveal>
            </p>
          </div>

          {/* Cards Grid with cursor glow */}
          <GlowingCards className="flex flex-col items-center justify-center gap-y-8">
            {/* Row 1 */}
            <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-8 md:flex-row md:gap-y-0">
              {/* Card 1: Security Incident Workflow */}
              <div
                className="glowing-card-v2 border-stroke-1/11 bg-background-6 relative z-10 flex h-[719px] w-full flex-col items-center justify-center gap-y-2 overflow-hidden rounded-[8px] border px-[29px] pt-[26px] pb-10.5 md:max-w-[380px] lg:h-[710px] xl:h-[719px]"
                aria-labelledby="security-workflow-heading"
              >
                {/* Radial glow */}
                <div className="pointer-events-none absolute top-[-23%] left-[-39%] select-none">
                  <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-brand/30 blur-[30px] select-none">
                    <div className="bg-brand-cyan/70 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
                  </div>
                </div>

                {/* Step 1: Detect */}
                <Reveal delay={0.1} className="z-10 flex flex-col items-center justify-center w-full">
                  <div className="bg-brand-blue/15 flex max-w-[130px] items-center justify-center gap-x-2 rounded-[4px] px-2.5 py-1">
                    <span className="flex size-4 items-center justify-center text-brand-cyan">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <circle cx="8" cy="8" r="2.5" />
                      </svg>
                    </span>
                    <span className="text-brand-cyan font-inter-tight text-tagline-4 font-medium uppercase tracking-wider">
                      Detection
                    </span>
                  </div>
                  <p className="bg-background-5 font-inter-tight text-tagline-3 rounded-[4px] px-5 py-2.5 text-center font-normal text-white/70 backdrop-blur-[17px] mt-2 border border-white/5 w-full">
                    Suspicious credential activity flagged
                  </p>
                </Reveal>

                {/* Down Arrow */}
                <div className="z-10 py-1 text-white/30" aria-hidden="true">
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor">
                    <path d="M7 0V18M7 18L1 12M7 18L13 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 2: Assessment */}
                <Reveal delay={0.2} className="z-10 flex flex-col items-center justify-center w-full">
                  <div className="bg-amber-500/15 flex max-w-[140px] items-center justify-center gap-x-2 rounded-[4px] px-2.5 py-1">
                    <span className="flex size-4 items-center justify-center text-amber-400">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                        <path d="M8 1L1 14H15L8 1ZM8 5V9M8 11V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      </svg>
                    </span>
                    <span className="text-amber-400 font-inter-tight text-tagline-4 font-medium uppercase tracking-wider">
                      Evaluation
                    </span>
                  </div>
                  <div className="bg-background-5 space-y-1 rounded-[4px] px-5 py-2.5 text-center backdrop-blur-[17px] mt-2 border border-white/5 w-full">
                    <p className="text-white/80 text-tagline-3 font-medium">Verify Privileges & IP</p>
                    <p className="font-inter-tight text-tagline-4 font-normal text-white/40">
                      Multi-factor challenge dispatched to owner
                    </p>
                  </div>
                </Reveal>

                {/* Down Arrow */}
                <div className="z-10 py-1 text-white/30" aria-hidden="true">
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor">
                    <path d="M7 0V18M7 18L1 12M7 18L13 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 3: Containment */}
                <Reveal delay={0.3} className="z-10 flex flex-col items-center justify-center w-full">
                  <div className="bg-brand/20 flex max-w-[140px] items-center justify-center gap-x-2 rounded-[4px] px-2.5 py-1">
                    <span className="flex size-4 items-center justify-center text-brand">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-brand-cyan font-inter-tight text-tagline-4 font-medium uppercase tracking-wider">
                      Containment
                    </span>
                  </div>
                  <p className="bg-background-5 font-inter-tight text-tagline-3 rounded-[4px] px-5 py-2.5 text-center font-normal text-white/70 backdrop-blur-[17px] mt-2 border border-white/5 w-full">
                    Token invalidated & access isolated
                  </p>
                </Reveal>

                {/* Down Arrow */}
                <div className="z-10 py-1 text-white/30" aria-hidden="true">
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor">
                    <path d="M7 0V18M7 18L1 12M7 18L13 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 4: Resolution */}
                <Reveal delay={0.4} className="z-10 flex flex-col items-center justify-center w-full">
                  <div className="bg-emerald-500/15 flex max-w-[140px] items-center justify-center gap-x-2 rounded-[4px] px-2.5 py-1">
                    <span className="flex size-4 items-center justify-center text-emerald-400">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                        <path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </span>
                    <span className="text-emerald-400 font-inter-tight text-tagline-4 font-medium uppercase tracking-wider">
                      Resilience
                    </span>
                  </div>
                  <p className="font-inter-tight text-tagline-3 rounded-[4px] px-5 py-2.5 text-center font-normal text-white/60 backdrop-blur-[17px] mt-2 border border-white/5 w-full">
                    Audit log generated & team debriefed
                  </p>
                </Reveal>

                {/* Overlay gradient */}
                <div className="pointer-events-none absolute -bottom-px left-1/2 z-20 h-[380px] w-full -translate-x-1/2 bg-gradient-to-t from-background-6 via-background-6/80 to-transparent select-none" />

                {/* Text content */}
                <div className="absolute bottom-[36px] z-30 max-w-[296px] text-center">
                  <h3
                    id="security-workflow-heading"
                    className="font-sora text-sora-heading-5 font-normal text-white/90"
                    itemProp="name"
                  >
                    Incident Response & Protocol
                  </h3>
                  <p className="font-inter-tight text-tagline-2 font-normal text-white/50 mt-1" itemProp="description">
                    Automate containment steps and enforce standard operating security rules.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="flex w-full max-w-[894px] flex-col items-start justify-center gap-y-8 overflow-hidden md:gap-y-5 xl:gap-y-8">
                {/* Right Upper: Threat Intelligence Analytics */}
                <div
                  className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative h-[344px] w-full overflow-hidden rounded-lg border p-8 md:p-10.5"
                  aria-labelledby="threat-intelligence-heading"
                >
                  <div className="pointer-events-none absolute top-[-51%] left-[-18%] select-none">
                    <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-brand/20 blur-[28px] select-none">
                      <div className="bg-brand-cyan/60 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
                    </div>
                  </div>

                  <Reveal delay={0.1} className="relative z-10 space-y-1 sm:text-center md:text-left">
                    <h3
                      id="threat-intelligence-heading"
                      className="font-sora text-sora-heading-5 font-normal text-white/90"
                      itemProp="name"
                    >
                      Proactive Threat Intelligence
                    </h3>
                    <p className="font-inter-tight text-tagline-2 w-full text-left font-normal text-white/50 md:max-w-[340px]" itemProp="description">
                      Continuously track emerging attack vectors, zero-days, and phishing patterns before they strike.
                    </p>
                  </Reveal>

                  {/* Flow line curve SVG */}
                  <div className="absolute top-[150px] -left-[80px] h-[177px] w-[382px] sm:left-[100px] md:-left-[100px] lg:top-[120px] lg:left-[120px] xl:top-[105px] xl:left-[233px] pointer-events-none">
                    <div className="relative size-full">
                      {/* Flow circle indicator */}
                      <div className="absolute right-0 z-10 size-[33px] rounded-full bg-white shadow-[0_0_20px_rgba(0,209,254,0.7)] flex items-center justify-center">
                        <div className="size-3.5 rounded-full bg-brand-cyan animate-pulse" />
                      </div>

                      {/* Main SVG path */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="377"
                        height="171"
                        viewBox="0 0 377 171"
                        fill="none"
                        className="relative z-10"
                      >
                        <path
                          d="M6 165.184C15.1674 165.184 43.128 157.191 81.6312 125.22C129.76 85.2554 165.857 172.919 204.102 146.706C242.347 120.493 208.829 71.5054 253.52 51.7382C298.211 31.9709 330.87 49.1598 371.694 5.32812"
                          stroke="url(#paint0_brand_gradient)"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_brand_gradient"
                            x1="6"
                            y1="146.707"
                            x2="383.926"
                            y2="6.21115"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.1" stopColor="#0F1C5A" stopOpacity="0" />
                            <stop offset="0.6" stopColor="#1C50D0" />
                            <stop offset="1" stopColor="#00D1FE" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Glow blur SVG path */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="401"
                        height="195"
                        viewBox="0 0 401 195"
                        fill="none"
                        className="absolute inset-[-11px] blur-[8px] opacity-70"
                      >
                        <path
                          d="M18 177.184C27.1674 177.184 55.128 169.191 93.6312 137.22C141.76 97.2554 177.857 184.919 216.102 158.706C254.347 132.493 220.829 83.5054 265.52 63.7382C310.211 43.9709 342.87 61.1598 383.694 17.3281"
                          stroke="#00D1FE"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Lower: Practical Advisory & Cyber Clinics */}
                <div
                  className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative z-10 flex h-[344px] w-full flex-col items-start justify-between overflow-hidden rounded-lg border pt-8 pl-8 md:pt-10.5 md:pl-10.5 max-lg:gap-y-8 lg:flex-row"
                  aria-labelledby="cyber-clinics-heading"
                >
                  <div className="pointer-events-none absolute top-[-52%] left-[-17%] select-none">
                    <div className="pointer-events-none relative z-2 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-brand-navy blur-[25px] select-none">
                      <div className="bg-brand/60 absolute right-0 bottom-[-4px] left-[102px] z-1 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
                    </div>
                  </div>

                  <Reveal delay={0.1} className="w-full space-y-1">
                    <h3
                      id="cyber-clinics-heading"
                      className="font-sora text-sora-heading-5 max-w-[260px] font-normal text-white/90 sm:mx-auto md:mx-0"
                      itemProp="name"
                    >
                      Cyber Clinics & Practical Engagement
                    </h3>
                    <p className="font-inter-tight text-tagline-2 w-full max-w-[280px] text-left font-normal text-white/50 sm:mx-auto sm:text-center md:mx-0 md:text-left" itemProp="description">
                      Interactive sessions that turn security guidelines into muscle memory for modern workspaces.
                    </p>
                  </Reveal>

                  <Reveal delay={0.2} direction="right" className="w-full max-w-[480px] shrink-0 self-end">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-xl border-t border-l border-white/10 shadow-2xl">
                      <Image
                        src="/images/opai-img-94.png"
                        alt="Cirsec interactive security advisory dashboard preview"
                        fill
                        className="object-cover object-left-top"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex w-full flex-col items-center justify-center gap-y-8 md:flex-row md:gap-x-4">
              {/* Left: Security Posture & Exposure Analytics */}
              <div
                className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative flex h-[391px] w-full max-w-[714px] flex-col items-start justify-between overflow-hidden rounded-lg border p-6 max-md:items-center max-md:gap-y-10 md:h-[331px] md:gap-y-2 md:p-10.5 lg:flex-row"
                aria-labelledby="hygiene-analytics-heading"
              >
                <div className="pointer-events-none absolute top-[-52%] left-[-22%] select-none">
                  <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-brand/20 blur-[25.5px] select-none">
                    <div className="bg-brand-cyan/40 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
                  </div>
                </div>

                <Reveal delay={0.1} className="z-10 space-y-1">
                  <h3
                    id="hygiene-analytics-heading"
                    className="font-sora text-sora-heading-5 max-w-[240px] font-normal text-white/90"
                    itemProp="name"
                  >
                    Digital Hygiene & Risk Metrics
                  </h3>
                  <p className="font-inter-tight text-tagline-2 w-full max-w-[269px] text-left font-normal text-white/50" itemProp="description">
                    Quantify attack surface exposure and benchmark security maturity across all organizational assets.
                  </p>
                </Reveal>

                {/* Progress Card */}
                <Reveal delay={0.2} className="border-stroke-1/18 z-10 w-full max-w-[270px] space-y-4 rounded-lg border border-white/10  px-6 pt-5 pb-6 backdrop-blur-[20px] lg:max-w-[300px]">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <h4 className="font-manrope text-manrope-heading-6 font-medium text-white/60">
                      Coverage
                    </h4>
                    <span className="font-inter-tight text-tagline-4 font-normal text-brand-cyan rounded-full bg-brand-cyan/10 px-2.5 py-0.5 border border-brand-cyan/20">
                      Real-time
                    </span>
                  </div>

                  <div className="space-y-4" aria-label="Security coverage visualization">
                    <div>
                      <div className="flex justify-between text-tagline-4 font-inter-tight font-normal text-white/50 mb-1">
                        <span>Identity & MFA</span>
                        <span className="text-white/80 font-mono">94%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan w-[94%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-tagline-4 font-inter-tight font-normal text-white/50 mb-1">
                        <span>Cloud Storage Defense</span>
                        <span className="text-white/80 font-mono">88%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand w-[88%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-tagline-4 font-inter-tight font-normal text-white/50 mb-1">
                        <span>Endpoint Hygiene</span>
                        <span className="text-white/80 font-mono">98%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-[98%]" />
                      </div>
                    </div>

                    <p className="font-inter-tight text-tagline-4 flex w-full items-center justify-between font-normal text-white/30 pt-1 border-t border-white/5">
                      <span>0 Breaches</span>
                      <span>12.4k Audits</span>
                      <span>Verified</span>
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right: CTA box */}
              <div
                className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative flex h-[331px] w-full items-center justify-center overflow-hidden rounded-lg border p-6 md:w-[560px] md:p-10.5"
                aria-label="Call to action section"
              >
                <div className="pointer-events-none absolute top-[-57%] left-[-25%] select-none">
                  <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-brand/20 blur-[25.5px] select-none">
                    <div className="bg-brand-cyan/50 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
                  </div>
                </div>

                <Reveal delay={0.1} className="z-10 text-center space-y-4">
                  <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">
                    Ready to build cyber resilience?
                  </h3>
                  <p className="font-inter-tight text-tagline-2 text-white/50 max-w-[340px] mx-auto">
                    Explore our modular engagement programs and community workshops.
                  </p>
                  <Button href="#initiatives" variant="light" size="lg">
                    Explore all initiatives
                  </Button>
                </Reveal>
              </div>
            </div>
          </GlowingCards>
        </div>
      </div>

      {/* Top Gradient Background with seamless blend */}
      <div className="absolute top-0 left-0 z-0 h-[760px] lg:h-[840px] w-full pointer-events-none select-none">
        <Image
          src="/images/gradient/cirsec-gradient-1.png"
          alt="Top blend mode"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Soft feather overlay to guarantee 100% seamless transition from the white section above */}
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[#f8f9fa] via-[#f8f9fa]/80 to-transparent pointer-events-none" />
      </div>

      {/* Bottom Gradient Background */}
      <div className="absolute -bottom-137 left-0 z-0 h-[696px] w-full min-[550px]:-bottom-119 md:-bottom-97 lg:-bottom-72 xl:-bottom-47 2xl:bottom-18 pointer-events-none select-none">
        <Image
          src="/images/gradient/cirsec-gradient-2.png"
          alt="Bottom blend mode"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
