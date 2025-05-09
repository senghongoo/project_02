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

$(function () {
  function bindNavToggle() {
    if (window.innerWidth <= 600) {
      $('nav > h1').off('click').on('click', function () {
        $('.nav_main').slideToggle();
      });
    } else {
      $('nav > h1').off('click');
      $('.nav_main').show();
    }
  }

  bindNavToggle();

  $(window).resize(function () {
    bindNavToggle();
  });
});

$(window).resize(function () {
  if (window.innerWidth >= 600) {
    $('.nav_main').css('display', 'flex');
  } else {
    $('.nav_main').css('display', 'none');
  }
});

$(function () {
  function updateSliderImage() {
    const $img = $('#slider img');

    if (window.innerWidth <= 600) {
      $img.attr('src', 'img/slider_mobile.jpg');
    } else {
      $img.attr('src', 'img/slider.jpg');
    }
  }

  updateSliderImage();

  $(window).resize(function () {
    updateSliderImage();
  });
});
