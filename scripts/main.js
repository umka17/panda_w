$(document).ready(function () {
  $('.sale__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // accessibility:false,
    draggable:false,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
       { breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
       { breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
    ]
  })
  $('.popular-item__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // accessibility:false,
    draggable:false,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
       { breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
       { breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
    ]
  })
  $('.new__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // variableWidth: true,
    draggable:false,
    rows:2,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
       { breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
       { breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  })
});
// Atachment nav bar Я думаю это тупая идея
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.querySelector('.nav-list')

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//   }
// }

function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition - 20;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null ) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scroll(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
function smoothScrollUp(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = target.getBoundingClientRect().top - 20;
  var startTime = null;
  console.log(targetPosition);
  console.log(startPosition);
  console.log(distance);

  function animation(currentTime){
    if(startTime === null ) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition,  distance, duration);
    window.scroll(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var saleA = document.querySelector('[href="#sale-a"]');
var newA = document.querySelector('[href="#new-a"]');
var newF = document.querySelector('[href="#new-f"]');
var popularItemA = document.querySelector('[href="#popular-item-a"]');
var popularItemF = document.querySelector('[href="#popular-item-f"]');
saleA.addEventListener('click' , function(){
  smoothScroll('.sale', 2000)
});
newA.addEventListener('click' , function(){
  smoothScroll('.new', 2000)
});
newF.addEventListener('click' , function(){
  smoothScrollUp('.new', 2000);

  
});
popularItemA.addEventListener('click' , function(){
  smoothScroll('.popular-item', 2000)
});
popularItemF.addEventListener('click' , function(){
  smoothScrollUp('.popular-item', 500)
});


// smoothScroll('.sale', 2000)
