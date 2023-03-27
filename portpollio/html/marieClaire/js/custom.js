$(function () {
    //탭메뉴 sns
    $('ul.tab_menu>li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var tabI = $(this).index();
        $('ul.tab_con>li').eq(tabI).addClass('on').siblings().removeClass('on');
    });

    //메인슬라이드 시작
    $('ul.slide li').eq(0).siblings().hide();
    let slideIndex = 0;
    const slideLength = $('ul.slide li').length - 1;
    let inter = setInterval(goSlide, 3000);

    $('.main_visual .right_btn').click(function () {
        clearInterval(inter);
        goSlide();
        inter = setInterval(goSlide, 3000);
    });

    $('.main_visual .left_btn').click(function () {
        clearInterval(inter);
        backSlide();
        inter = setInterval(goSlide, 3000);
    });

    $('.main_visual .pause').click(function () {
        clearInterval(inter);
    });

    $('.main_visual .play').click(function () {
        inter = setInterval(goSlide, 3000);
    });

    $('.main_visual ul.pager li').click(function () {
        clearInterval(inter);
        let myIndex = $(this).index();
        slideIndex = myIndex;
        rollingSlide();
        inter = setInterval(goSlide, 3000);
    });

    function goSlide() {
        if (slideIndex < slideLength) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        rollingSlide();
    }

    function backSlide() {
        if (slideIndex == 0) {
            slideIndex = slideLength
        } else {
            slideIndex--;
        }
        rollingSlide();
    }

    function rollingSlide() {
        $('ul.slide li').eq(slideIndex).siblings().fadeOut();
        $('ul.slide li').eq(slideIndex).fadeIn();
        $('.main_visual ul.pager li').removeClass('active').eq(slideIndex)
            .addClass('active');
    }
    //메인슬라이드 끝
    //horoscope 슬라이드시작
    $('ul.ho_slide li').eq(0).siblings().hide();
    let hoSI = 0;
    let hoslideL=$('ul.ho_slide li').length-1;
    /* console.log(hoslideL) */
    let ho_inter = setInterval(goSlide2, 3000);
    $('.horoscope .right_btn').click(function () {
        clearInterval(ho_inter);
        goSlide2();
        ho_inter = setInterval(goSlide2, 3000);
    });

    $('.horoscope .left_btn').click(function () {
        clearInterval(ho_inter);
        backSlide2();
        ho_inter = setInterval(goSlide2, 3000);
    });


    function goSlide2() {
        if (hoSI < hoslideL) {
            hoSI++;
        } else {
            hoSI = 0;
        }
        rollingSlide2();
    }

    function backSlide2() {
        if (hoSI == 0) {
            hoSI = hoslideL
        } else {
            hoSI--;
        }
        rollingSlide2();
    }

    function rollingSlide2() {
        $('ul.ho_slide li').eq(hoSI).siblings().fadeOut();
        $('ul.ho_slide li').eq(hoSI).fadeIn();
/*         $('.horoscope ul.pager li').removeClass('active').eq(slideIndex)
            .addClass('active'); */
    }
    //horoscope 슬라이드끝

    //이벤트 슬라이드 시작
    let eventSI = 0;
    setInterval(function () {
        if (eventSI < 1) {
            eventSI++;
        } else {
            eventSI = 0;
        }
        $('.event_slide ul').animate({
            left: (eventSI * -100) + '%'
        }, 500);
    }, 5000);
    //이벤트 슬라이드 끝

    

    //오뚜기 인기상품 슬라이드 시작
    let faI = 0;
    $('.fa_rt').click(function () {
        if (faI < 3) {
            faI++;
        }
        faRolling();
    });
    $('.fa_lt').click(function () {
        if (faI != 0) {
            faI--;
        }
        faRolling();
    });

    function faRolling() {
        $('ul.fa_slide').animate({
            left: (-100 * faI) + '%'
        }, 500);
    }
    //오뚜기 인기상품 슬라이드 끝



}); //ready end