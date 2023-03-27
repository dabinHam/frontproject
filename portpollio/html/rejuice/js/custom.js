$(function () {
    //변수ht에 브라우저의 높이값을 저장
    var ht = $(window).height();
    //브라우저의 높이값을 sectipn의 높이값으로 지정
    $('section').height(ht);

    //크기를 줄이거나 할때 resize가 되는데 그때높이값을 자동으로 변경해서 넣어줄수있도록함
    $(window).on('resize', function () {
        var ht = $(window).height();
        $('section').height(ht);
    });

    $('section').on('mousemove', function (e) {
        //변수 posX에 마우스 커서의 x축 위치 저장
        var posX = e.pageX;
        //변수 posY에 마우스 커서의 y축 위치 저장
        var posY = e.pageY;

        //첫번째 박스의 이미지 위치값을 마우스 커서의 위치 값과 연동
    $('.p11').css({
        'right': 20 - (posX / 30),
        'bottom': 20 - (posY / 30)
    });

    //두번째 박스의 이미지 위치값을 마우스 커서의 위치 값과 연동
    $('.p21').css({
        'right': 20 - (posX / 30),
        'bottom': 20 - (posY / 30)
    });

    //세번째 박스의 이미지 위치값을 마우스 커서의 위치 값과 연동
    $('.p31').css({
        'right': 20 - (posX / 30),
        'bottom': 20 - (posY / 30)
    });

    //네번째 박스의 이미지 위치값을 마우스 커서의 위치 값과 연동
    $('.p41').css({
        'right': 20 - (posX / 30),
        'bottom': 40 - (posY / 30)
    });

    });

    

    $('#menu li').on('click', function (e) {
        e.preventDefault();
        //변수 ht에 브라우저 높이 값 저장
        var ht = $(window).height();

        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();


        //브라우저의 높이값*박스의 순서 값은 현재 박스의 스크롤 위치 값과 동일
        var nowTop = i * ht;

        //해당 스크롤의 위치값으로 문서를 이동
        $('html,body').stop().animate({
            'scrollTop': nowTop
        }, 1400);
    });


    $(window).on('scroll', function () {
        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();

        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();

        /*  if(scroll >= ht * 0 && scroll < ht * 1 ){
             $('#menu li').removeClass();
             $('#menu li').eq(0).addClass('on');
         }
         if(scroll >= ht * 1 && scroll < ht * 2 ){
             $('#menu li').removeClass();
             $('#menu li').eq(1).addClass('on');
         }
         if(scroll >= ht * 2 && scroll < ht * 3 ){
             $('#menu li').removeClass();
             $('#menu li').eq(2).addClass('on');
         }
         if(scroll >= ht * 3 && scroll < ht * 4 ){
             $('#menu li').removeClass();
             $('#menu li').eq(3).addClass('on');
         } */
        for (var i = 0; i < 4; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $('#menu li').removeClass();
                $('#menu li').eq(i).addClass('on');
            }
        }
    });


    $('section').bind('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            var prev = $(this).prev().offset().top;
            //해당 스크롤의 위치값으로 문서를 이동
            $('html,body').stop().animate({
                'scrollTop': prev
            }, 1400, 'easeOutBounce');
        } else {
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({
                'scrollTop': next
            }, 1400, 'easeOutBounce');
        }


    })

}); //ready end