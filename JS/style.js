
// Movie Synops Content //

  // Store IMDB id's
// var $movie1ID = $('#tt0369610').attr('id');
// var $movie2ID = $('#tt1392190').attr('id');
// var $movie3ID = $('#tt2126355').attr('id');
// var $movie4ID = $('#tt3079380').attr('id');
// var $movie5ID = $('#tt2637276').attr('id');
// function getMovie(imdbid) {
//   $.ajax({    
//     data:  {
//       idIMDB: imdbid
//     },
//     method: 'GET',
//     url:        'http://www.myapifilms.com/id?format=jsonp',
//     dataType: "jsonp",
//     success: function (response) {
//       console.log(response);
//       var imgSrc = response.urlPoster;
//       $('#' + imdbid).html( 
//         "<img src=\'" + imgSrc + "\' >" +
//         "<h1>" + response.title + "</h1><br>" +
//         "<p>" + response.plot + "</p>"
//         );
//       $('#' + imdbid + ' img').css({
//         "display": "inline-block", 
//         "float": "left",
//         "width": "142px",
//         "height": "226px",
//         "margin-bottom": "40px",
//         "padding-right": "10px" 
//       });
//       $('#' + imdbid + ' h1').css({
//         "display": "inline-block", 
//         "position": "relative",
//         "margin-left": "10px"
//       });
//       $('#' + imdbid + ' > p').css({
//         "display": "inline",
//         "position": "relative", 
//         "margin-top": "10px",
//         "clear": "right"
//       });
//     }
//   }); 
// }

// getMovie($movie1ID);
// getMovie($movie2ID);
// getMovie($movie3ID);
// getMovie($movie4ID);
// getMovie($movie5ID);

//Token: 04952d4f-cb8c-47f2-943e-a01e19bcfed6
// URL: http://www.myapifilms.com/imdb/inTheaters?format=JSON&lang=en-us&token=4952d4f-cb8c-47f2-943e-a01e19bcfed6

/* * * * * Slick Carousel * * * * */

$('.slider-nav').slick({
  centerMode: true,
  asNavFor: ".slider-for",
  focusOnSelect: true,
  arrows: false,
  touchMove: true,
  accessibility: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  swipeToSlide: true,
});
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  asNavFor: '.slider-nav',
  fade: true,
  lazyLoad: 'onDemand',
  speed: 850,
  cssEase: 'linear',
  dots: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,

      }
    },
    {
      breakpoint: 6000,
      settings: {
        arrows: false,
        appendArrows: "$('.thumbnail')"
      }
    }
  ]
});


/* * * * * Slick Arrows Position * * * * */
// Probably very inefficient but works for now.


$(window).on("load resize", function() {
  var prev = $('.slick-prev');
  var next = $('.slick-next');
  var thumb = $('.thumbnail > img');
  var thumbHeight = thumb.height();
  var notWrapped = (thumbHeight / 2.3);
  var wrapped = (thumbHeight / 2.6);
  if (thumbHeight < 242.4) {
    prev.css("top", wrapped);
    next.css("top", wrapped);
  } else {
    prev.css("top", notWrapped);
    next.css("top", notWrapped);
  }
});

/* * * * * Button Appendation * * * * */


$('#info-buttons').appendTo('.slider-desc .panel-body');





















