const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // loopAdditionalSlides: 5,
  // loopedSlides: 3,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,
  direction: "horizontal",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
