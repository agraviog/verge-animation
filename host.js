gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  smooth: 1.5,
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  effects: true,
});
