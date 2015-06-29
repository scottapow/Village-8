
// Movie Synops Content //

// Store IMDB id's
var $movie1ID = $('.synops div:nth-child(1)').attr('id');
var $movie2ID = $('.synops div:nth-child(2)').attr('id');
var $movie3ID = $('.synops div:nth-child(3)').attr('id');
var $movie4ID = $('.synops div:nth-child(4)').attr('id');
var $movie5ID = $('.synops div:nth-child(5)').attr('id');

console.log($movie1ID + $movie2ID + $movie3ID + $movie4ID + $movie5ID);

$.ajax({
  url:       'http://www.myapifilms.com/imdb',
  dataType:  'jsonp',
  success:   function (response) {
      console.log(response);
   }
});

// Token: 04952d4f-cb8c-47f2-943e-a01e19bcfed6

// Slick Carousel //

$('.center').slick({
  centerMode: true,
  touchMove: true,
  centerPadding: '110px',
  accessibility: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite:true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        variableWidth: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        variableWidth: true
      }
    }
  ]
});
