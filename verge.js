const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
const { ScrollSmoother } = require("gsap/dist/ScrollSmoother");
const { SplitText } = require("gsap/dist/SplitText");

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
