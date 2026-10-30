import type { Metadata } from "next";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import { PricingCta } from "@/components/sections/pricing/PricingCta";

export const metadata: Metadata = {
  title: "Pricing Plans | Cirsec Cybersecurity",
  description:
    "Explore transparent pricing plans for Cirsec cyber hygiene clinics, active defense reviews, threat advisory, and institutional resilience.",
  openGraph: {
    title: "Pricing Plans | Cirsec Cybersecurity",
    description:
      "Predictable tiers designed to scale with your team. Comprehensive cyber clinics, vulnerability assessments, and threat advisories.",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PricingPlans />
      <PricingCta />
    </div>
  );
}
