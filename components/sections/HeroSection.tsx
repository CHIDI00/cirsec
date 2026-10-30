"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const clientLogos = [
  { name: "Partner 1", src: "/images/icons/client-logo-6.svg" },
  { name: "Partner 2", src: "/images/icons/client-logo-7.svg" },
  { name: "Partner 3", src: "/images/icons/client-logo-8.svg" },
  { name: "Partner 4", src: "/images/icons/client-logo-9.svg" },
  { name: "Partner 5", src: "/images/icons/client-logo-10.svg" },
];

export function HeroSection() {
  return (
    <section id="hero" className="hero-section sm:py-[100px] py-[60px] bg-white relative overflow-hidden">
      {/* Hero Card Container */}
      <div className="relative overflow-hidden 2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] max-w-[600px] mx-auto 2xl:px-0 px-6 w-full sm:pt-[150px] pt-[120px] sm:pb-[100px] pb-[50px] rounded-4xl sm:border border-stroke-1 bg-background-2 lg:space-y-[70px] space-y-10 shadow-sm">
        {/* Left Ambient Gradient */}
        <div className="absolute -top-[29%] sm:-top-[50%] left-[7%] sm:-left-[30%] -rotate-[326deg] w-full h-full -z-0 pointer-events-none select-none opacity-85">
          <Image
            src="/images/ns-img-498.png"
            alt="gradient glow"
            width={800}
            height={800}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Right Ambient Gradient */}
        <div className="absolute -top-[65%] -right-[57%] w-full -rotate-[75deg] h-full -z-0 pointer-events-none select-none opacity-85">
          <Image
            src="/images/ns-img-498.png"
            alt="gradient glow"
            width={800}
            height={800}
            className="w-full h-full object-contain rotate-180"
            priority
          />
        </div>

        {/* Center Text Block */}
        <div className="relative z-10">
          <div className="space-y-5 text-center">
            <Reveal delay={0.1}>
              <span className="badge badge-green">
                Cybersecurity &amp; Technology Initiative
              </span>
            </Reveal>

            <div className="space-y-4 lg:max-w-[720px] sm:max-w-[540px] max-w-[420px] mx-auto">
              <Reveal delay={0.2}>
                <h1 className="text-secondary font-medium tracking-tight">
                  Cyber security for a safer tomorrow
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-secondary/70 text-tagline-1 leading-relaxed">
                  Cirsec empowers individuals and organisations through awareness, practical
                  engagement, and modern threat defense to navigate digital technology safely.
                </p>
              </Reveal>
            </div>

            {/* CTA Buttons */}
            <Reveal delay={0.4}>
              <ul className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-8 lg:mt-12">
                <li className="w-full sm:w-auto">
                  <Link
                    href="#contact"
                    className="btn btn-primary btn-xl sm:w-auto w-[90%] font-medium"
                  >
                    <span>Request consultation</span>
                  </Link>
                </li>
                <li className="w-full sm:w-auto">
                  <Link
                    href="#features"
                    className="btn btn-white btn-xl sm:w-auto w-[90%] font-medium"
                  >
                    <span>Explore initiatives</span>
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Hero Interactive Widget Showcase */}
        <div className="relative z-10">
          <div className="main-container">
            <div className="flex sm:flex-row flex-col items-center 2xl:gap-10 lg:gap-8 gap-5">
              {/* Left Column: Data Protection + 5.0 Rating Pill */}
              <div className="space-y-5 2xl:max-w-[389px] sm:max-w-[350px] max-w-full sm:w-full min-[550px]:w-[80%] w-full">
                {/* Data Protection Pill */}
                <div className="flex items-center gap-4 justify-center bg-white 2xl:px-8 px-6 2xl:py-[22px] py-5 rounded-full border border-stroke-4 shadow-sm">
                  <div className="space-y-1">
                    <div className="2xl:size-16 xl:size-14 size-12 mx-auto flex items-center justify-center rounded-full bg-ns-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M5 13.3333V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6V13.3333C27 23.8353 18.0868 27.3146 16.307 27.9047C16.1081 27.9731 15.8919 27.9731 15.693 27.9047C13.9133 27.3146 5 23.8353 5 13.3333Z"
                          stroke="#1A1A1C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-secondary font-medium xl:text-tagline-2 text-tagline-3 text-center">
                      Data Protection
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary font-medium xl:text-heading-5 text-heading-6">
                      Proactive Guard
                    </p>
                    <p className="text-secondary/60 xl:text-tagline-1 text-tagline-2">
                      Zero-trust telemetry
                    </p>
                  </div>
                </div>

                {/* 5.0 Rating Pill */}
                <div className="flex items-center gap-4 justify-between bg-white 2xl:px-8 px-6 2xl:py-[22px] py-5 rounded-full border border-stroke-4 shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-heading-6 sm:text-heading-5 font-bold text-secondary">
                        5.0
                      </p>
                      <span className="flex text-amber-400">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                    </div>
                    <p className="text-secondary/60 text-tagline-2">
                      Trusted community rating
                    </p>
                  </div>
                  <div className="size-10 rounded-full bg-secondary text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Center Column: Central Glowing Dark Security Shield */}
              <div className="flex-1 w-full flex justify-center">
                <div className="relative overflow-hidden w-full max-w-[480px] bg-secondary rounded-[28px] p-7 text-center shadow-xl border border-secondary/20">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Secured proxy protection</span>
                    </div>

                    <div className="relative size-48 sm:size-56 mx-auto my-2">
                      <Image
                        src="/images/ns-img-dark-71.svg"
                        alt="Security Globe"
                        width={240}
                        height={240}
                        className="size-full object-contain"
                      />
                    </div>

                    <div className="space-y-1 text-white">
                      <p className="text-tagline-1 font-medium">Threats Neutralized</p>
                      <p className="text-tagline-3 text-white/60">
                        24/7 Automated Perimeter Surveillance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Security Performance + User Proof */}
              <div className="space-y-5 2xl:max-w-[389px] sm:max-w-[350px] max-w-full sm:w-full min-[550px]:w-[80%] w-full">
                {/* 98.5% Hygiene Metric Pill */}
                <div className="flex items-center gap-4 justify-between bg-white 2xl:px-8 px-6 2xl:py-[22px] py-5 rounded-full border border-stroke-4 shadow-sm">
                  <div className="space-y-1">
                    <p className="text-heading-6 sm:text-heading-5 font-bold text-secondary">
                      98.5%
                    </p>
                    <p className="text-secondary/60 text-tagline-2">
                      Security Hygiene Score
                    </p>
                  </div>
                  <div className="size-11 rounded-full bg-ns-green/30 flex items-center justify-center">
                    <div className="flex items-end gap-1">
                      <div className="w-1 h-3 bg-secondary rounded-full" />
                      <div className="w-1 h-5 bg-secondary rounded-full" />
                      <div className="w-1 h-2 bg-secondary rounded-full" />
                    </div>
                  </div>
                </div>

                {/* 3 Interactive Icons Bar */}
                <div className="flex items-center justify-around bg-white 2xl:px-8 px-6 2xl:py-4 py-3.5 rounded-full border border-stroke-4 shadow-sm">
                  <span className="size-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-xs font-semibold text-secondary">
                    WEB
                  </span>
                  <span className="size-10 rounded-full bg-[#67E8F9] flex items-center justify-center text-xs font-semibold text-secondary">
                    IAM
                  </span>
                  <span className="size-10 rounded-full bg-[#C084FC] flex items-center justify-center text-xs font-semibold text-secondary">
                    SOC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Trust Marquee */}
      <div className="lg:pt-[80px] pt-[40px] relative z-10 bg-white">
        <div className="main-container">
          <div className="space-y-6">
            <p className="text-heading-6 font-normal text-secondary/60 text-center tracking-wide">
              Trusted by industry leaders and community organizations
            </p>
            <div className="relative overflow-hidden py-2">
              <div className="logos-marquee-container">
                <div className="flex items-center gap-12 justify-center py-2">
                  {clientLogos.map((client, idx) => (
                    <figure key={idx} className="min-w-[130px] md:min-w-[170px] opacity-70 hover:opacity-100 transition-opacity">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={160}
                        height={40}
                        className="h-8 md:h-10 w-auto object-contain"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
