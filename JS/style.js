
$('.center').slick({
  centerMode: true,
  touchMove: true,
  centerPadding: '60px',
  slidesToShow: 1,
  dots: true,
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
