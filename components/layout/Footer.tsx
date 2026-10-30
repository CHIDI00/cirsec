import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CurrentYear, ExpandLine } from "@/components/ui/FooterBits";
import { Logo } from "@/components/ui/Logo";
import { PlaceholderForm } from "@/components/ui/PlaceholderForm";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { footerLinks, site } from "@/lib/site";
import footerGlow from "@/assets/images/gradient/opai-14.png";

const socials = [
  {
    label: "Facebook",
    size: 20,
    paths: [
      "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z",
      "M13.75 6.25H12.25C11.6533 6.25 11.081 6.48705 10.659 6.90901C10.2371 7.33097 10 7.90326 10 8.5V19",
      "M7 11.5H13",
    ],
  },
  {
    label: "Instagram",
    size: 20,
    paths: [
      "M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z",
      "M14.125 1.375H5.875C3.38972 1.375 1.375 3.38972 1.375 5.875V14.125C1.375 16.6103 3.38972 18.625 5.875 18.625H14.125C16.6103 18.625 18.625 16.6103 18.625 14.125V5.875C18.625 3.38972 16.6103 1.375 14.125 1.375Z",
    ],
  },
  {
    label: "X",
    size: 17,
    paths: ["M15.2955 1L9.19287 7.29329M7.11364 9.4375L0.75 16M0.75 1L12.1136 16H15.75L4.38636 1H0.75Z"],
  },
  {
    label: "LinkedIn",
    size: 18,
    paths: [
      "M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z",
      "M8.25 7.5V13.5",
      "M5.25 7.5V13.5",
      "M8.25 10.125C8.25 9.42881 8.52656 8.76113 9.01884 8.26884C9.51113 7.77656 10.1788 7.5 10.875 7.5C11.5712 7.5 12.2389 7.77656 12.7312 8.26884C13.2234 8.76113 13.5 9.42881 13.5 10.125V13.5",
    ],
  },
  {
    label: "YouTube",
    size: 24,
    paths: [
      "M22.5406 6.42C22.4218 5.94541 22.1799 5.51057 21.8392 5.15941C21.4986 4.80824 21.0713 4.55318 20.6006 4.42C18.8806 4 12.0006 4 12.0006 4C12.0006 4 5.12057 4 3.40057 4.46C2.92982 4.59318 2.50255 4.84824 2.16192 5.19941C1.82129 5.55057 1.57936 5.98541 1.46057 6.46C1.14579 8.20556 0.991808 9.97631 1.00057 11.75C0.989351 13.537 1.14334 15.3213 1.46057 17.08C1.59153 17.5398 1.83888 17.9581 2.17872 18.2945C2.51855 18.6308 2.93939 18.8738 3.40057 19C5.12057 19.46 12.0006 19.46 12.0006 19.46C12.0006 19.46 18.8806 19.46 20.6006 19C21.0713 18.8668 21.4986 18.6118 21.8392 18.2606C22.1799 17.9094 22.4218 17.4746 22.5406 17C22.8529 15.2676 23.0069 13.5103 23.0006 11.75C23.0118 9.96295 22.8578 8.1787 22.5406 6.42Z",
      "M9.75 15.0166L15.5 11.7466L9.75 8.47656V15.0166Z",
    ],
  },
];

const linkClass =
  "text-tagline-3 inline-block font-normal text-white/50 transition-colors duration-500 hover:text-white";

