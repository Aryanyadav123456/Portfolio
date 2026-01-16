document.addEventListener("DOMContentLoaded", () => {

  /* THEME TOGGLE */
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggle.textContent = "🌙";
  }

  toggle.onclick = () => {
    body.classList.toggle("light");
    toggle.textContent = body.classList.contains("light") ? "🌙" : "🌞";
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  };

  /* GSAP */
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-text *", {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
  });

  gsap.utils.toArray(".section").forEach(sec => {
    gsap.from(sec, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: { trigger: sec, start: "top 80%" }
    });
  });

  /* CERT MODAL */
  const modal = document.getElementById("certModal");
  const frame = document.getElementById("certFrame");

  document.querySelectorAll(".cert-card").forEach(card => {
    card.onclick = () => {
      frame.src = card.dataset.cert;
      modal.classList.add("show");
    };
  });

  document.querySelector(".close-modal").onclick = () => {
    modal.classList.remove("show");
    frame.src = "";
  };

  window.onclick = e => {
    if (e.target === modal) {
      modal.classList.remove("show");
      frame.src = "";
    }
  };

});
