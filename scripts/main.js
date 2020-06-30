$(document).ready(function () {
  $('.sale__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // accessibility:false,
    draggable:false
  })
  $('.new__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // accessibility:false,
    draggable:false,
    rows:2,
    adaptiveHeight:true
  })
});