export function Footer() {
  return (
    <footer className="bg-background-6 relative z-20 overflow-hidden pt-10 pb-[30px] md:pt-[80px]">
      <div className="main-container relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <div className="text-center lg:text-left">
            <SplitReveal lineDelay={0.7} className="text-background-11 text-sora-heading-5 font-normal tracking-[-0.72px]">
              <p>Join our newsletter</p>
            </SplitReveal>
            <SplitReveal lineDelay={0.1} duration={0.8} className="text-tagline-2 font-normal text-white/50">
              <p>Cybersecurity awareness tips and updates from Cirsec, straight to your inbox.</p>
            </SplitReveal>
          </div>

          <div className="space-y-3 text-center max-md:w-full lg:text-left">
            <Reveal delay={0.1}>
              <PlaceholderForm className="flex flex-col items-center gap-2 md:flex-row">
                <div className="w-full md:w-[260px]">
                  <label htmlFor="footer-email" className="sr-only">
                    Enter your email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="border-stroke-3/30 bg-background-6 placeholder:text-background-8 placeholder:text-tagline-3 text-background-8 text-tagline-2 focus:ring-stroke-3/50 mx-auto block h-10 w-full rounded-full border px-4 py-3 font-normal placeholder:font-normal focus:ring-[0.5px] focus:outline-none max-sm:w-[85%] md:mx-0"
                  />
                </div>
                <Button type="submit" className="max-h-10! w-full md:w-auto">
                  Subscribe
                </Button>
              </PlaceholderForm>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-tagline-4 font-normal text-white/60">
                By subscribing you agree to our{" "}
                <Link href="/privacy" className="font-medium text-white hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="py-7 md:py-12 lg:py-16">
          <ExpandLine className="bg-stroke-1/10 relative h-px w-full" />
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-6">
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={0.1} className="space-y-8">
              <Logo variant="full" className="-ml-1 h-[40px]" />
              <div className="space-y-6">
                <div>
                  <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Address:</p>
                  <p className="text-tagline-3 font-normal text-white/50">{site.address}</p>
                </div>
                <div>
                  <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Contact:</p>
                  <a href={site.phoneHref} className={`${linkClass} hover:underline`}>
                    {site.phone}
                  </a>
                  <br />
                  <a href={`mailto:${site.email}`} className={`${linkClass} hover:underline`}>
                    {site.email}
                  </a>
                </div>
              </div>
              <ul className="flex items-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href="#"
                      className="inline-block text-[#CED7DE] transition-transform duration-500 hover:-translate-y-1"
                    >
                      <span className="sr-only">{s.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={s.size}
                        height={s.size}
                        viewBox={`0 0 ${s.size} ${s.size}`}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {s.paths.map((d) => (
                          <path key={d} d={d} />
                        ))}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-8 lg:col-span-8">
            {Object.entries(footerLinks).map(([title, links], i) => (
              <div key={title} className="col-span-12 sm:col-span-4">
                <Reveal delay={0.2 + i * 0.1} className="space-y-2 text-left lg:text-right">
                  <p className="text-tagline-2 font-semibold text-white/90">{title}</p>
                  <ul>
                    {links.map((l) => (
                      <li key={l.label} className="py-2">
                        <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="py-12 lg:py-16">
          <p
            aria-hidden="true"
            className="text-it-heading-4 font-inter-tight footer-title text-center font-bold tracking-[22.48px] text-nowrap sm:text-[60px] sm:leading-[120px] sm:tracking-[27.48px] md:tracking-[45.48px] lg:pl-5 lg:text-[80px] lg:tracking-[64.48px] xl:pl-10 xl:text-[112px] xl:leading-[168px] 2xl:tracking-[75.48px]"
          >
            CIRSEC
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          start="top 98%"
          className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5"
        >
          <p className="text-tagline-4 font-normal text-white/50">
            &copy; <CurrentYear /> Cirsec. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
              ["Cookie Settings", "/cookies"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-inter-tight text-tagline-4 font-normal text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal
        delay={0.4}
        duration={1}
        direction="right"
        offset={100}
        className="pointer-events-none absolute -right-[37%] -bottom-[20%] -z-0 h-[500px] w-[500px] select-none sm:-right-[21%] sm:-bottom-[28%] md:-bottom-[24%] lg:-right-[14%] lg:-bottom-[27%] xl:-right-[34%] xl:-bottom-[94%] xl:h-[1600px] xl:w-[1600px]"
      >
        <Image
          src={footerGlow}
          alt=""
          fill
          sizes="(min-width: 1280px) 1600px, 500px"
          className="brand-hue object-contain"
        />
      </Reveal>
    </footer>
  );
}
