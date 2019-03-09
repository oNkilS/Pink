// var navMain = document.querySelector ('.top-menu');
// var navToggle = document.querySelector ('.top-menu__toggle');

// navToggle.addEventListener('click', function() {
//     if (navMain.classList.contains('top-menu--closed')) {
//         navMain.classList.remove('top-menu--closed');
//         navMain.classList.add('top-menu--opened');
//     } else {
//         navMain.classList.add('top-menu--closed');
//         navMain.classList.remove('top-menu--opened');
//     }
// });

// $(document).ready(function() {
//   $('top-menu__toggle').click(function(){
//     $('index-header').toggleClass('index-header--open')
//   });
// });
// $(document).ready(function(){
//   $('.top-menu--opened').click(function(){
//     $('.top-menu--opened').toggleClass('top-menu--closed')
// });
// });
$(document).ready(function(){
  $('.top-menu__toggle').click(function(){
    $('.top-menu').toggleClass('top-menu--closed top-menu--opened')
  });
});
$(document).ready(function(){
  $('.top-menu__toggle').click(function(){
    $('.header-contaner').toggleClass('header-contaner--opened')
  });
});
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.responsive__table').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true
});