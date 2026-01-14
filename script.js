gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-image", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: card,
    y: 40,
    opacity: 0,
    duration: 0.8
  });
});
