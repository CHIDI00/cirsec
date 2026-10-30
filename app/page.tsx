import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FeatureStatsSection } from "@/components/sections/FeatureStatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero with interactive widgets & partner logo marquee */}
      <HeroSection />

      {/* 2. Core Pillars / Features (Web security, Software analytics, Payment security) */}
      <FeaturesSection />

      {/* 3. Performance / Why Cirsec (99%, 100%, 5X counters) */}
      <FeatureStatsSection />

      {/* 4. Enterprise Services (Exposure audits, Incident drills, Security culture) */}
      <ServicesSection />

      {/* 5. Tool Integrations (Zapier, Slack, Shopify, Figma, Snapchat, TikTok) */}
      <IntegrationsSection />

      {/* 6. Testimonials (3D Flipping Cards with Trustpilot ratings) */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Call to Action with glowing gradient background */}
      <CtaSection />

      {/* 9. Direct Advisory & Contact Form */}
      <ContactSection />
    </div>
  );
}
