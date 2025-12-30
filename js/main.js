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
