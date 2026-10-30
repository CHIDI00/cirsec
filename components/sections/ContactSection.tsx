import { PlaceholderForm } from "@/components/ui/PlaceholderForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white relative overflow-hidden py-14 pb-24 md:py-20 lg:py-28 border-t border-stroke-1 transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="main-container relative z-20 space-y-10 md:space-y-14">
        {/* Header */}
        <div className="space-y-3 text-center">
          <span className="badge badge-green">Contact</span>
          <h2
            id="contact-heading"
            className="text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2"
          >
            Let&rsquo;s connect
          </h2>
          <p className="text-tagline-1 text-secondary/70 max-w-[500px] mx-auto leading-relaxed">
            Ready to elevate your organization&rsquo;s cyber awareness or collaborate on a digital safety initiative? Reach out to our team.
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="bg-background-2 border border-stroke-1 mx-auto flex max-w-[1200px] flex-col gap-10 rounded-3xl p-6 sm:p-10 lg:flex-row lg:p-12 shadow-sm relative">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="flex w-full flex-col gap-4 lg:w-[420px] shrink-0">
            {/* Email */}
            <div className="bg-white border border-stroke-1 flex items-start gap-4 rounded-2xl p-6 shadow-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 border border-primary-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-tagline-1 font-medium text-secondary">Email Us</h3>
                <a
                  href="mailto:info@cirsec.org"
                  className="text-tagline-2 text-primary-600 hover:underline block"
                >
                  info@cirsec.org
                </a>
                <p className="text-tagline-3 text-secondary/60">General inquiries &amp; partnerships</p>
              </div>
            </div>

            {/* Helpline / Advisory */}
            <div className="bg-white border border-stroke-1 flex items-start gap-4 rounded-2xl p-6 shadow-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 border border-primary-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-tagline-1 font-medium text-secondary">Consultation Helpline</h3>
                <p className="text-tagline-2 text-secondary font-mono">+1 (800) CIR-SEC1</p>
                <p className="text-tagline-3 text-secondary/60">Monday &ndash; Friday, 9am &ndash; 6pm</p>
              </div>
            </div>

            {/* Office / Community HQ */}
            <div className="bg-white border border-stroke-1 flex items-start gap-4 rounded-2xl p-6 shadow-sm">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 border border-primary-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-tagline-1 font-medium text-secondary">Initiative Hub</h3>
                <p className="text-tagline-2 text-secondary/80">Cybersecurity &amp; Technology Initiative</p>
                <p className="text-tagline-3 text-secondary/60">Global Virtual &amp; Regional Clinics</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-stroke-1 flex-1 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-heading-5 font-normal text-secondary">
                  Send us a message
                </h3>
                <p className="text-tagline-2 text-secondary/60">
                  Fill in the details below and an advisory specialist will reach out within 24 hours.
                </p>
              </div>

              <PlaceholderForm
                actionName="Contact Form"
                successMessage="Message received! We will get in touch shortly."
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-tagline-3 text-secondary font-medium mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-tagline-3 text-secondary font-medium mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@organization.com"
                      className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-org" className="text-tagline-3 text-secondary font-medium mb-1.5 block">
                    Organization / Company
                  </label>
                  <input
                    id="contact-org"
                    name="organization"
                    type="text"
                    placeholder="Acme Inc. / School District"
                    className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-tagline-3 text-secondary font-medium mb-1.5 block">
                    How can we help? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your team size, security objectives, or engagement interest..."
                    className="w-full rounded-xl border border-stroke-1 bg-background-2 px-4 py-3 text-tagline-2 text-secondary placeholder:text-secondary/40 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-xl w-full sm:w-auto shadow-md"
                >
                  <span>Submit Consultation Request</span>
                </button>
              </PlaceholderForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
