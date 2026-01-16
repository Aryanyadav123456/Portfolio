/* =========================================================
   Portfolio Script – Advanced UI Enhancements
   Author: Aryan Devaragari
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     🎯 PAGE LOADER
     ========================================================= */
  const loader = document.createElement("div");
  loader.id = "page-loader";
  loader.innerHTML = `<div class="loader-circle"></div>`;
  document.body.appendChild(loader);

  window.addEventListener("load", () => {
    loader.classList.add("hide");
    setTimeout(() => loader.remove(), 800);
  });

  /* =========================================================
    /* ======================= DARK / LIGHT MODE ======================= */
const toggleBtn = document.createElement("button");
toggleBtn.id = "themeToggle";
toggleBtn.setAttribute("aria-label", "Toggle Theme");
toggleBtn.textContent = "🌙";

document.querySelector("header .nav").appendChild(toggleBtn);

const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌞";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});


  /* =========================================================
     🔥 SCROLL PROGRESS INDICATOR
     ========================================================= */
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });

  /* =========================================================
     ⚡ LAZY IMAGE LOADING
     ========================================================= */
  const images = document.querySelectorAll("img");

  const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("src");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => {
    lazyObserver.observe(img);
  });

  /* =========================================================
     ✨ GSAP ANIMATIONS
     ========================================================= */
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".hero h2, .hero p, .btns a", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(".hero-img", {
      opacity: 0,
      scale: 0.92,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });

    gsap.utils.toArray("section").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%"
        }
      });
    });
  }

  /* =========================================================
     📊 GOOGLE ANALYTICS (GA4)
     ========================================================= */
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  gtag("js", new Date());

  // 👉 Replace with your GA4 Measurement ID
  gtag("config", "G-XXXXXXXXXX");

});

