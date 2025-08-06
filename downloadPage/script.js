const more = document.querySelector("#more");
const itemss = document.querySelector("#itemss");

more.addEventListener("click", (e) => {
  itemss.classList.toggle("h-0");
});
