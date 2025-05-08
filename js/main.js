var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 2,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        600: {
          slidesPerView: 4,
        },
        1300: {
          slidesPerView: 6,
        },
      },
});

var swiper = new Swiper(".conceptSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 2,
  grabCursor: true,
  scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      600: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 6,
      },
    },
});

var swiper = new Swiper(".TVSwiper", {
  slidesPerView: 1.3,
  spaceBetween: "1.5vw",
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