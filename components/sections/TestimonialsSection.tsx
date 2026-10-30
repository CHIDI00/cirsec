import { SplitReveal } from "@/components/ui/SplitReveal";
import { StarRating } from "@/components/ui/StarRating";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organisation: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Cirsec fundamentally transformed how our staff thinks about digital threat vectors. The practical drills and phishing simulations replaced fear with proactive awareness.",
    author: "Dr. Marcus Vance",
    role: "Chief Information Security Officer",
    organisation: "Apex Global Financial",
  },
  {
    quote:
      "The hands-on cyber clinic was eye-opening. We uncovered critical cloud exposure blind spots and implemented zero-trust access controls before our product launch.",
    author: "Maya Chen",
    role: "VP of Engineering",
    organisation: "Helios Health Tech",
  },
  {
    quote:
      "From day one, Cirsec felt like a true mission partner. Their educational workshops made complex ISO and NIST compliance principles clear and achievable for our entire engineering group.",
    author: "Derek Singh",
    role: "Head of Infrastructure",
    organisation: "Logix Supply Networks",
  },
  {
    quote:
      "Our school district needed a digital safety initiative that teachers and young adults could actually relate to. Cirsec delivered workshops that inspired real behavior changes.",
    author: "Laura Fernandez",
    role: "Technology Director",
    organisation: "Civic Education Alliance",
  },
  {
    quote:
      "What impressed us most was their practical, zero-jargon philosophy. Cirsec tailored security habits to our unique workflow rather than imposing rigid, friction-heavy rules.",
    author: "Jonas Müller",
    role: "Risk & Compliance Lead",
    organisation: "Vector Dynamics",
  },
];

export function TestimonialsSection() {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-background-6 py-12 md:py-24 lg:py-32 xl:py-36 overflow-hidden border-t border-white/5"
    >
      <div className="main-container mb-10 md:mb-14 lg:mb-16">
        <div className="space-y-3 text-center">
          <h2 className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 mx-auto max-w-[700px] font-normal max-md:leading-[110%] text-white/95">
            <SplitReveal>
              What our <span className="text-white/40">partners & community are saying.</span>
            </SplitReveal>
          </h2>
          <p className="font-inter-tight text-tagline-2 text-white/60 mx-auto max-w-[420px]">
            <SplitReveal delay={0.2}>
              Real feedback from security leaders, engineers, and organizations building safer digital habits.
            </SplitReveal>
          </p>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Left and right fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background-6 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background-6 to-transparent" />

        <div className="animate-marquee flex gap-6 px-4 py-4">
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.author}-${index}`}
              className="bg-background-5/70 border-stroke-1/11 relative flex min-h-[300px] w-[320px] md:w-[380px] shrink-0 flex-col justify-between rounded-xl border p-6 md:p-8 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-brand-cyan/40"
            >
              <div className="space-y-4">
                <StarRating rating={5} />
                <p className="font-inter-tight text-tagline-2 text-white/80 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-brand to-brand-cyan flex items-center justify-center font-bold text-white text-sm shadow-md">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-sora text-sm font-medium text-white/95">
                    {item.author}
                  </h3>
                  <p className="font-inter-tight text-xs text-white/50">
                    {item.role} · {item.organisation}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
