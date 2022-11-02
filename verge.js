gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

const childSplit = new SplitText("header h1", {
  type: "lines, words",
  linesClass: "split-child",
});
const parentSplit = new SplitText("header h1", {
  linesClass: "split-parent",
});

// console.log(childSplit)
const tl = gsap.timeline();
tl.from(childSplit.lines, {
  duration: 1,
  yPercent: 120,
  ease: "power4.out",
  stagger: 0.2,
}).to(childSplit.lines, {
  duration: 1,
  yPercent: 0,
  ease: "power4.out",
  stagger: 0.2,
});
