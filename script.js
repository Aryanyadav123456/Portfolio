/* =========================================================
   Aryan Devaragari – Portfolio Script (PRODUCTION READY)
========================================================= */

/* ---------------------------
   DOM READY
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== DARK / LIGHT MODE ===== */
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      body.classList.add("light");
      toggleBtn.textContent = "🌞";
    } else {
      body.classList.remove("light");
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light");

      const isLight = body.classList.contains("light");
      toggleBtn.textContent = isLight ? "🌞" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  /* ===== SCROLL PROGRESS BAR ===== */
  const progressBar = document.getElementById("progressBar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });

  /* ===== SECTION FADE-IN ===== */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));

});

/* ---------------------------
   PAGE LOADER (CRITICAL FIX)
---------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("loaded");
    }, 700);
  }
});

/* ---------------------------
   GOOGLE ANALYTICS SAFE HOOK
---------------------------- */
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag("js", new Date());
