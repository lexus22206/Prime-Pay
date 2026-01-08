// hidden-header
const header = document.querySelector(".header");
let lastScroll = 0;
const offset = 80;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  header.classList.toggle("is-scrolled", currentScroll > 10);

  if (currentScroll <= offset) {
    header.classList.remove("is-hidden");
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.add("is-hidden");
  } else {
    header.classList.remove("is-hidden");
  }

  lastScroll = currentScroll;
});

// burger
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.body;

burger.addEventListener("click", () => {
  const isOpen = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", !isOpen);
  body.classList.toggle("menu-open");
  menu.classList.toggle("open");
});
