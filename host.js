gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  smooth: 1,
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  normalizeScroll: true,
  effects: true,
  preventDefault: true,
});

smoother.effects(".card-wrapper", {
  speed: 0.9,
});

// ScrollTrigger({
//   trigger: ".card-wrapper",
//   start: "top 25%",
//   markers: true,
// });
