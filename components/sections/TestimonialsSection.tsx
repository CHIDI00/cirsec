import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
  rating: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The platform's intuitive workflows and practical threat drills revolutionized our team's operational readiness. Incident response times dropped dramatically.",
    author: "Sarah Johnson",
    role: "Director of Operations",
    organization: "TechSphere",
    avatar: "/images/ns-avatar-1.png",
    rating: "4.9",
  },
  {
    quote: "Outstanding service and innovative solutions. The responsiveness and hands-on exercises conducted by Cirsec have been invaluable to our cloud infrastructure.",
    author: "Michael Chen",
    role: "Tech Lead",
    organization: "Nexis Financial",
    avatar: "/images/ns-avatar-2.png",
    rating: "5.0",
  },
  {
    quote: "Cirsec's vulnerability assessments gave our executive board genuine confidence. The practical drills proved far superior to standard compliance checkboxes.",
    author: "Amara Okafor",
    role: "Information Security Officer",
    organization: "Vantage Health",
    avatar: "/images/ns-avatar-3.png",
    rating: "4.8",
  },
  {
    quote: "A breath of fresh air in the cybersecurity space. Cirsec translates complex security protocols into actionable daily habits for emerging developers.",
    author: "David Patel",
    role: "Director of Engineering",
    organization: "Vertex Systems",
    avatar: "/images/ns-avatar-4.png",
    rating: "5.0",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-white transition-colors duration-300">
      <div className="space-y-4 main-container text-center mb-10 md:mb-[70px]">
        <span className="badge badge-green">Reviews</span>
        <div>
          <h2 className="max-w-[786px] mx-auto text-secondary font-normal tracking-tight text-heading-4 sm:text-heading-2">
            Hear from our customers about their experiences with us
          </h2>
        </div>
      </div>

      {/* Marquee / Scrollable Grid Container */}
      <div className="w-full overflow-x-auto pb-6 scrollbar-thin">
        <div className="flex items-center justify-start lg:justify-center py-4 gap-6 min-w-max px-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[320px] sm:w-[358px] min-w-[320px] sm:min-w-[358px] h-[270px] group [perspective:1000px]"
            >
              <div className="flipper w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700">
                {/* Front of Card */}
                <div className="front rounded-[20px] space-y-6 w-full absolute inset-0 p-7 bg-background-2 border border-stroke-1 flex flex-col justify-between shadow-sm [backface-visibility:hidden]">
                  <p className="text-secondary text-tagline-2 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div>
                    <div className="border-t border-stroke-4 mb-4" />
                    <figure className="flex items-center gap-3">
                      <Image
                        src={item.avatar}
                        className="size-11 rounded-full object-center object-cover ring-2 ring-primary-500/20"
                        alt={`${item.author}'s avatar`}
                        width={44}
                        height={44}
                      />
                      <figcaption className="text-left">
                        <h4 className="text-tagline-1 font-medium text-secondary">
                          {item.author}
                        </h4>
                        <p className="text-tagline-3 text-secondary/60">
                          {item.role} &bull; {item.organization}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* Back of Card (Flipped on Hover) */}
                <div className="back rounded-[20px] p-8 flex flex-col justify-center items-center space-y-3 w-full h-full absolute inset-0 bg-secondary shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-[64px] font-light leading-none text-ns-green">
                    {item.rating}
                  </h3>
                  <figure className="w-24 h-10 relative">
                    <Image
                      src="/images/icons/trustpilot-logo.svg"
                      alt="Trustpilot logo"
                      width={96}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  <p className="text-white/60 text-tagline-3">
                    Hover card to return
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
