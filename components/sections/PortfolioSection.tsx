import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface CaseStudy {
  title: string;
  tagline: string;
  image: string;
  category: string;
  delay: number;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Enterprise Security Culture Transformation",
    tagline: "Reduced employee phishing susceptibility by 78% across 1,200+ staff through hands-on simulations.",
    image: "/images/opai-img-117.jpg",
    category: "Awareness & Training",
    delay: 0.1,
  },
  {
    title: "Healthcare Zero-Trust Architecture Audit",
    tagline: "Protected critical patient health records (EHR) and secured clinical IoT devices across 4 regional hospitals.",
    image: "/images/opai-img-118.jpg",
    category: "Infrastructure Defense",
    delay: 0.2,
  },
  {
    title: "Fintech Fraud Defense & API Hardening",
    tagline: "Neutralized automated credential stuffing attacks and accelerated threat response time by 65%.",
    image: "/images/opai-img-119.jpg",
    category: "Threat Mitigation",
    delay: 0.3,
  },
];

export function PortfolioSection() {
  return (
    <section
      id="initiatives"
      className="bg-background-6 relative overflow-hidden py-10 pt-20 sm:py-20 md:py-28 lg:py-36 xl:py-40 2xl:py-44"
    >
      {/* Top gradient background */}
      <div className="absolute -top-1 left-0 z-4 h-[796px] w-full md:h-[760px] lg:-top-4 2xl:-top-12 pointer-events-none">
        <Image
          src="/images/gradient/opai-1.png"
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </div>

      <div className="main-container relative z-10">
        <div className="space-y-10 md:space-y-14 lg:space-y-20">
          {/* Section Header */}
          <div className="space-y-2 pb-5 text-center md:space-y-3">
            <h2
              className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 text-white/95 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[650px]"
            >
              <SplitReveal>
                Delivering <span className="text-white/40">real, measurable impact.</span>
              </SplitReveal>
            </h2>
            <p className="font-inter-tight text-tagline-2 text-white/60 font-normal lg:mx-auto lg:max-w-[420px]">
              <SplitReveal delay={0.2}>
                Explore how Cirsec’s educational clinics and threat assessments empower
                teams to navigate digital risk with confidence.
              </SplitReveal>
            </p>
          </div>

          {/* Initiatives Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Reveal
                key={study.title}
                delay={study.delay}
                className="border-stroke-1/11 bg-background-5/70 group relative overflow-hidden rounded-xl border flex flex-col transition-all duration-300 hover:border-brand-cyan/40 hover:-translate-y-1 shadow-lg"
              >
                <div className="relative h-[260px] w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-6 via-background-6/30 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-background-6/80 px-3 py-1 font-inter-tight text-tagline-4 font-medium text-brand-cyan backdrop-blur-md border border-white/10">
                    {study.category}
                  </span>

                  {/* Hover arrow badge */}
                  <div className="absolute bottom-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white text-background-13 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 shadow-lg">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-3 bg-background-6/90 backdrop-blur-md">
                  <h3 className="font-sora text-sora-heading-6 sm:text-sora-heading-5 font-normal tracking-[-0.5px] text-white/90 group-hover:text-brand-cyan transition-colors duration-200">
                    {study.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-white/50 leading-relaxed">
                    {study.tagline}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Section Action Button */}
          <Reveal delay={0.2} className="flex justify-center w-full">
            <Button href="#contact" variant="light" size="lg">
              Partner with us on an initiative
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
