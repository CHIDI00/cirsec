import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-background-6 relative overflow-hidden py-12 pb-20 md:py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="main-container relative z-20 space-y-10 md:space-y-16">
        {/* Header */}
        <div className="space-y-2 text-center md:space-y-3">
          <h2
            id="contact-heading"
            className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 font-normal text-white/95"
          >
            <SplitReveal>
              Let&rsquo;s <span className="text-white/40">connect</span>
            </SplitReveal>
          </h2>
          <p className="text-tagline-2 font-inter-tight text-white/60 max-w-[500px] mx-auto">
            <SplitReveal delay={0.2}>
              Ready to elevate your organization&rsquo;s cyber awareness or collaborate on a digital safety initiative? Reach out to our team.
            </SplitReveal>
          </p>
        </div>

        {/* Outer Card Container */}
        <div className="bg-background-6/90 border border-white/10 mx-auto flex max-w-[1240px] flex-col gap-10 rounded-2xl p-6 sm:p-10 lg:flex-row lg:p-12 shadow-2xl relative">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -bottom-10 -left-10 size-72 rounded-full bg-brand-blue/15 blur-[80px]" />

          {/* Left Column: Direct Contact Info Cards */}
          <div className="flex w-full flex-col gap-5 lg:w-[460px] shrink-0">
            {/* Email */}
            <Reveal
              delay={0.1}
              direction="left"
              className="bg-background-5/70 border border-white/5 flex items-start gap-5 rounded-xl p-6 sm:p-7 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-background-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand-cyan border border-brand-cyan/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-sora text-sm font-medium text-white/90">Email Us</h3>
                <a
                  href="mailto:info@cirsec.org"
                  className="font-inter-tight text-tagline-2 text-white/60 hover:text-brand-cyan transition-colors"
                >
                  info@cirsec.org
                </a>
                <p className="text-xs text-white/40 font-inter-tight">General inquiries & partnerships</p>
              </div>
            </Reveal>

            {/* Helpline / Phone */}
            <Reveal
              delay={0.2}
              direction="left"
              className="bg-background-5/70 border border-white/5 flex items-start gap-5 rounded-xl p-6 sm:p-7 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-background-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand-cyan border border-brand-cyan/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5902 20.9046 21.7335 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90348 2.12787 3.62486 2.2165 3.36173C2.30513 3.0986 2.44754 2.85686 2.63463 2.65201C2.82173 2.44716 3.04938 2.28383 3.30303 2.17253C3.55668 2.06123 3.83063 2.00446 4.107 2.005H7.107C7.5953 1.99522 8.06798 2.16708 8.43576 2.48833C8.80353 2.80958 9.03965 3.25686 9.1 3.745C9.21208 4.65487 9.43444 5.54756 9.763 6.405C9.90774 6.77665 9.93888 7.18244 9.85287 7.57147C9.76686 7.96051 9.56738 8.31557 9.278 8.592L8.007 9.863C9.43577 12.3736 11.5264 14.4642 14.037 15.893L15.308 14.622C15.5844 14.3326 15.9395 14.1331 16.3285 14.0471C16.7176 13.9611 17.1234 13.9923 17.495 14.137C18.3524 14.4656 19.2451 14.6879 20.155 14.8C20.6483 14.8609 21.0998 15.1013 21.4225 15.4744C21.7452 15.8475 21.9149 16.3262 21.9 16.82L22 16.92Z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-sora text-sm font-medium text-white/90">Direct Contact</h3>
                <p className="font-inter-tight text-tagline-2 text-white/60">
                  +1 (555) 329-8740
                </p>
                <p className="text-xs text-white/40 font-inter-tight">Mon - Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal
              delay={0.3}
              direction="left"
              className="bg-background-5/70 border border-white/5 flex items-start gap-5 rounded-xl p-6 sm:p-7 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-background-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand-cyan border border-brand-cyan/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="font-sora text-sm font-medium text-white/90">Engagements</h3>
                <p className="font-inter-tight text-tagline-2 text-white/60">
                  Lagos, Nigeria &amp; Global Hybrid Clinics
                </p>
                <p className="text-xs text-white/40 font-inter-tight">Remote workshops &amp; on-site sessions</p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Full Inquiry Form */}
          <div className="flex-1">
            <PlaceholderForm
              actionName="Contact Message"
              successMessage="Message received! A member of the Cirsec team will contact you within 24 hours."
              className="flex flex-col gap-5"
            >
              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="sr-only">Full name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  required
                  placeholder="Email address"
                  className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                />
              </div>

              {/* Company & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company-name" className="sr-only">Organization or Company</label>
                  <input
                    type="text"
                    id="company-name"
                    name="company"
                    placeholder="Organization name"
                    className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject (e.g. Workshop inquiry, Vulnerability assessment)"
                  className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your requirements or how we can assist..."
                  className="font-inter-tight text-tagline-2 w-full bg-background-5/80 border border-white/10 rounded-lg p-4 text-white/90 placeholder:text-white/40 focus:border-brand-cyan/60 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-2">
                <Button type="submit" variant="light" size="lg" className="w-full sm:w-auto">
                  Submit message
                </Button>
              </div>
            </PlaceholderForm>
          </div>
        </div>
      </div>
    </section>
  );
}
