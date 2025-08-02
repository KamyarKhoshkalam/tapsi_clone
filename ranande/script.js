const range = document.querySelector("#range");
const money = document.querySelector("#money");
const time = document.querySelector("#time");
const nav = document.querySelector("#navbar");
const section = document.querySelector("#section");

range.addEventListener("input", (e) => {
  time.textContent = range.value;
  money.textContent = ((range.value / 4) * 21732000).toLocaleString();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // loopAdditionalSlides: 5,
  // loopedSlides: 3,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  direction: "horizontal",

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
