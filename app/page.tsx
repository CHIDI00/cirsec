import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { EmpoweringSection } from "@/components/sections/EmpoweringSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaNewsletterSection } from "@/components/sections/CtaNewsletterSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <ImpactSection />
      <EmpoweringSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaNewsletterSection />
      <CtaBannerSection />
      <ContactSection />
    </div>
  );
}
