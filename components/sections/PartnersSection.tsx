"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
  alt: string;
}

const partners: Partner[] = [
  {
    name: "Antriksh Technology",
    logo: "/images/partners/antriksh.png",
    width: 712,
    height: 141,
    alt: "Antriksh Technology logo",
  },
  {
    name: "SolarWinds",
    logo: "/images/partners/solarwind.png",
    width: 812,
    height: 131,
    alt: "SolarWinds logo",
  },
  {
    name: "KnowWeb",
    logo: "/images/partners/knowweb.png",
    width: 591,
    height: 112,
    alt: "KnowWeb logo",
  },
];

export function PartnersSection() {
  // Repeat the 3 partner logos to form a continuous infinite marquee
  const repeatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <section
      className="bg-background-7 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 lg:pb-20 relative z-10 overflow-hidden"
      aria-label="Trusted by industry leaders"
    >
      <div className="main-container">
        <div className="space-y-5 lg:space-y-8">
          {/* Header text matching the template and screenshot */}
          <p className="font-inter-tight text-tagline-2 sm:text-heading-6 lg:text-heading-5 font-normal text-black/80 text-center tracking-normal">
            Trusted by industry leaders
          </p>

          {/* Marquee with left/right fade gradients, NO boxes, NO cards */}
          <div className="relative">
            {/* Left fade gradient */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-7 to-transparent z-20"
              aria-hidden="true"
            />
            {/* Right fade gradient */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-7 to-transparent z-20"
              aria-hidden="true"
            />

            {/* Continuous Marquee */}
            <div
              className="marquee py-2.5"
              role="region"
              aria-label="Partners marquee"
              style={{
                ["--marquee-gap" as string]: "56px",
                ["--marquee-speed" as string]: "35s",
              }}
            >
              {/* Loop track 1 */}
              <div className="marquee-track items-center">
                {repeatedPartners.map((partner, idx) => (
                  <figure
                    key={`track1-${partner.name}-${idx}`}
                    className="min-w-[140px] md:min-w-[180px] lg:min-w-[200px] flex items-center justify-center px-4"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="h-7 sm:h-8 lg:h-9 w-auto max-w-[180px] object-contain filter grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer"
                    />
                  </figure>
                ))}
              </div>

              {/* Loop track 2 (seamless continuation) */}
              <div className="marquee-track items-center" aria-hidden="true">
                {repeatedPartners.map((partner, idx) => (
                  <figure
                    key={`track2-${partner.name}-${idx}`}
                    className="min-w-[140px] md:min-w-[180px] lg:min-w-[200px] flex items-center justify-center px-4"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="h-7 sm:h-8 lg:h-9 w-auto max-w-[180px] object-contain filter grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
