/* calendar */
var CDate = new Date();
var today = new Date();
var selectCk = 0;

var buildcalendar = function () {
  var htmlDates = '';
  var prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); //지난 달의 마지막 날 
  var thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); //이번 달의 첫쨰 날
  var thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0); //이번 달의 마지막 날
  document.querySelector(".year").innerHTML = CDate.getFullYear() + "년"; // year에 년도 출력
  document.querySelector(".month").innerHTML = (CDate.getMonth() + 1) + "월"; //month에 월 출력
  const dates = [];
  if (thisFirst.getDay() != 0) {
    for (var i = 0; i < thisFirst.getDay(); i++) {
      dates.unshift(prevLast.getDate() - i); // 지난 달 날짜 채우기
    }
  }
  for (var i = 1; i <= thisLast.getDate(); i++) {
    dates.push(i); // 이번 달 날짜 채우기 
  }
  for (var i = 1; i <= 13 - thisLast.getDay(); i++) {
    dates.push(i); // 다음 달 날짜 채우기 (나머지 다 채운 다음 출력할 때 42개만 출력함)
  }

  for (var i = 0; i < 42; i++) {
    if (i < thisFirst.getDay()) {
      // htmlDates += '<div class="date last">' + dates[i] + '</div>';
    } else if (today.getDate() == dates[i] && today.getMonth() == CDate.getMonth() && today
      .getFullYear() == CDate.getFullYear()) {
      htmlDates += '<div id="date_' + dates[i] + '" class="date today" onclick="fn_selectDate(' +
        dates[i] + ');">' + dates[i] + '</div>';
    } else if (i >= thisFirst.getDay() + thisLast.getDate()) {
      // htmlDates += '<div class="date next">' + dates[i] + '</div>';
    } else {
      htmlDates += '<div id="date_' + dates[i] + '" class="date" onclick="fn_selectDate(' + dates[i] +
        ');">' + dates[i] + '</div>';
    }
  }
  document.querySelector(".dates").innerHTML = htmlDates;
}

function prevCal() {
  CDate.setMonth(CDate.getMonth() - 1);
  buildcalendar();
}

function nextCal() {
  CDate.setMonth(CDate.getMonth() + 1);
  buildcalendar();
}

function fn_selectDate(date) {

  var year = CDate.getFullYear();
  var month = CDate.getMonth() + 1;
  var date_txt = "";
  if (CDate.getMonth + 1 < 10) {
    month = "0" + (CDate.getMonth() + 1);
  }
  if (date < 10) {
    date_txt = "0" + date;
  }

/*   if (selectCk == 0) {
    $(".date").css("background-color", "");
    $(".date").css("color", "");
    $("#date_" + date).css("background-color", "red");
    $("#date_" + date).css("color", "white");

    $("#period_1").val(year + "-" + month + "-" + date);
    $("#period_2").val("");
    selectCk = date;
  } else {
    $("#date_" + date).css("background-color", "red");
    $("#date_" + date).css("color", "white");
    for (var i = selectCk + 1; i < date; i++) {
      $("#date_" + i).css("background-color", "#FFDDDD");
    }

    $("#period_2").val(year + "-" + month + "-" + date);
    selectCk = 0;
  } */

/*   $(".date").each(function (index) { // 오늘 날짜 표시
    if (nowYear == date.getFullYear() && nowMonth == date.getMonth() && $(".date").eq(index).text() == date.getDate()) {
        $(".date").eq(index).addClass('colToday');
    }
    }) */
}


$(function(){
     buildcalendar();

     /* skipNav */
     $("#skip > li > a").click(function () {
       $($(this).attr("href"))
         .attr("tabindex", "0")
         .css("outline", "0")
         .focus();
     }); 

    /* quick_menu */
    $('.qMenu_btn').click(function(){
        $('.qM_list').slideToggle()
        $(this).find('i').toggleClass('active');
    });

    /* gnb */
    $('ul.gnb>li').hover(function () {
        $(this).find('ul.sub').stop().slideDown('fast');
    }, function () {
        $(this).find('ul.sub').stop().slideUp('fast');
    });

    $('ul.sub>li').hover(function () {
        $(this).find('ul.sub2').stop().slideDown('fast');
    }, function () {
        $(this).find('ul.sub2').stop().slideUp('fast');
    });

      /* main_visual */
      var mainswiper = new Swiper(".main_visual .mySwiper", {
        effect : 'fade', // 페이드 효과 사용
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
          nextEl: ".main_visual .swiper-button-next",
          prevEl: ".main_visual .swiper-button-prev",
        },
        pagination: {
          el: ".main_visual .swiper-pagination",
          clickable: true,
        },
/*         mousewheel: true, */ //화면을 내리고싶은데 자꾸 슬라이드가 돌아가서 불편함으로 인해 없앰.
        keyboard: true,
      });


      /* program */
      var proswiper = new Swiper(".program .mySwiper", {
        slidesPerView: 5,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 4000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".program .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".program .swiper-button-next",
          prevEl: ".program .swiper-button-prev",
        },
      });

      $('.program .swiper-button-pause').click(function(){
        proswiper.autoplay.stop();
        $(this).hide();
        $('.program .swiper-button-play').show();
      });

      $('.program .swiper-button-play').click(function(){
        proswiper.autoplay.start();
        $(this).hide();
        $('.program .swiper-button-pause').show();
      });


      /* gal */
      var galswiper = new Swiper(".gal .mySwiper.gal_con3", {
        effect : 'fade', // 페이드 효과 사용
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 3000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".gal .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".gal .swiper-button-next",
          prevEl: ".gal .swiper-button-prev",
        },
      });

      $('.gal .swiper-button-pause.con3_btn').click(function(){
        galswiper.autoplay.stop();
        $(this).hide();
        $('.gal .swiper-button-play.con3_btn').show();
      });

      $('.gal .swiper-button-play.con3_btn').click(function(){
        galswiper.autoplay.start();
        $(this).hide();
        $('.gal .swiper-button-pause.con3_btn').show();
      });
      /* .gal_con4 */
      var gal4swiper = new Swiper(".gal .mySwiper.gal_con4", {
        effect : 'fade', // 페이드 효과 사용
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 3000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".gal .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".gal .swiper-button-next",
          prevEl: ".gal .swiper-button-prev",
        },
      });
      $('.gal .swiper-button-pause.con4_btn').click(function(){
        gal4swiper.autoplay.stop();
        $(this).hide();
        $('.gal .swiper-button-play.con4_btn').show();
      });

      $('.gal .swiper-button-play.con4_btn').click(function(){
        gal4swiper.autoplay.start();
        $(this).hide();
        $('.gal .swiper-button-pause.con4_btn').show();
      });

      /* notice */
      $('ul.nt_tit>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var tabI = $(this).index();
        $('ul.nt_nav>li').eq(tabI).addClass('on').siblings().removeClass('on');
      });

      $('ul.nt_tit').on('click',function(e){
        e.preventDefault();
      });

      /* sns */
      var swiper = new Swiper(".sns .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
/*         autoplay: true,
        autoplay: {
            delay: 3000,
        }, */
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".sns .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".sns .swiper-button-next",
          prevEl: ".sns .swiper-button-prev",
        },
      });

});//ready end