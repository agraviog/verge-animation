gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
});
