const hamburger = document.querySelector(".bx-menu");
const navItems = document.querySelector("#nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  console.log(navItems);
});
