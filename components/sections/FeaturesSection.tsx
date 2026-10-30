import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

const features: FeatureCard[] = [
  {
    title: "Web security",
    description: "Safeguard websites, portals, and endpoints from cyber threats, malware, and unauthorized access.",
    image: "/images/ns-img-108.png",
  },
  {
    title: "Software analytics",
    description: "Ensure your applications, codebase, and infrastructure systems are always up-to-date and secure.",
    image: "/images/ns-img-107.png",
  },
  {
    title: "Payment security",
    description: "End-to-end encryption, fraud mitigation, and zero-trust safeguards for digital transactions.",
    image: "/images/ns-img-106.png",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="lg:py-[100px] py-[60px] bg-background-2 transition-colors duration-300">
      <div className="main-container">
        {/* Header */}
        <div className="lg:max-w-[668px] md:max-w-[550px] max-w-[400px] mx-auto space-y-4 mb-10 md:mb-[70px] text-center">
          <span className="badge badge-green">More features</span>
          <h2 className="text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2">
            Managing your risk has never been easier
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="mb-12 sm:mb-16 md:mb-[90px]">
          <div className="grid grid-cols-12 lg:gap-[36px] md:gap-6 gap-y-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-4 group"
              >
                <div className="space-y-4">
                  <div className="border border-stroke-4 bg-white p-2.5 rounded-[20px] shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <figure className="lg:max-w-[402px] md:max-w-full w-full relative overflow-hidden rounded-[14px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={402}
                        height={260}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </figure>
                  </div>
                  <div className="space-y-1.5 pl-2">
                    <h3 className="text-heading-6 sm:text-heading-5 font-normal text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-secondary/70 leading-relaxed text-tagline-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Explore Button */}
        <div className="text-center">
          <Link
            href="#services"
            className="btn btn-secondary btn-md w-[85%] sm:w-auto mx-auto inline-flex items-center justify-center gap-2"
          >
            <span>Explore all</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
