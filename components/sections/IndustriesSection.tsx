import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface IndustryItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const industries: IndustryItem[] = [
  {
    title: "Retail & E-commerce",
    description: "Defend against credential stuffing, checkout fraud, customer account takeover, and automated bot networks.",
    delay: 0.1,
    icon: (
      <svg width="42" height="42" viewBox="0 0 43 43" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35.125 33.5H11.9318L6.26533 2.33431C6.19725 1.95989 5.99993 1.62124 5.70775 1.3774C5.41558 1.13356 5.0471 1 4.66654 1H1" />
        <circle cx="14" cy="37.5625" r="4.0625" />
        <circle cx="35.125" cy="37.5625" r="4.0625" />
        <path d="M10.4545 25.375H35.9581C36.7192 25.375 37.4562 25.1079 38.0405 24.6202C38.6249 24.1325 39.0195 23.4552 39.1557 22.7064L41.625 9.125H7.5" />
      </svg>
    ),
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Safeguard protected patient records (EHR), secure connected medical IoT endpoints, and prevent crippling ransomware outages.",
    delay: 0.2,
    icon: (
      <svg width="42" height="42" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 8.125L6.5 32.5L6.5 43.875" />
        <path d="M6.5 24.375L12.1875 14.625L17.875 32.5L23.5625 19.5L29.25 32.5L34.9375 22.75L40.625 32.5L45.5 24.375" />
      </svg>
    ),
  },
  {
    title: "Financial Services & Fintech",
    description: "Fortify transaction pipelines, enforce multi-factor API security, and satisfy strict regulatory compliance frameworks.",
    delay: 0.3,
    icon: (
      <svg width="42" height="42" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="26" r="19.5" />
        <path d="M26 12V15M26 37V40" />
        <path d="M30 19C30 17 28 15 25 15H22C19.5 15 18 17 18 19.5C18 22 20 23.5 23 24H27C30 24.5 32 26 32 29C32 31.5 30 33 27 33H22C19 33 18 31 18 29" />
      </svg>
    ),
  },
  {
    title: "Public Sector & Civil Society",
    description: "Shield civic digital infrastructure, protect community identity registries, and train non-technical staff in essential cyber defense.",
    delay: 0.4,
    icon: (
      <svg width="42" height="42" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.25 43.875L48.75 43.875" />
        <path d="M6.5 43.875L6.5 6.5L25.5 6.5L25.5 43.875" />
        <path d="M25.5 13L42 19L42 43.875" />
        <path d="M13 16.25V16.26M19 16.25V16.26M13 26.25V26.26M19 26.25V26.26M13 36.25V36.26M19 36.25V36.26M34 26V26.01M34 36V36.01" />
      </svg>
    ),
  },
];

export function IndustriesSection() {
  return (
    <section
      id="sectors"
      className="bg-background-7 py-10 pb-20 sm:py-20 md:py-28 lg:py-30 xl:py-40 2xl:py-44"
      aria-labelledby="innovative-solutions-heading"
    >
      <div className="main-container">
        <div className="mb-10 space-y-12 lg:space-y-19">
          {/* Header */}
          <div className="space-y-2 text-center md:space-y-3">
            <h2
              id="innovative-solutions-heading"
              className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 text-background-13/90 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[700px]"
              itemProp="name"
            >
              <SplitReveal>
                Tailored cybersecurity{" "}
                <span className="text-background-13/50">
                  defense for <br className="hidden md:block" />
                  every vital industry
                </span>
              </SplitReveal>
            </h2>
            <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal lg:mx-auto lg:max-w-[420px]">
              <SplitReveal as="span" delay={0.2}>
                We partner with organisations across critical sectors to build proactive defense,
                compliance confidence, and lasting cyber resilience.
              </SplitReveal>
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((item, index) => (
              <Reveal
                key={item.title}
                delay={item.delay}
                className="group relative flex flex-col items-center gap-6 rounded-xl border border-stroke-3/15 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-blue/30"
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-t-xl bg-gradient-to-r from-brand to-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon wrapper */}
                <div
                  className="flex size-16 items-center justify-center rounded-2xl bg-background-7 text-background-13 transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:text-brand"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-sora text-sora-heading-5 text-background-6/90 font-normal tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-background-6/60 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Reveal delay={0.2} className="flex justify-center w-full">
          <Button href="#initiatives" variant="dark" size="lg">
            Learn more about our initiatives
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
