import Image from "next/image";
import Link from "next/link";

interface ToolIntegration {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const integrations: ToolIntegration[] = [
  {
    name: "Zapier",
    category: "Workflow Automation",
    icon: "/images/icons/zapier.svg",
    href: "#contact",
  },
  {
    name: "Slack",
    category: "Incident Alerting & Comms",
    icon: "/images/icons/slack.svg",
    href: "#contact",
  },
  {
    name: "Shopify",
    category: "Storefront & Fraud Shield",
    icon: "/images/icons/shopify.svg",
    href: "#contact",
  },
  {
    name: "Figma",
    category: "Secure UI Guidelines",
    icon: "/images/icons/figma.svg",
    href: "#contact",
  },
  {
    name: "Snapchat",
    category: "Youth Awareness Media",
    icon: "/images/icons/snapchat.svg",
    href: "#contact",
  },
  {
    name: "TikTok",
    category: "Viral Cyber Awareness",
    icon: "/images/icons/tiktok.svg",
    href: "#contact",
  },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-white transition-colors duration-300">
      <div className="main-container">
        <div className="relative overflow-hidden z-10 rounded-[25px] border border-stroke-1 bg-background-2 sm:py-[100px] py-[50px] shadow-sm">
          {/* Subtle Ambient Glow */}
          <div className="absolute -z-10 -top-[200px] -left-[200px] size-[700px] pointer-events-none select-none opacity-40">
            <Image
              src="/images/ns-img-496.png"
              alt="ambient glow"
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section Header */}
          <div className="space-y-4 text-center sm:mb-[70px] mb-[50px]">
            <span className="badge badge-green">Integrations</span>
            <div className="space-y-3">
              <h2 className="sm:max-w-full max-w-[320px] sm:mx-0 mx-auto text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2">
                Link up with your favorite tools
              </h2>
              <p className="sm:max-w-[560px] max-w-[320px] mx-auto w-full text-secondary/70 leading-relaxed text-tagline-1">
                Seamlessly pipe real-time threat signals, compliance alerts, and training workflows directly into your team&apos;s daily operational stack.
              </p>
            </div>
          </div>

          {/* Integrations Grid */}
          <div>
            <div className="lg:max-w-[852px] md:max-w-[700px] mx-auto grid grid-cols-12 lg:gap-8 md:gap-6 gap-y-6 lg:px-0 px-6">
              {integrations.map((item, idx) => (
                <div key={idx} className="col-span-12 md:col-span-6 group">
                  <Link href={item.href}>
                    <div className="cursor-pointer sm:p-7 p-4 sm:rounded-2xl rounded-xl bg-white border border-stroke-1 shadow-sm flex items-center justify-between gap-4 group-hover:scale-[102%] group-hover:shadow-md transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-4">
                        <figure className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 shrink-0">
                          <span className="size-12 sm:size-14 rounded-xl bg-background-2 flex items-center justify-center p-2.5 border border-stroke-4">
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={36}
                              height={36}
                              className="size-7 sm:size-9 object-contain"
                            />
                          </span>
                        </figure>

                        <div className="transform transition-transform duration-300 group-hover:translate-x-1">
                          <p className="lg:text-heading-5 text-heading-6 font-medium text-secondary">
                            {item.name}
                          </p>
                          <p className="text-tagline-2 text-secondary/60">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* Animated Arrow Circle */}
                      <div className="sm:size-12 size-10 rounded-full bg-background-4 group-hover:bg-secondary flex items-center justify-center transition-all duration-300 shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-5 transition-transform duration-300 -rotate-45 group-hover:rotate-0 stroke-secondary group-hover:stroke-white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5L19 12L12 19"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
