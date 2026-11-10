const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
form?.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formNote").textContent =
    "Ďakujeme. Toto je testovacia ukážka: formulár zatiaľ nič neodosiela. Pred spustením ho treba pripojiť k zabezpečenému serverovému spracovaniu.";
});
