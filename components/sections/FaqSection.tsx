import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is Cirsec and what is its core mission?",
    answer:
      "Cirsec is a cybersecurity and technology initiative focused on helping individuals and organisations understand digital risks and adopt safer technological practices. Through targeted awareness campaigns, hands-on educational clinics, and community initiatives, we make cybersecurity accessible and practical for everyone.",
  },
  {
    id: "faq-2",
    question: "How do Cirsec’s practical engagements work for teams?",
    answer:
      "Our engagements are tailored to your organization’s tech stack and risk profile. We run realistic phishing simulations, conduct threat vulnerability walkthroughs, and train employees using real-world scenarios so safe habits become second nature.",
  },
  {
    id: "faq-3",
    question: "Are your sessions suitable for non-technical individuals?",
    answer:
      "Absolutely. A central pillar of Cirsec is demystifying cybersecurity. We deliberately avoid confusing jargon and focus on intuitive mental models, practical device hygiene, password safety, two-factor authentication, and identifying social engineering tactics.",
  },
  {
    id: "faq-4",
    question: "Does Cirsec provide direct advisory and audit support?",
    answer:
      "Yes. We offer readiness assessments, incident response planning, and external posture reviews to help companies identify vulnerable assets before bad actors do, while establishing clear remediation playbooks.",
  },
  {
    id: "faq-5",
    question: "Which industries do you partner with?",
    answer:
      "We partner with businesses in fintech, health technology, e-commerce, cloud software, civic institutions, and public school networks worldwide.",
  },
  {
    id: "faq-6",
    question: "How can our organisation participate in a Cirsec clinic?",
    answer:
      "You can submit a request using our contact form below or reach out to partnerships@cirsec.org. We will discuss your team size, objectives, and schedule an interactive workshop tailored to your needs.",
  },
  {
    id: "faq-7",
    question: "How do I receive regular threat intelligence bulletins?",
    answer:
      "Subscribe to our newsletter below or connect with our social channels. We regularly publish threat alerts, security advisories, and actionable safety checklists.",
  },
];

export function FaqSection() {
  const accordionData = faqList.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section
      id="faq"
      className="bg-background-6 py-12 md:py-24 lg:py-32 xl:py-36 border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="main-container space-y-12 md:space-y-16">
        {/* Header */}
        <div className="space-y-2 text-center md:space-y-3">
          <h2
            id="faq-heading"
            className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 font-normal text-white/95"
          >
            <SplitReveal>
              Your questions, <span className="text-white/40">answered</span>
            </SplitReveal>
          </h2>
          <p className="font-inter-tight text-tagline-2 text-white/60 max-w-[480px] mx-auto">
            <SplitReveal delay={0.2}>
              Common inquiries about our cybersecurity initiatives, community workshops, and practical defense models.
            </SplitReveal>
          </p>
        </div>

        {/* Content Layout: Accordion left, Contact Form right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Accordion list */}
          <div className="lg:col-span-7">
            <Accordion items={accordionData} />
          </div>

          {/* Right: Quick Question Form */}
          <div className="lg:col-span-5">
            <Reveal
              delay={0.2}
              className="bg-background-5/70 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              {/* Radial glow background */}
              <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-brand/20 blur-[50px]" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <h3 className="font-sora text-sora-heading-5 font-normal text-white/95">
                    Have another question?
                  </h3>
                  <p className="font-inter-tight text-tagline-3 text-white/50">
                    Send our security team a direct note and we will reply promptly.
                  </p>
                </div>

                <PlaceholderForm
                  actionName="FAQ Inquiry"
                  successMessage="Thank you! Our team will get back to you with an answer shortly."
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="faq-name" className="sr-only">Your Name</label>
                    <input
                      id="faq-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="text-tagline-2 font-inter-tight bg-background-6/80 border border-white/10 min-h-12 w-full rounded-lg px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-email" className="sr-only">Your Email</label>
                    <input
                      id="faq-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email address"
                      className="text-tagline-2 font-inter-tight bg-background-6/80 border border-white/10 min-h-12 w-full rounded-lg px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-subject" className="sr-only">Subject</label>
                    <input
                      id="faq-subject"
                      name="subject"
                      type="text"
                      placeholder="Subject (e.g. Workshop inquiry)"
                      className="text-tagline-2 font-inter-tight bg-background-6/80 border border-white/10 min-h-12 w-full rounded-lg px-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-message" className="sr-only">Your Questions</label>
                    <textarea
                      id="faq-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What would you like to ask?"
                      className="text-tagline-2 font-inter-tight bg-background-6/80 border border-white/10 w-full rounded-lg p-4 font-normal text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="light" size="md" className="w-full">
                    Submit Question
                  </Button>
                </PlaceholderForm>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
