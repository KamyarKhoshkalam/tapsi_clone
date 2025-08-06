const more = document.querySelector("#more");
const itemss = document.querySelector("#itemss");

more.addEventListener("click", (e) => {
  itemss.classList.toggle("h-0");
});

const nav = document.querySelector("#nav");
const hamburg = document.querySelector("#hamburg");

hamburg.addEventListener("click", (e) => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
