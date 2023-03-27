  //cookie js
  function getCookie(cname) { //getCookie(get:얻어오다) - cookkie값이 있는지 없는지 탐색하고 찾는 소스
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
} 
function setCookie(cname, cvalue, exdays) { //setCookie(set:세팅하다) - cname:쿠키이름 , cvalue:쿠키값 , exdays:쿠키가 유효한 날짜
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //exdays*24*60*60*1000 : 1일을 계산한값. = 하룻동안 팝업창이 안뜬다
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
} 

///달력
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
      htmlDates += '<div class="date last">' + dates[i] + '</div>';
    } else if (today.getDate() == dates[i] && today.getMonth() == CDate.getMonth() && today
      .getFullYear() == CDate.getFullYear()) {
      htmlDates += '<div id="date_' + dates[i] + '" class="date today" onclick="fn_selectDate(' +
        dates[i] + ');">' + dates[i] + '</div>';
    } else if (i >= thisFirst.getDay() + thisLast.getDate()) {
      htmlDates += '<div class="date next">' + dates[i] + '</div>';
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

  if (selectCk == 0) {
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
  }

}



$(document).ready(function () {
  buildcalendar();

    //t_modal tm
  function couponClose(){
    if($("input[name='chkbox']").is(":checked") ==true){
        setCookie("close","Y",1);
    }
    $("#tm").hide(); 
  }
  $(document).ready(function(){
    cookiedata = document.cookie;
    if(cookiedata.indexOf("close=Y")<0){
        $("#tm").show(); 
    }else{
        $("#tm").hide(); 
    }
    $("#close").click(function(){
        couponClose();
    });
  });

  //gnbAll_modal
  $('.h_bottom .gnbAll_btn').click(function(){
    $('.gnbAll_modal').show();
  });
  $('.gModal_btn').click(function(){
    $('.gnbAll_modal').hide();
  });


  //gnb
  $('ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().slideDown();
  }, function () {
    $(this).find('ul.sub').stop().slideUp();
  });




  //notice
  $('h3.note_tit').click(function () {
    $('h3.note_tit, .noteList ul.note_bottom').removeClass('on');
    $(this).addClass('on').next('ul.note_bottom').addClass('on');
  });


/*   
  $('.note_top li').on('click',function(e){
    e.preventDefault();
}); */ //탭메뉴가 a링크에서 h3으로 변경되어 삭제처리


  //f_banner slide
  var swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    direction: getDirection(),
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }



  

}); //reday end