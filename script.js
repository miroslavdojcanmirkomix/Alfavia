const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("formNote").textContent =
    "Toto je zatiaľ ukážkový formulár. Pred ostrým spustením ho treba pripojiť k zabezpečenému odosielaniu.";
});