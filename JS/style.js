
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
        }
      }
    ]
  });


/* * * * * Slick Arrows Position * * * * */
  // Probably very inefficient but works for now.


  $(window).on("load resize", function() {
    var prev = $('.slick-prev');
    var next = $('.slick-next');
    var thumb = $('.slider-img-thumb > img');
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

/* * * * * More Info Ajax Call * * * * */

  var getMovie = function() {
    var $movieID = $('.row .slick-active').attr('id');
    $.ajax({    
      data:  {
        idIMDB: $movieID
      },
      method: 'GET',
      url:        'http://www.myapifilms.com/id?format=jsonp',
      dataType: "jsonp",
      success: function (response) {
        var directors = response.directors[0].name;
        var rd = response.releaseDate.split("");
        var rdMonth = rd[4]+rd[5];
        var rdDay = rd[6]+rd[7];
        if (rdMonth === "01") {
          rdMonth = "January"
        } else if (rdMonth === "02") {
          rdMonth = "February"
        } else if (rdMonth === "03") {
          rdMonth = "March"
        } else if (rdMonth === "04") {
          rdMonth = "April"
        } else if (rdMonth === "05") {
          rdMonth = "May"
        } else if (rdMonth === "06") {
          rdMonth = "June"
        } else if (rdMonth === "07") {
          rdMonth = "July"
        } else if (rdMonth === "08") {
          rdMonth = "August"
        } else if (rdMonth === "09") {
          rdMonth = "September"
        } else if (rdMonth === "10") {
          rdMonth = "October"
        } else if (rdMonth === "11") {
          rdMonth = "November"
        } else {
          rdMonth = "December"
        };
        var releaseDate = rdMonth + " " + rdDay;
        var rating = response.rating;
        var year = response.year;
/* * * * * Multiple Writers Fix * * * * */
        if (response.writers.length === 2) {
/* * * * * Content Concatenation * * * * */
          responseContent = ("<h3>Director:<small>&nbsp; "
                            +directors+
                            "</small></h3><h3>Writers:<small>&nbsp; "
                            +response.writers[0].name+
                            ", "
                            +response.writers[1].name+
                            "</small></h3><h3>Release Date:<small>&nbsp; "
                            +releaseDate+
                            "</small></h3><h3>IMDB Rating:<small>&nbsp; "
                            +rating+
                            "</small></h3><h3>Year:<small>&nbsp; "
                            +year+
                            "</small></h3>");
        } else {
          responseContent = ("<h3>Director:<small>&nbsp; "
                            +directors+
                            "</small></h3><h3>Writers:<small>&nbsp; "
                            +response.writers[0].name+
                            "</small></h3><h3>Release Date:<small>&nbsp; "
                            +releaseDate+
                            "</small></h3><h3>IMDB Rating:<small>&nbsp; "
                            +rating+
                            "</small></h3><h3>Year:<small>&nbsp; "
                            +year+
                            "</small></h3>");
        };
        $('.modal-body').html(responseContent);
      }
    });
  };

  /* * * * * Event call and reset to "loading" * * * * */
  $('.info-button').on('click', function () {
    getMovie();
  }).on('focusout', function() {
    $('.modal-body').html("<h2>Loading...</h2>");
  });


/* * * * * Borrowed code via Matt Snider for bootstrap modal youTube * * * * */

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
/* * * * * jQueryUI tabs and accordion initialization * * * * */

  $( "#v8-showtimes" ).accordion();
  $( "#ba-showtimes" ).accordion();
  $( "#tabs" ).tabs();

  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
      $( this ).addClass( "ui-state-hover" );
    },
    function() {
      $( this ).removeClass( "ui-state-hover" );
    }
  );









