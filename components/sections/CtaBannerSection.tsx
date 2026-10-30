import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CtaBannerSection() {
  return (
    <section className="bg-background-6 py-10 md:py-20 lg:py-24">
      <div className="main-container">
        <div className="bg-gradient-to-br from-background-5 via-background-5 to-brand-navy/60 relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16 xl:p-20 border border-white/10 shadow-2xl">
          {/* Subtle glow orb */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-brand/30 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 size-80 rounded-full bg-brand-cyan/20 blur-[100px]" />

          {/* Left Text and CTA */}
          <div className="relative z-10 space-y-4 max-w-xl text-center lg:text-left">
            <h2 className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 font-normal text-white/95">
              <SplitReveal>
                Start your cyber <span className="text-white/40">resilience journey today.</span>
              </SplitReveal>
            </h2>

            <p className="text-tagline-2 font-inter-tight text-white/60 max-w-lg">
              <SplitReveal delay={0.2}>
                Discover how Cirsec can help your organisation mitigate risk, train your team,
                and establish reliable, proactive digital safety habits.
              </SplitReveal>
            </p>

            <Reveal delay={0.3} className="pt-4 flex justify-center lg:justify-start">
              <Button href="#contact" variant="light" size="lg">
                Connect with our team
              </Button>
            </Reveal>
          </div>

          {/* Right Floating Stacked Images */}
          <div className="relative mt-10 lg:mt-0 w-full lg:w-auto h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[420px] lg:w-[480px] h-full flex items-center justify-end">
              {/* Back card - rotate -30deg */}
              <figure className="absolute right-32 sm:right-44 bottom-2 z-1 hidden sm:block h-[220px] w-[160px] sm:h-[260px] sm:w-[190px] -rotate-[22deg] overflow-hidden rounded-xl border border-white/15 shadow-2xl">
                <Image
                  src="/images/opai-img-122.jpg"
                  alt="Security team collaboration"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </figure>

              {/* Middle card - rotate -12deg */}
              <figure className="absolute right-16 sm:right-24 bottom-4 z-2 hidden min-[480px]:block h-[240px] w-[170px] sm:h-[290px] sm:w-[210px] -rotate-[12deg] overflow-hidden rounded-xl border border-white/15 shadow-2xl">
                <Image
                  src="/images/opai-img-121.jpg"
                  alt="Cyber clinic workshop"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </figure>

              {/* Front card - upright */}
              <figure className="relative z-3 h-[260px] w-[190px] sm:h-[320px] sm:w-[240px] overflow-hidden rounded-xl border border-white/20 shadow-2xl">
                <Image
                  src="/images/opai-img-120.jpg"
                  alt="Hands-on cyber defense engagement"
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
