/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/assets/js/custom/carousel.js ***!
  \******************************************/
$(document).ready(function(){
  $('.tour').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
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