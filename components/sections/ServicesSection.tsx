import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="lg:py-[100px] py-[60px] bg-background-2 transition-colors duration-300">
      <div className="main-container">
        {/* Section Header */}
        <div className="space-y-4 mb-10 md:mb-[70px] text-center">
          <span className="badge badge-green">Services</span>
          <h2 className="text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2">
            Enterprise-grade security &amp; intelligence
          </h2>
        </div>

        <div className="space-y-[42px]">
          {/* Card 1: Risk Assessment & Audits */}
          <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-white shadow-sm">
            <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
              <div className="col-span-12 md:col-span-6">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="lg:text-heading-3 text-heading-5 text-secondary font-normal">
                      Risk Assessment &amp; Audits
                    </h3>
                    <p className="max-w-[420px] w-full lg:text-tagline-1 text-tagline-2 text-secondary/70 leading-relaxed">
                      Utilize comprehensive data security frameworks to effectively safeguard sensitive
                      information from unauthorized access, zero-day vectors, and data breaches.
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#contact"
                      className="btn btn-primary btn-md inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>Read more</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center md:justify-end lg:gap-8 gap-5">
                  <figure className="xl:max-w-[233px] max-w-[200px] w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/ns-img-100.png"
                      alt="Threat Timeline"
                      width={233}
                      height={280}
                      className="size-full object-cover"
                    />
                  </figure>
                  <figure className="xl:max-w-[350px] max-w-[200px] w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/ns-img-101.png"
                      alt="Security Control Card"
                      width={350}
                      height={280}
                      className="size-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Machine learning & AI Threat Simulation */}
          <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-white shadow-sm">
            <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
              <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                <div className="flex items-center md:gap-8 gap-5">
                  <figure className="xl:max-w-[326px] max-w-[200px] max-h-[317px] h-full w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/ns-img-102.png"
                      alt="Telemetry Analytics"
                      width={326}
                      height={317}
                      className="size-full object-cover"
                    />
                  </figure>
                  <figure className="xl:max-w-[255px] max-w-[200px] max-h-[178px] h-full w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/ns-img-103.png"
                      alt="Threat Balance"
                      width={255}
                      height={178}
                      className="size-full object-cover"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="lg:text-heading-3 text-heading-5 text-secondary font-normal">
                      Threat Intelligence &amp; AI
                    </h3>
                    <p className="max-w-[490px] w-full lg:text-tagline-1 text-tagline-2 text-secondary/70 leading-relaxed">
                      Utilize advanced predictive analytics to proactively identify potential threats
                      before they escalate by analyzing telemetry patterns, anomalous logins, and system trends.
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#contact"
                      className="btn btn-white btn-md inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <span>View more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Security Culture & Workforce Resilience */}
          <div className="lg:p-[42px] p-5 md:p-8 rounded-[20px] border border-stroke-1 bg-white shadow-sm">
            <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-14 gap-y-8 justify-between">
              <div className="col-span-12 md:col-span-6">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="lg:text-heading-3 text-heading-5 text-secondary font-normal">
                      Workforce Security Resilience
                    </h3>
                    <p className="max-w-[400px] w-full lg:text-tagline-1 text-tagline-2 text-secondary/70 leading-relaxed">
                      Continuously monitor for organizational vulnerabilities and implement proactive measures
                      to prevent cyber attacks before they can occur.
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#contact"
                      className="btn btn-white btn-md inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:btn-primary"
                    >
                      <span>View more</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-start sm:flex-row flex-col md:gap-8 gap-5">
                  <figure className="xl:max-w-[350px] sm:max-w-[200px] max-h-[345px] h-full w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src="/images/ns-img-104.png"
                      alt="Workforce Hygiene"
                      width={350}
                      height={345}
                      className="size-full sm:object-cover"
                    />
                  </figure>
                  <div className="space-y-8">
                    <figure className="xl:max-w-[286px] sm:max-w-[200px] max-h-[190px] h-full w-full rounded-2xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/ns-img-105.png"
                        alt="Security Compliance"
                        width={286}
                        height={190}
                        className="size-full sm:object-cover"
                      />
                    </figure>
                    <div>
                      <div className="space-y-4">
                        <div className="flex sm:-space-x-3.5 -space-x-2 justify-center sm:justify-start">
                          <Image
                            className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white bg-ns-green"
                            src="/images/ns-avatar-1.png"
                            alt="Avatar 1"
                            width={44}
                            height={44}
                          />
                          <Image
                            className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white bg-ns-green"
                            src="/images/ns-avatar-2.png"
                            alt="Avatar 2"
                            width={44}
                            height={44}
                          />
                          <Image
                            className="inline-block sm:size-11 size-7 shrink-0 rounded-full relative z-0 ring-4 ring-white bg-ns-green"
                            src="/images/ns-avatar-3.png"
                            alt="Avatar 3"
                            width={44}
                            height={44}
                          />
                          <div className="inline-flex items-center relative z-10 justify-center sm:size-11 size-7 shrink-0 bg-ns-green text-secondary rounded-full ring-4 ring-white text-tagline-3 font-semibold">
                            99+
                          </div>
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="font-medium text-secondary">
                            Trusted by 20k+
                          </p>
                          <p className="text-tagline-2 text-secondary/60 font-normal">
                            Learners &amp; leaders across institutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
