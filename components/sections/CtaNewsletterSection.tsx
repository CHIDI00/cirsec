import { SplitReveal } from "@/components/ui/SplitReveal";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";
import { Button } from "@/components/ui/Button";

export function CtaNewsletterSection() {
  return (
    <section className="bg-background-6 py-12 md:py-24 lg:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/15 blur-[100px] rounded-full" />

      <div className="main-container relative z-10 space-y-7 text-center md:space-y-10">
        <div className="space-y-2 md:space-y-3">
          <h2 className="font-sora md:text-sora-heading-3 text-sora-heading-4 lg:text-sora-heading-2 font-normal text-white/95">
            <SplitReveal>
              Stay informed with <span className="text-white/40">Cirsec intelligence</span>
            </SplitReveal>
          </h2>
          <p className="text-tagline-2 font-inter-tight text-white/60 max-w-[500px] mx-auto">
            <SplitReveal as="span" delay={0.2}>
              Subscribe to our monthly brief for practical security guides, emerging threat
              advisories, and cyber community updates.
            </SplitReveal>
          </p>
        </div>

        <Reveal delay={0.3} className="max-w-[540px] mx-auto w-full">
          <PlaceholderForm
            actionName="Newsletter Subscription"
            successMessage="Welcome aboard! You have been subscribed to Cirsec intelligence updates."
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <label className="sr-only" htmlFor="cta-newsletter-email">
              Enter your email address
            </label>
            <input
              id="cta-newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="bg-background-5/90 text-tagline-2 border border-white/10 focus:border-brand-cyan/60 placeholder:text-white/40 font-inter-tight w-full rounded-full px-6 py-3 text-white placeholder:font-normal focus:outline-none transition-colors backdrop-blur-md shadow-inner"
            />
            <Button
              type="submit"
              variant="light"
              size="md"
              className="shrink-0 w-full sm:w-auto"
            >
              Subscribe now
            </Button>
          </PlaceholderForm>
          <p className="text-xs text-white/40 font-inter-tight mt-3">
            Zero spam. Unsubscribe at any time. We protect your privacy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
