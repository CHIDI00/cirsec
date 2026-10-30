"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  iconBg: string;
  target: number;
  suffix: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    iconBg: "bg-ns-yellow",
    target: 99,
    suffix: "%",
    title: "malware protection rate",
    description: "Defend against infections, data breaches, and sophisticated cyber-attacks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:size-6 size-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4L12 14.01L9 11.01"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    iconBg: "bg-ns-cyan",
    target: 100,
    suffix: "%",
    title: "software integrity",
    description: "Shield systems from the most advanced cyber threats and vulnerabilities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:size-6 size-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M23 21.0009V19.0009C22.9993 18.1146 22.7044 17.2536 22.1614 16.5532C21.6184 15.8527 20.8581 15.3524 20 15.1309"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13086C16.8604 3.35116 17.623 3.85156 18.1676 4.55317C18.7122 5.25478 19.0078 6.11769 19.0078 7.00586C19.0078 7.89403 18.7122 8.75694 18.1676 9.45855C17.623 10.1602 16.8604 10.6606 16 10.8809"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    iconBg: "bg-ns-red",
    target: 5,
    suffix: "X",
    title: "Lighter system footprint",
    description: "Ensuring seamless operations without slowing down devices or teams.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:size-6 size-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
          stroke="#1A1A1C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 1000;
    const steps = 25;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <span ref={containerRef} className="tabular-nums font-semibold">
      {hasStarted ? val : target}
      {suffix}
    </span>
  );
}

export function FeatureStatsSection() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white transition-colors duration-300">
      <div className="main-container">
        {/* Section Header */}
        <div className="space-y-4 mb-10 md:mb-[70px] text-center">
          <span className="badge badge-green">Reasons to select us</span>
          <div className="space-y-3">
            <h2 className="text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2">
              Unmatched security performance
            </h2>
            <p className="max-w-[744px] mx-auto text-secondary/70 leading-relaxed text-tagline-1">
              Essential protection for businesses handling confidential information, financial transactions, and personal user data. Empowered by continuous monitoring and proactive threat analysis.
            </p>
          </div>
        </div>

        {/* 3 Stats Panel in Dark Secondary container */}
        <div className="flex md:flex-row flex-col py-6 md:px-0 px-6 bg-secondary rounded-[20px] shadow-xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-6 space-y-6 flex-1 text-center ${
                idx < stats.length - 1
                  ? "md:border-r border-r-white/10 md:border-b-0 border-b border-b-white/10"
                  : ""
              }`}
            >
              {/* Pill Icon */}
              <div
                className={`lg:w-20 lg:h-[52px] w-16 h-10 ${stat.iconBg} rounded-full mx-auto flex items-center justify-center shadow-md`}
              >
                {stat.icon}
              </div>

              {/* Number and Description */}
              <div className="text-center space-y-2 px-4">
                <h3 className="text-white flex items-center gap-1.5 justify-center lg:text-heading-6 text-tagline-1 font-normal">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                  <span>{stat.title}</span>
                </h3>
                <p className="text-white/60 max-w-[274px] mx-auto text-tagline-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
