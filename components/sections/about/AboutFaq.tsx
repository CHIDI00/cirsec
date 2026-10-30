import Image from "next/image";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";
import { Button } from "@/components/ui/Button";

const aboutFaqs: AccordionEntry[] = [
  {
    question: "What makes Cirsec distinct from conventional security compliance vendors?",
    answer:
      "Unlike rigid compliance checklists that burden teams with friction, Cirsec focuses on practical, human-centric security habits. We demystify technical attack vectors through realistic drills and interactive clinics, ensuring safety practices become second nature.",
  },
  {
    question: "What types and sizes of organizations does Cirsec partner with?",
    answer:
      "We collaborate across the spectrum—from early-stage startups and high-growth fintechs to civic institutions, public schools, and healthcare networks. Our engagements are custom-scaled to match each organization's unique exposure.",
  },
  {
    question: "How are Cirsec's interactive cyber clinics structured?",
    answer:
      "Our clinics are interactive, hands-on lab sessions tailored to your workflows. We walk through live attack scenarios (such as phishing, API token leakage, and credential stuffing), teach threat discernment, and help teams harden their daily tools.",
  },
  {
    question: "Do non-technical staff members find value in Cirsec clinics?",
    answer:
      "Absolutely. In fact, non-technical teams are often the primary targets of social engineering. We strictly avoid confusing jargon, using intuitive real-world mental models so every employee feels confident and protected.",
  },
  {
    question: "Does Cirsec assist with security posture assessments?",
    answer:
      "Yes. We conduct tailored readiness reviews, exposure scans, and phishing risk audits to highlight critical vulnerability blind spots and provide prioritized, step-by-step remediation roadmaps.",
  },
  {
    question: "How does Cirsec address emerging AI-driven phishing threats?",
    answer:
      "We continuously update our curriculums with the latest threat telemetry—including deepfake voice cloning, synthetic pretexting, and adaptive phishing campaigns—giving teams practical frameworks to detect deception.",
  },
  {
    question: "How can our team or institution schedule a session?",
    answer:
      "You can submit an inquiry through the contact form alongside or reach out directly to partnerships@cirsec.org. We will discuss your team's objectives and tailor an engagement plan.",
  },
];

export function AboutFaq() {
  return (
    <section className="py-20 xl:py-28" aria-labelledby="about-faq-heading">
      <div className="main-container">
        <div className="mb-14 md:mb-18 space-y-3 text-center">
          <h2
            id="about-faq-heading"
            className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/95"
          >
            <SplitReveal>
              Frequently asked <span className="text-white/40">questions</span>
            </SplitReveal>
          </h2>
          <p className="font-inter-tight text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
            <SplitReveal as="span" delay={0.2}>
              Everything you need to know about partnering with Cirsec on digital defense.
            </SplitReveal>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10 xl:gap-x-14">
          {/* Left Column: Accordion */}
          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={0.1}>
              <Accordion items={aboutFaqs} defaultOpen={0} />
            </Reveal>
          </div>

          {/* Right Column: Contact Question Box with Background */}
          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={0.2} className="h-full">
              <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stroke-1/10 bg-background-5 p-8 lg:p-12 shadow-xl">
                {/* Background Pattern Graphic */}
                <figure className="pointer-events-none absolute inset-0 -z-10 size-full overflow-hidden select-none" aria-hidden="true">
                  <Image
                    src="/images/gradient/opai-6.svg"
                    alt=""
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-background-5/80 backdrop-blur-xs" />
                </figure>

                <div className="space-y-2 mb-6">
                  <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">
                    Still have questions?
                  </h3>
                  <p className="font-inter-tight text-tagline-3 font-normal text-white/60">
                    Reach out directly to our advisory group for tailored guidance.
                  </p>
                </div>

                <PlaceholderForm actionName="Question" successMessage="Thank you! Our advisory team will respond within 24 hours.">
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="font-inter-tight text-tagline-2 min-h-12 w-full rounded-lg border border-stroke-1/15 bg-background-6/90 px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="font-inter-tight text-tagline-2 min-h-12 w-full rounded-lg border border-stroke-1/15 bg-background-6/90 px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Subject or Organization"
                        className="font-inter-tight text-tagline-2 min-h-12 w-full rounded-lg border border-stroke-1/15 bg-background-6/90 px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can Cirsec assist your team?"
                        className="font-inter-tight text-tagline-2 w-full rounded-lg border border-stroke-1/15 bg-background-6/90 p-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <Button type="submit" variant="primary" size="lg" arrow className="w-full justify-center">
                        Send inquiry
                      </Button>
                    </div>
                  </div>
                </PlaceholderForm>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
