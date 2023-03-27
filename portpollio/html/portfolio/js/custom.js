$(function () {
  /* theme change(dark,light) */
  const $checkbox = document.querySelector('.mode_btn');

  $checkbox.addEventListener('click', e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('color-theme', 'dark');
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
    }
  });

  //header scroll event

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  

  function hasScrolled() {
    var st = $(this).scrollTop();


    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
      $('.quick_menu').removeClass('qM-up').addClass('qM-down');
      $('.quick_menu').addClass('nav-on');

    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
        $('.quick_menu').removeClass('qM-down').addClass('qM-up');
        $('.quick_menu').removeClass('nav-on');
      }
    }

    lastScrollTop = st;
  };

  /* quick_menu */
  $('.qMenu_btn').click(function () {
    $('.quick_menu .qMenu_list').slideToggle()
  });

  /* cont2 */
  $(window).scroll(function () {
    var onOffset = $('.cont2').offset().top - 500;
    var st = $(this).scrollTop();
    //console.log(st);
    if (st >= onOffset) {
      $('.cont2').addClass('on')
    } else {
      $('.cont2').removeClass('on')
    }
  });

    /* cont3 */

    var swiper = new Swiper(".cont3 .mySwiper", {
      loop: true,
/*       autoplay: true,
      autoplay: {
        delay: 3000,
      }, */
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".cont3 .mySwiper2", {
      loop: true,
      effect: 'fade',
 /*      autoplay: true,
      autoplay: {
        delay: 3000,
      }, */
      spaceBetween: 10,
      navigation: {
        nextEl: ".cont3 .swiper-button-next",
        prevEl: ".cont3 .swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    /* 반응형 js */

    //const media = window.matchMedia(mediaQueryString);
    //matchMedia("screen and (orientation:portrait)");
    //matchMedia("only screen and (min-device-width: 500px) and (max-device-width: 1920px) and (-webkit-min-device-pixel-ratio: 1)");
/*     var m = matchMedia("screen and (min-width: 768px)");
    m.media // -> "screen and (min-width: 1024px)"
    m.matches // -> true
    if (matchMedia("screen and (min-width: 768px)").matches) {
      // 768px 이상에서 사용할 JavaScript
      $('.cont3-2').hide();
      $('.cont3').show();
    } else {
      // 768px 미만에서 사용할 JavaScript
      $('.cont3').hide();
      $('.cont3-2').show();
    };

    const media = matchMedia("screen and (max-width:767px)");

    media.addListener(() => {
      $('.cont3').hide();
      $('.cont3-2').show();
    }); */

/*     const meaia2 = matchMedia("screen and (max-width:767px)");
 */
}); //ready end