"use client";

import { useState } from "react";
import Image from "next/image";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-[50px] lg:py-[100px] bg-white transition-colors duration-300">
      <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[350px] max-w-[320px] z-10 mx-auto lg:p-[100px] sm:p-20 min-[475px]:p-14 py-12 px-6 bg-secondary dark:bg-background-6 sm:rounded-[32px] rounded-[20px] relative overflow-hidden shadow-2xl border border-white/5">
        {/* Glow Orb Background */}
        <div className="absolute -z-10 sm:-top-[35%] -top-[100%] -left-[7%] size-[850px] rotate-[275deg] pointer-events-none select-none opacity-60">
          <Image
            src="/images/ns-img-499.png"
            alt="cta background glow"
            width={850}
            height={850}
            className="w-[60%] sm:w-full object-contain"
          />
        </div>

        {/* Header */}
        <div className="text-center space-y-5 sm:mb-14 mb-10">
          <span className="badge badge-blur text-ns-yellow border border-ns-yellow/30">
            Get Started
          </span>
          <div className="space-y-3">
            <h2 className="text-white font-normal text-heading-4 sm:text-heading-2">
              Partner with Cirsec for resilient cybersecurity
            </h2>
            <p className="text-accent/70 max-w-[580px] mx-auto text-tagline-1 leading-relaxed">
              No hidden barriers. No confusing jargon. Just actionable training, threat simulation, and practical cyber hygiene built for you.
            </p>
          </div>
        </div>

        {/* Email Capture / Action Form */}
        <div>
          {submitted ? (
            <div className="p-4 rounded-full bg-primary-600/20 border border-primary-500 text-center max-w-[450px] mx-auto text-white">
              Thank you! Our cybersecurity advisory team will reach out shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="md:max-w-[585px] max-w-[400px] mx-auto flex items-center md:flex-row flex-col md:gap-3 gap-y-4"
            >
              <fieldset className="md:max-w-[371px] w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="h-12 rounded-full px-5 py-3 bg-accent/10 border border-accent/20 shadow-sm ring-[0.7px] ring-accent/20 focus:ring-2 focus:ring-primary-500 placeholder:text-accent/60 block w-full outline-none text-white text-tagline-2"
                />
              </fieldset>
              <button
                type="submit"
                className="h-12 btn btn-primary hover:btn-accent btn-md md:w-auto w-full border-0 shadow-lg shrink-0"
              >
                <span>Get Started Today</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
