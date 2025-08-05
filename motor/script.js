const range = document.querySelector("#range");
const money = document.querySelector("#money");
const time = document.querySelector("#time");
const nav = document.querySelector("#navbar");
const section = document.querySelector("#section");

range.addEventListener("input", (e) => {
  time.textContent = range.value;
  money.textContent = ((range.value / 4) * 21732000).toLocaleString();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
        document.querySelector("#sabtBtn").classList.remove("opacity-0");
        document.querySelector("#sabtBtn").classList.remove("translate-y-5");
      } else {
        document.querySelector("#sabtBtn").classList.add("opacity-0");
        document.querySelector("#sabtBtn").classList.add("translate-y-5");
      }
    });
  },
  {
    threshold: 0,
  }
);
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
        document.querySelector("#sbtBtn").classList.remove("opacity-0");
        document.querySelector("#sbtBtn").classList.remove("translate-y-5");
      } else {
        document.querySelector("#sbtBtn").classList.add("opacity-0");
        document.querySelector("#sbtBtn").classList.add("translate-y-5");
      }
    });
  },
  {
    threshold: 0,
  }
);

observer.observe(section);
observer2.observe(section);

const items = document.querySelector("#itemssss").querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    items.forEach((allss) => {
      if (allss != item) {
        allss.querySelector(".content").classList.add("h-0");
        allss.querySelector(".content").classList.add("p-0");
        allss.querySelector(".content").classList.remove("h-auto");
        allss.querySelector(".content").classList.remove("p-[16px]");
      }
    });
    item.querySelector(".content").classList.toggle("h-0");
    item.querySelector(".content").classList.toggle("p-0");
    item.querySelector(".content").classList.toggle("h-auto");
    item.querySelector(".content").classList.toggle("p-[16px]");
  });
});
