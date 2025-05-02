var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
});

var swiper = new Swiper(".conceptSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  grabCursor: true,
  scrollbar: {
      el: ".swiper-scrollbar",
    },
});

var swiper = new Swiper(".TVSwiper", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});