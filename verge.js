import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
