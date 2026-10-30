import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";

export function AboutHero() {
  return (
    <section
      className="pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-12 overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <div className="main-container">
        <div className="space-y-12 md:space-y-16 xl:space-y-20">
          <div className="space-y-3 text-center">
            <h1
              id="about-hero-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 xl:text-sora-heading-1 inline-block font-normal text-white/95 max-w-[920px] mx-auto max-md:leading-[110%]"
            >
              <SplitReveal>
                Empowering safer <br className="hidden sm:block" />
                <span className="text-white/40">digital futures with Cirsec</span>
              </SplitReveal>
            </h1>
            <p className="font-inter-tight text-tagline-2 text-white/60 max-w-[580px] mx-auto font-normal">
              <SplitReveal as="span" delay={0.2}>
                Dedicated to demystifying cybersecurity, educating teams, and transforming complex digital defense into intuitive daily habits.
              </SplitReveal>
            </p>
          </div>

          <Reveal delay={0.3} className="overflow-hidden rounded-xl border border-stroke-1/10 shadow-2xl">
            <div className="relative aspect-[16/9] w-full max-h-[560px] overflow-hidden">
              <Image
                src="/images/opai-img-473.jpg"
                alt="Cirsec collaborative cybersecurity clinic in action"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
