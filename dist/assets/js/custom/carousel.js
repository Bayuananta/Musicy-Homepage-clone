/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/assets/js/custom/carousel.js ***!
  \******************************************/
$(document).ready(function(){

  $('.videos__lists').on('init', function(event){
    if($('.videos__lists').attr('aria-disabled')=="true") {
           $('#btn-next-tour').addClass('disabled');
       }
     else {
           $('#btn-next-tour').removeClass('disabled');
     }
     
     if($('.videos__lists').attr('aria-disabled')=="true") {
      $('#btn-prev-tour').addClass('disabled');
    }
  else {
      $('#btn-prev-tour').removeClass('disabled');
    }
  });
  $('.videos__lists').on('afterChange', function(event){
    if($('.videos__lists').attr('aria-disabled')=="true") {
           $('#btn-next-tour').addClass('disabled');
       }
     else {
           $('#btn-next-tour').removeClass('disabled');
     }
     
     if($('.videos__lists').attr('aria-disabled')=="true") {
      $('#btn-prev-tour').addClass('disabled');
    }
  else {
      $('#btn-prev-tour').removeClass('disabled');
    }
  });
  $('.tour-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#btn-prev-tour'),
    nextArrow: $('#btn-next-tour'),
  });
});

$('.videos__lists').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('#prev-btn-video'),
  nextArrow: $('#next-btn-video')
});

$('.album__cover').slick({
  centerMode: true,
  centerPadding: '260px',
  slidesToShow: 3,
  prevArrow: $('#prev-btn'),
  nextArrow: $('#next-btn'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


/******/ })()
;
//# sourceMappingURL=carousel.js.map