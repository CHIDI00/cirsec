import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutVisionMission } from "@/components/sections/about/AboutVisionMission";
import { AboutWhyChoose } from "@/components/sections/about/AboutWhyChoose";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutFaq } from "@/components/sections/about/AboutFaq";
import { AboutCta } from "@/components/sections/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us — Cirsec Cybersecurity & Technology Initiative",
  description:
    "Learn about Cirsec's mission, founding vision, and community initiatives designed to make cybersecurity accessible, practical, and actionable for all organizations.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background-6">
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutWhyChoose />
      {/* <AboutTeam /> */}
      <AboutFaq />
      <AboutCta />
    </div>
  );
}
