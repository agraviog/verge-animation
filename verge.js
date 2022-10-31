import { gsap } from "https://verge-animation.pages.dev/gsap";
import { ScrollSmoother } from "https://verge-animation.pages.dev/gsap/ScrollSmoother.js";
import { ScrollTrigger } from "https://verge-animation.pages.dev/gsap/ScrollTrigger.js";
import { SplitText } from "https://verge-animation.pages.dev/gsap/SplitText.js";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
