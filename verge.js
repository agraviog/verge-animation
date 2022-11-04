gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

let headerSplit = new SplitText("header h1", {
  type: "lines",
});
let textSplit = new SplitText("header p", {
  type: "words",
});
let parentSplit = new SplitText("h1, h2, h3, h4, p", {
  linesClass: "split-parent",
});

gsap.from(".nav", {
  delay: 0.25,
  duration: 0.5,
  yPercent: -120,
  opacity: 0,
  autoAlpha: 0,
  ease: "Circ.easeOut",
});

gsap.from(".nav-menu li", {
  delay: 0.25,
  duration: 0.5,
  yPercent: -120,
  opacity: 0,
  autoAlpha: 0,
  ease: "Circ.easeOut",
  stagger: 0.05,
});

gsap.from(headerSplit.lines, {
  delay: 1,
  duration: 0.75,
  yPercent: 120,
  opacity: 0,
  autoAlpha: 0,
  ease: "Circ.easeOut",
  stagger: 0.1,
  onComplete: () => {
    headerSplit.revert();
  },
});

gsap.from(textSplit.words, {
  delay: 1.3,
  duration: 0.75,
  yPercent: 120,
  opacity: 0,
  autoAlpha: 0,
  ease: "Circ.easeOut",
  stagger: 0.02,
  onComplete: () => {
    textSplit.revert();
  },
});

gsap.from(".home_card-grid li", {
  scrollTrigger: {
    trigger: ".home_card-grid li",
    start: "top 75%",
  },
  duration: 0.75,
  yPercent: 25,
  opacity: 0,
  autoAlpha: 0,
  ease: "Circ.easeOut",
  stagger: 0.2,
});

function headingText() {
  const targetOne = gsap.utils.toArray("section h2");
  targetOne.forEach((target) => {
    let splitHeadings = new SplitText(target, { type: "lines" });
    gsap.from(splitHeadings.lines, {
      scrollTrigger: {
        trigger: target,
        start: "top 75%",
        end: "bottom center",
      },
      duration: 0.75,
      yPercent: 120,
      opacity: 0,
      autoAlpha: 0,
      ease: "Circ.easeOut",
      onComplete: () => {
        splitHeadings.revert();
      },
    });
  });
}
headingText();

function bodyText() {
  const targetTwo = gsap.utils.toArray("section p");
  targetTwo.forEach((target) => {
    let splitBody = new SplitText(target, { type: "words" });
    gsap.from(splitBody.words, {
      scrollTrigger: {
        trigger: target,
        start: "top 75%",
        end: "bottom center",
      },
      duration: 0.75,
      yPercent: 120,
      opacity: 0,
      autoAlpha: 0,
      ease: "Circ.easeOut",
      stagger: 0.003,
      onComplete: () => {
        splitBody.revert();
      },
    });
  });
}
bodyText();
