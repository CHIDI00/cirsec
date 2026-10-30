"use client";

import Image from "next/image";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { StarRating } from "@/components/ui/StarRating";

export function ImpactSection() {
  return (
    <section
      className="our-impact-section bg-background-7 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-50 xl:pb-44"
      aria-labelledby="impact-heading"
    >
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-20">
          {/* Section Heading */}
          <div className="text-center">
            <h2
              id="impact-heading"
              className="font-sora lg:text-sora-heading-2 md:text-sora-heading-3 text-sora-heading-4 font-normal max-md:leading-[110%]"
            >
              <SplitReveal as="span" className="text-background-13/90 font-normal inline-block">
                <span>Our Impact</span>
              </SplitReveal>{" "}
              <span className="text-background-13/50">in numbers</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            className="grid grid-cols-12 items-center justify-center gap-x-8 gap-y-8 lg:gap-x-2 xl:gap-x-8"
            aria-label="Impact statistics cards"
          >
            {/* Card One: Practical Engagement */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Reveal
                delay={0.2}
                className="border-stroke-3/18 relative h-[420px] max-w-[409px] rounded-lg border bg-white px-10.5 pt-[27px] pb-10.5 max-md:mx-auto lg:px-5 xl:px-10.5 shadow-sm"
              >
                {/* Image Stack */}
                <div className="relative h-[294px] w-full max-w-[324px]">
                  <div
                    className="pointer-events-none absolute inset-0 z-20 h-[294px] max-w-[409px] bg-gradient-to-b from-transparent from-[10%] to-white to-[90%] md:to-[80%]"
                    aria-hidden="true"
                  />
                  <figure className="border-stroke-1/11 absolute top-[130px] right-[34px] h-[143px] w-[188px] rotate-12 overflow-hidden rounded-[4px] border shadow-md">
                    <Image
                      src="/images/opai-img-99.png"
                      alt="Practical engagement workshop"
                      fill
                      sizes="188px"
                      className="object-cover"
                    />
                  </figure>
                  <figure className="border-stroke-1/11 absolute top-[19px] right-[36px] h-[138px] w-[188px] -rotate-12 overflow-hidden rounded-[4px] border shadow-md">
                    <Image
                      src="/images/opai-img-97.png"
                      alt="Cybersecurity educational clinic"
                      fill
                      sizes="188px"
                      className="object-cover"
                    />
                  </figure>
                  <figure className="border-stroke-1/11 absolute top-[77px] left-[19px] h-[154px] w-[188px] -rotate-8 overflow-hidden rounded-[4px] border shadow-md">
                    <Image
                      src="/images/opai-img-98.png"
                      alt="Community digital safety initiative"
                      fill
                      sizes="188px"
                      className="object-cover"
                    />
                  </figure>
                </div>

                {/* Stat Content */}
                <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2 space-y-[24px] text-center w-full px-4">
                  <span className="flex items-center justify-center text-brand">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current shrink-0"
                      width="35"
                      height="42"
                      viewBox="0 0 35 42"
                      fill="none"
                      strokeWidth="2"
                    >
                      <path d="M10.832 26.875H23.832" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.832 20.375H23.832" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M23.8324 4.125H31.957C32.388 4.125 32.8013 4.29621 33.1061 4.60095C33.4108 4.9057 33.582 5.31902 33.582 5.75V39.875C33.582 40.306 33.4108 40.7193 33.1061 41.024C32.8013 41.3288 32.388 41.5 31.957 41.5H2.70703C2.27605 41.5 1.86273 41.3288 1.55798 41.024C1.25324 40.7193 1.08203 40.306 1.08203 39.875V5.75C1.08203 5.31902 1.25324 4.9057 1.55798 4.60095C1.86273 4.29621 2.27605 4.125 2.70703 4.125H10.8316"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.20703 10.625V9C9.20703 6.84512 10.0631 4.77849 11.5868 3.25476C13.1105 1.73102 15.1771 0.875 17.332 0.875C19.4869 0.875 21.5535 1.73102 23.0773 3.25476C24.601 4.77849 25.457 6.84512 25.457 9V10.625H9.20703Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black">
                      <CountUp value="500" suffix="+" />
                    </h3>
                    <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                      Organisations & communities reached
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Card Two: Client & Community Reviews */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Reveal
                delay={0.3}
                className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] overflow-hidden rounded-lg border bg-white px-10.5 pt-[57px] pb-10.5 max-md:mx-auto shadow-sm"
              >
                {/* Floating Testimonial Mini-cards */}
                <div className="relative md:-left-1 lg:-left-5 xl:left-4" aria-hidden="true">
                  <div className="border-stroke-1/11 bg-background-6 absolute top-[35px] flex h-[200px] w-[188px] -rotate-9 flex-col items-center justify-between rounded-sm border p-4 shadow-md">
                    <div className="flex flex-col items-center gap-y-3">
                      <StarRating count={5} className="size-2.5 fill-accent-yellow" />
                      <blockquote className="font-inter-tight max-w-[156px] text-center text-[9px] leading-[150%] font-normal text-white/70">
                        &ldquo;Cirsec made cybersecurity relatable and actionable for our whole team.&rdquo;
                      </blockquote>
                    </div>
                    <div className="text-center">
                      <p className="font-inter-tight text-tagline-4 font-normal text-white">Adewale B.</p>
                      <p className="font-inter-tight text-[10px] text-white/60">Operations Lead</p>
                    </div>
                  </div>

                  <div className="border-stroke-1/11 bg-background-6 absolute top-[26px] left-[38px] flex h-[200px] w-[188px] flex-col items-center justify-between rounded-sm border p-4 shadow-md">
                    <div className="flex flex-col items-center gap-y-3">
                      <StarRating count={5} className="size-2.5 fill-accent-yellow" />
                      <blockquote className="font-inter-tight max-w-[156px] text-center text-[9px] leading-[150%] font-normal text-white/70">
                        &ldquo;The practical sessions helped us eliminate common digital hygiene mistakes.&rdquo;
                      </blockquote>
                    </div>
                    <div className="text-center">
                      <p className="font-inter-tight text-tagline-4 font-normal text-white">Chioma N.</p>
                      <p className="font-inter-tight text-[10px] text-white/60">Fintech Product Manager</p>
                    </div>
                  </div>

                  <div className="border-stroke-1/11 bg-background-6 absolute top-[21px] left-[96px] flex h-[200px] w-[188px] rotate-15 flex-col items-center justify-between rounded-sm border p-4 shadow-md">
                    <div className="flex flex-col items-center gap-y-3">
                      <StarRating count={5} className="size-2.5 fill-accent-yellow" />
                      <blockquote className="font-inter-tight max-w-[156px] text-center text-[9px] leading-[150%] font-normal text-white/70">
                        &ldquo;Practical, engaging, and indispensable for any modern team.&rdquo;
                      </blockquote>
                    </div>
                    <div className="text-center">
                      <p className="font-inter-tight text-tagline-4 font-normal text-white">Marcus T.</p>
                      <p className="font-inter-tight text-[10px] text-white/60">Managing Director</p>
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-20 h-[324px] w-full bg-gradient-to-b from-transparent from-[10%] to-white to-[60.6%]"
                  aria-hidden="true"
                />

                <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2 w-full px-4">
                  <div className="flex flex-col items-center justify-center gap-y-4">
                    <span className="flex items-center justify-center gap-x-1 text-brand">
                      <StarRating count={5} className="size-4 fill-brand" />
                    </span>
                    <div className="text-center">
                      <h3 className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black">
                        <CountUp value="99" suffix="%" />
                      </h3>
                      <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                        Positive feedback & adoption
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Card Three: Practical Workflow */}
            <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-auto">
              <Reveal
                delay={0.4}
                className="border-stroke-3/18 relative h-[420px] w-full max-w-[409px] rounded-lg border bg-white p-4 max-md:mx-auto shadow-sm"
              >
                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-20 h-[334px] w-full bg-gradient-to-b from-transparent from-[10%] to-white to-[99%]"
                  aria-hidden="true"
                />

                {/* Workflow diagram pills */}
                <div className="features-integration-pill relative top-[62px] mx-auto h-21 w-full max-w-[324px]">
                  {/* Left Pill: Learn */}
                  <div className="absolute top-1/2 left-0 h-7 -translate-y-1/2">
                    <div className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1.5 rounded-full border px-[14px] py-[5px]">
                      <span className="bg-brand-cyan h-2 w-2 rounded-full" />
                      <span className="text-tagline-4 font-inter-tight font-normal text-white/80">
                        Learn
                      </span>
                    </div>
                  </div>

                  {/* Center Top: Engage */}
                  <div className="absolute left-1/2 h-7 -translate-x-1/2">
                    <div className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1.5 rounded-full border px-[14px] py-[5px]">
                      <span className="bg-brand h-2 w-2 rounded-full" />
                      <span className="text-tagline-4 font-inter-tight font-normal text-white/80">
                        Engage
                      </span>
                    </div>
                  </div>

                  {/* Center Bottom: Practice */}
                  <div className="absolute bottom-0 left-1/2 h-7 -translate-x-1/2">
                    <div className="border-stroke-1/11 bg-background-5 flex w-24 items-center justify-start gap-x-1.5 rounded-full border px-[14px] py-1.5">
                      <span className="bg-brand h-2 w-2 rounded-full" />
                      <span className="text-tagline-4 font-inter-tight font-normal text-white/80">
                        Practice
                      </span>
                    </div>
                  </div>

                  {/* Right Pill: Secure */}
                  <div className="absolute top-1/2 right-0 h-7 -translate-y-1/2">
                    <div className="border-stroke-1/11 bg-background-5 flex items-center justify-center gap-x-1.5 rounded-full border px-[14px] py-[5px]">
                      <span className="bg-accent-green h-2 w-2 rounded-full" />
                      <span className="text-tagline-4 font-inter-tight font-normal text-white/80">
                        Secure
                      </span>
                    </div>
                  </div>

                  {/* Connectors */}
                  <svg
                    className="absolute top-[20px] left-[65px] h-6 w-[52px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="25"
                    viewBox="0 0 59 25"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.832031 24.5H26.9087C34.1358 24.5 40.9781 21.2433 45.5355 15.6342L57.832 0.5"
                      stroke="#1C50D0"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <svg
                    className="absolute top-[43px] left-[65px] h-6 w-[57px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="32"
                    viewBox="0 0 59 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0.332031 0.5H24.87C32.9592 0.5 40.5041 4.57491 44.9399 11.3394L57.832 31"
                      stroke="#1C50D0"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <svg
                    className="absolute top-[19px] right-[69px] h-[55px] w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="56"
                    viewBox="0 0 59 56"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M58.332 24.5H32.2553C25.0282 24.5 18.1859 21.2433 13.6286 15.6342L1.33203 0.5"
                      stroke="#1C50D0"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M58.832 24.5H34.2941C26.2049 24.5 18.66 28.5749 14.2242 35.3394L1.33203 55"
                      stroke="#1C50D0"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Stat Content */}
                <div className="absolute bottom-10.5 left-1/2 z-30 -translate-x-1/2 w-full px-4">
                  <div className="flex flex-col items-center justify-center gap-y-4">
                    <span className="flex size-[48px] items-center justify-center text-brand">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="44"
                        viewBox="0 0 38 44"
                        fill="none"
                        className="stroke-current"
                        strokeWidth="2"
                      >
                        <path
                          d="M18.6641 42.875C28.5362 42.875 36.5391 34.8721 36.5391 25C36.5391 15.1279 28.5362 7.125 18.6641 7.125C8.79197 7.125 0.789062 15.1279 0.789062 25C0.789062 34.8721 8.79197 42.875 18.6641 42.875Z"
                          strokeMiterlimit="10"
                        />
                        <path d="M18.6641 24.9965L26.7074 16.9531" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.7891 0.625H23.5391" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                    <div className="text-center">
                      <h3 className="font-sora text-sora-heading-3 flex items-center justify-center font-normal text-black">
                        <CountUp value="3" suffix="M+" />
                      </h3>
                      <p className="font-inter-tight text-tagline-2 text-background-13/60 font-normal">
                        Safe digital hours fostered
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
