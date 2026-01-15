/* ===============================
   WAIT FOR DOM
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     DARK / LIGHT MODE TOGGLE
  ================================ */

  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  if (!toggleBtn) {
    console.error("Theme toggle button not found");
    return;
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "🌙";
  } else {
    body.classList.remove("light");
    toggleBtn.textContent = "🌞";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌞";
      localStorage.setItem("theme", "dark");
    }
  });

  /* ===============================
     GSAP SETUP
  ================================ */

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-text h1", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-text h2, .hero-text p, .hero-buttons", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from(".hero-image", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });

  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      }
    });
  });

});
