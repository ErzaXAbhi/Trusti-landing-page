const about = document.querySelector(".about");

gsap.registerPlugin(ScrollTrigger);

gsap.from(about, {
  autoAlpha: 0,
  y: -200,
  duration: 1,
  ease: "linear",
  scrollTrigger: {
    trigger: ".about",
    start: "top 5%",
    end: "bottom",
  },
});
