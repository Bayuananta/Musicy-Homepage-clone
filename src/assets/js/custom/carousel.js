$(document).ready(function(){
  $('.tour-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#btn-prev-tour'),
    nextArrow: $('#btn-next-tour'),
  });
});

$('.videos__lists').slick({
  infinite: true,
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