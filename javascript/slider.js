$(document).ready(function(){
    $('.cover').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.button__left'),
        nextArrow: $('.button__right')
    });
  });