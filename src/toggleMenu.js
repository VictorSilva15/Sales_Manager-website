const menu = document.getElementById("header-links");

const nav = document.getElementById("header-nav");

const btnToggleMenu = document.getElementById("header-button");

btnToggleMenu.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}
