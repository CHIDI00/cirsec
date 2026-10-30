import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AboutCta() {
  return (
    <section className="py-16 md:py-24 lg:py-28 overflow-hidden" aria-labelledby="about-cta-heading">
      <div className="main-container">
        <div className="bg-background-5 border border-stroke-1/10 relative flex flex-col items-start justify-between overflow-hidden rounded-2xl p-8 sm:p-12 md:p-16 lg:flex-row lg:items-center lg:p-20 shadow-2xl">
          {/* Subtle Brand Glow in background */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 right-48 size-96 rounded-full bg-brand-cyan/10 blur-3xl" aria-hidden="true" />

          {/* Left: Text & Action */}
          <div className="relative z-10 space-y-4 max-w-[560px]">
            <h2
              id="about-cta-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal text-white/95 max-md:leading-[110%]"
            >
              <SplitReveal>
                Elevate your <br className="hidden sm:block" />
                <span className="text-white/40">cyber readiness today.</span>
              </SplitReveal>
            </h2>
            <p className="font-inter-tight text-tagline-2 text-white/60 font-normal leading-relaxed">
              <SplitReveal as="span" delay={0.2}>
                Schedule a discovery session to explore how Cirsec’s hands-on clinics and customized threat defense can protect your people and infrastructure.
              </SplitReveal>
            </p>

            <div className="pt-4">
              <Reveal delay={0.3}>
                <Button href="#contact" variant="primary" size="lg" arrow>
                  Partner with us
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Right: Stacked floating cards */}
          <div className="relative mt-12 h-64 w-full sm:h-72 lg:mt-0 lg:h-[340px] lg:w-[460px] xl:w-[500px]">
            <figure className="absolute right-0 bottom-0 z-30 h-[220px] w-[180px] sm:h-[260px] sm:w-[210px] md:h-[300px] md:w-[240px] overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/opai-img-120.jpg"
                alt="Cyber clinic preview"
                fill
                sizes="240px"
                className="object-cover"
              />
            </figure>
            <figure className="absolute right-24 bottom-4 z-20 hidden sm:block sm:h-[230px] sm:w-[190px] md:h-[260px] md:w-[210px] -rotate-12 overflow-hidden rounded-xl border border-white/10 shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-0">
              <Image
                src="/images/opai-img-121.jpg"
                alt="Threat mitigation session"
                fill
                sizes="210px"
                className="object-cover"
              />
            </figure>
            <figure className="absolute right-48 bottom-8 z-10 hidden md:block md:h-[210px] md:w-[180px] -rotate-24 overflow-hidden rounded-xl border border-white/10 shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-0">
              <Image
                src="/images/opai-img-122.jpg"
                alt="Security education workshop"
                fill
                sizes="180px"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
