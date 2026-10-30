import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Registered once, on the client only. Import GSAP from here (never from "gsap" directly)
// inside Client Components.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);
}

export { gsap, ScrollTrigger, SplitText, MotionPathPlugin };
