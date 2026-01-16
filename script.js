<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
/* ===============================
   PAGE LOADER
================================ */
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

/* ===============================
   SCROLL PROGRESS
================================ */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width =
    (scrollTop / height) * 100 + "%";
});

/* ===============================
   DARK / LIGHT MODE (FIXED)
================================ */
const toggle = document.getElementById("themeToggle");
const body = document.body;

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  toggle.textContent = "🌞";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌞";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
});

/* ===============================
   GSAP ANIMATIONS
================================ */
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1 });
gsap.from(".hero h2, .hero p, .btns", {
  opacity: 0,
  y: 30,
  delay: 0.3,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".hero-img", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  delay: 0.6
});

// SECTIONS
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});
