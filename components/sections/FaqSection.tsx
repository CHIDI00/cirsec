import { Accordion } from "@/components/ui/Accordion";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";

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
];

export function FaqSection() {
  const accordionData = faqList.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section
      id="faq"
      className="bg-background-2 py-14 md:py-20 lg:py-28 border-t border-stroke-1 transition-colors duration-300"
      aria-labelledby="faq-heading"
    >
      <div className="main-container space-y-12 md:space-y-16">
        {/* Header */}
        <div className="space-y-3 text-center">
          <span className="badge badge-green">FAQ</span>
          <h2
            id="faq-heading"
            className="text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2"
          >
            Your questions, answered
          </h2>
          <p className="text-secondary/70 text-tagline-1 max-w-[500px] mx-auto leading-relaxed">
            Common inquiries about our cybersecurity initiatives, community workshops, and practical defense models.
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
            <div className="bg-white border border-stroke-1 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="space-y-1.5">
                  <h3 className="text-heading-5 font-normal text-secondary">
                    Have another question?
                  </h3>
                  <p className="text-tagline-2 text-secondary/60">
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
                      className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-email" className="sr-only">Your Email</label>
                    <input
                      id="faq-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="faq-message" className="sr-only">Your Question</label>
                    <textarea
                      id="faq-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What would you like to know?"
                      className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-md w-full"
                  >
                    <span>Send Question</span>
                  </button>
                </PlaceholderForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
