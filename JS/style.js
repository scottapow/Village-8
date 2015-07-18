

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


//on hover
//toggle
//hide




// REQUIRED: Include "jQuery Query Parser" plugin here or before this point: 
// https://github.com/mattsnider/jquery-plugin-query-parser
 (function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));

// YOUTUBE VIDEO CODE
$(document).ready(function(){
  
// BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
// Modal Window for dynamically opening videos
$('a[href^="http://www.youtube.com"]').on('click', function(e){
  // Store the query string variables and values
  // Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
  var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
  var queryVars = $.parseQuery( queryString );
 
  // if GET variable "v" exists. This is the Youtube Video ID
  if ( 'v' in queryVars )
  {
    // Prevent opening of external page
    e.preventDefault();
 
    // Variables for iFrame code. Width and height from data attributes, else use default.
    var vidWidth = 560; // default
    var vidHeight = 315; // default
    if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
    if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
    var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="http://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';
 
    // Replace Modal HTML with iFrame Embed
    $('#mediaModal .modal-body').html(iFrameCode);
    // Set new width of modal window, based on dynamic video content
    $('#mediaModal').on('show.bs.modal', function () {
      // Add video width to left and right padding, to get new width of modal window
      var modalBody = $(this).find('.modal-body');
      var modalDialog = $(this).find('.modal-dialog');
      var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
      newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
      newModalWidth += 'px';
      // Set width of modal (Bootstrap 3.0)
        $(this).find('.modal-dialog').css('width', newModalWidth);
    });
 
    // Open Modal
    $('#mediaModal').modal();
  }
});
 
// Clear modal contents on close. 
// There was mention of videos that kept playing in the background.
$('#mediaModal').on('hidden.bs.modal', function () {
  $('#mediaModal .modal-body').html('');
});
 
}); 














