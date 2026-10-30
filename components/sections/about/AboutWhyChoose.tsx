import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";

interface ValueItem {
  title: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
}

const values: ValueItem[] = [
  {
    title: "Scalability",
    description: "Modular security clinics and defense habits tailored to scale seamlessly with growing organizations.",
    delay: 0.1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Threat Innovation",
    description: "Constantly tracking emergent attack vectors, AI-generated phishing, and real-world zero-day risks.",
    delay: 0.2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Direct Support",
    description: "Dedicated cybersecurity educators and advisory specialists committed to your team's long-term safety.",
    delay: 0.3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Practical Simplicity",
    description: "Zero-jargon, practical frameworks designed for effortless comprehension by technical and non-technical staff.",
    delay: 0.4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export function AboutWhyChoose() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="why-choose-heading">
      <div className="main-container">
        <div className="space-y-16">
          <div className="space-y-3 text-center">
            <h2
              id="why-choose-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/95"
            >
              <SplitReveal>
                Why partner with <span className="text-white/40">Cirsec?</span>
              </SplitReveal>
            </h2>
            <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
              <SplitReveal as="span" delay={0.2}>
                Uncompromising clarity, practical methodology, and defense readiness tailored for modern operations.
              </SplitReveal>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <Reveal key={item.title} delay={item.delay} className="h-full">
                <div className="border-stroke-1/10 bg-background-6 group relative flex h-full flex-col justify-between space-y-6 overflow-hidden rounded-xl border p-8 text-center transition-all duration-300 hover:border-brand/40 hover:-translate-y-1 hover:shadow-xl">
                  {/* Subtle hover accent line */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 rounded-t-xl bg-gradient-to-r from-brand to-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center justify-center">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-background-14 text-brand-cyan transition-colors duration-300 group-hover:bg-brand/20 group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">
                      {item.title}
                    </h3>
                    <p className="font-inter-tight text-tagline-3 font-normal text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
