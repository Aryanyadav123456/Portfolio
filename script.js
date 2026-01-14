gsap.registerPlugin(ScrollTrigger);

/* ===== HERO ANIMATIONS ===== */
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-image", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

/* ===== CARD SCROLL ANIMATIONS ===== */
gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

/* ===== THEME TOGGLE ===== */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleBtn.textContent = 
    document.body.classList.contains("light") ? "🌞" : "🌙";
});
