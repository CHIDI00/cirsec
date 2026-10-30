import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";

interface CommunityCard {
  role: string;
  tagline: string;
  image: string;
  delay: number;
}

const communityGroups: CommunityCard[] = [
  {
    role: "Students & Youth",
    tagline: "Building foundational online privacy, password hygiene, and digital discernment early.",
    image: "/images/opai-avatar-img-281.jpg",
    delay: 0.1,
  },
  {
    role: "Engineers & Developers",
    tagline: "Mastering secure code reviews, API hardening, and vulnerability mitigation across modern stacks.",
    image: "/images/opai-avatar-img-282.jpg",
    delay: 0.2,
  },
  {
    role: "Executive Leadership",
    tagline: "Bridging technical threat telemetry with corporate risk governance, compliance, and boardroom confidence.",
    image: "/images/opai-avatar-img-283.jpg",
    delay: 0.3,
  },
  {
    role: "Remote & Hybrid Teams",
    tagline: "Eliminating home office blind spots, phishing vulnerability, and credential exposure.",
    image: "/images/opai-avatar-img-284.jpg",
    delay: 0.4,
  },
  {
    role: "Healthcare & Non-Profits",
    tagline: "Safeguarding confidential community records and critical frontline infrastructure from ransomware.",
    image: "/images/opai-avatar-img-285.jpg",
    delay: 0.5,
  },
  {
    role: "Security Champions",
    tagline: "Training proactive peer advocates to lead sustainable digital safety cultures from within.",
    image: "/images/opai-avatar-img-286.jpg",
    delay: 0.6,
  },
];

export function AboutTeam() {
  return (
    <section className="py-20 md:py-28 xl:py-34" aria-labelledby="community-heading">
      <div className="main-container">
        <div className="mb-14 md:mb-18 space-y-3 text-center">
          <h2
            id="community-heading"
            className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/95"
          >
            <SplitReveal>
              Who we <span className="text-white/40">empower & protect</span>
            </SplitReveal>
          </h2>
          <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
            <SplitReveal as="span" delay={0.2}>
              Driven by expertise, united by proactive cybersecurity resilience.
            </SplitReveal>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {communityGroups.map((group) => (
            <div key={group.role} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Reveal delay={group.delay} className="h-full">
                <div className="group relative min-h-[395px] w-full cursor-pointer overflow-hidden rounded-xl border border-stroke-1/10 bg-background-5 transition-all duration-300 hover:border-brand/40 shadow-md">
                  {/* Photo */}
                  <figure className="relative h-full min-h-[395px] w-full overflow-hidden saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100">
                    <Image
                      src={group.image}
                      alt={group.role}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </figure>

                  {/* Gradient Overlay for Legibility */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background-6 via-background-6/80 to-transparent z-10"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1">
                    <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">
                      {group.role}
                    </h3>
                    <p className="font-inter-tight text-tagline-4 font-normal text-white/65 leading-relaxed">
                      {group.tagline}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
