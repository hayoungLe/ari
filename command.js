//사이드바 일정 높이 이상 내려가면 등장
$(document).ready(function(){

  var navHeight = $(".btn-list").height(); 

  $(".side-bar").hide();

  $(window).scroll(function(){  
      var rollIt = $(this).scrollTop() >= navHeight; 

  if(rollIt){ 
 
          $(".side-bar").show().css({"position":"fixed"});
      }
      else{
          $(".side-bar").hide();
      }
  });
  
});




//이벤트 베너 스와이프
const swiper_1 = new Swiper(".event-slide>.swiper", {  
autoplay: {
  delay:3500,
},
loop: true, 

  pagination: {
    el: ".event-slide>.swiper>.swiper-pagination",
    clickable: true,
  },
});


//베스트 아이템 스와이프
const swiper_2 = new Swiper(".best-list>.mySwiper", {
  navigation: {
    nextEl: ".best-list>.swiper>.swiper-button-next",
    prevEl: ".best-list>.swiper>.swiper-button-prev",
  },
});



//탑 배너

var swiper = new Swiper("header>.top-banner>.mySwiper", {
  autoplay: {
    delay:3500,
  },
  loop: true, 
  

  pagination: {
    el: "header>.top-banner>.mySwiper>.swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "header>.top-banner>.mySwiper>.swiper-button-next",
    prevEl: "header>.top-banner>.mySwiper>.swiper-button-prev",
  },
});

//2차메뉴 네비 칼라 변경
$(".menu-icon").mouseover(function (){
  $("nav").css("background-color","#f8f8f8");
});

$(".menu-icon").mouseout(function (){
  $("nav").css("background-color","transparent");
});