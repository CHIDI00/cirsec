import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ServicesWhyChoose } from "@/components/sections/services/ServicesWhyChoose";
import { ServicesCta } from "@/components/sections/services/ServicesCta";

export const metadata: Metadata = {
  title: "Services & Cyber Defense Solutions | Cirsec",
  description:
    "Explore Cirsec's comprehensive cybersecurity services: practical hygiene clinics, vulnerability assessments, phishing drills, cloud security, and institutional incident response.",
  openGraph: {
    title: "Services & Cyber Defense Solutions | Cirsec",
    description:
      "Actionable cybersecurity built for real human impact. Explore our clinics, threat defense, and organizational advisory.",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-6">
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyChoose />
      <ServicesCta />
    </div>
  );
}
