import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { VideoTrigger } from "@/components/ui/VideoModal";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-34 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-50"
      aria-labelledby="hero-heading"
    >
      <div className="main-container relative z-10">
        <div className="space-y-[55px]">
          <div className="space-y-10 md:space-y-14">
            {/* Headline and Lead */}
            <div className="space-y-3 text-center">
              <h1
                id="hero-heading"
                className="font-sora text-sora-heading-3 md:text-sora-heading-2 lg:text-sora-heading-1 mx-auto w-full max-w-[1136px] max-md:leading-[110%]"
              >
                <span className="inline-flex flex-wrap items-center justify-center gap-x-2 font-normal text-white/90">
                  Cybersecurity
                  <VideoTrigger
                    url={site.heroVideoUrl}
                    label="Watch how Cirsec builds digital safety"
                    className="group relative my-auto inline-block h-14 w-[102px] cursor-pointer overflow-hidden rounded-full border-4 border-brand-cyan/30 md:h-[66px] transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src="/images/opai-img-96.png"
                      alt="Cirsec in action"
                      fill
                      sizes="102px"
                      className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-6"
                    />
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-7 items-center justify-center rounded-full bg-brand-ink/70 backdrop-blur-xs text-white"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="currentColor"
                        className="translate-x-0.5"
                      >
                        <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                      </svg>
                    </span>
                  </VideoTrigger>
                </span>{" "}
                <span className="text-white/40">
                  built for real <br className="hidden md:block" />
                  human impact
                </span>
              </h1>

              <SplitReveal
                delay={0.3}
                lineDelay={0.1}
                className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[580px] font-normal text-white/60"
              >
                <p>
                  A cybersecurity and technology initiative helping individuals and organisations
                  understand cyber risks and adopt safer digital practices.
                </p>
              </SplitReveal>
            </div>

            {/* Action Buttons */}
            <div
              className="flex items-center justify-center gap-x-6 lg:gap-x-14"
              aria-label="Action buttons"
            >
              <Reveal delay={0.9} duration={0.7}>
                <div className="relative group inline-block">
                  <Button href="/about" className="shadow-[0_4px_24px_rgba(28,80,208,0.5)]">
                    Explore our mission
                  </Button>
                  {/* Decorative expanding rings */}
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 h-[68px] w-[107%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 h-[84px] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 h-[100px] w-[123%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <Reveal delay={1} duration={0.7}>
                <VideoTrigger
                  url={site.demoVideoUrl}
                  label="Play overview video"
                  className="group relative z-20 flex size-[52px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-background-7 transition-all duration-300 hover:scale-105 hover:border-brand-cyan"
                >
                  <span
                    className="flex size-6 items-center justify-center gap-x-1 overflow-hidden"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-4 scale-95 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-100"
                    >
                      <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      className="fill-background-6 h-[18px] w-[14px] shrink-0 -translate-x-[7px] scale-100 transition-all duration-400 ease-out group-hover:translate-x-3 group-hover:scale-75"
                    >
                      <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
                    </svg>
                  </span>
                  {/* Decorative concentric rings */}
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 size-17 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 size-21 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-1/2 left-1/2 size-25 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                    aria-hidden="true"
                  />
                </VideoTrigger>
              </Reveal>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <Reveal
            delay={1.1}
            duration={0.7}
            instant
            className="relative z-10 mx-auto h-[300px] max-w-[1223px] md:h-[400px] lg:h-[573px]"
          >
            <figure className="relative size-full">
              <Image
                src="/images/opai-img-95.png"
                alt="Cirsec digital safety platform interface"
                priority
                fill
                sizes="(max-width: 1280px) 100vw, 1223px"
                className="object-cover md:object-contain"
              />
            </figure>
          </Reveal>
        </div>
      </div>

      {/* Hero Video Background with Brand Hue Tint */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="brand-hue absolute bottom-0 left-0 z-0 size-full object-cover object-center opacity-70"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div
        className="to-background-7 pointer-events-none absolute -bottom-10 left-0 z-10 h-[184px] w-full bg-gradient-to-b from-transparent from-[10.09%] to-[89.05%]"
        aria-hidden="true"
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-12 left-0 z-10 h-[104px] w-full bg-gradient-to-b from-transparent from-[10.09%] to-[69.05%]"
        aria-hidden="true"
      />
      <div
        className="to-background-7 pointer-events-none absolute -bottom-2 left-0 z-10 h-[40px] w-full bg-gradient-to-b from-transparent from-[10.09%] to-[55.05%]"
        aria-hidden="true"
      />

      {/* Bottom blend mode graphic */}
      <div
        className="absolute left-0 z-10 hidden h-[200px] w-full min-[1920px]:-bottom-5 lg:-bottom-22 lg:block xl:-bottom-17 2xl:-bottom-7"
        aria-hidden="true"
      >
        <Image src="/images/blend.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>
    </section>
  );
}
