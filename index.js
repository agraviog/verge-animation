import gsap from "/node_modules/gsap";
import ScrollTrigger from "/node_modules/gsap/dist/ScrollTrigger";
import SplitText from "/node_modules/gsap/dist/SplitText";
import ScrollSmoother from "/node_modules/gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
console.log("GSAP installed");
