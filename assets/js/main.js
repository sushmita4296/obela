$(document).ready(function () {

  // isotope start
  var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })

    $('.portfolio-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    // menu active
    $('.button-group > button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
  });
 // isotope end



  // slick slider
  $('.testimonial-active').slick({
    infinite: true,
    arrows:false,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1
  });



  $('.logo-slider-active ').slick({
    infinite: true,
    arrows:false,
    autoplay:true,
    autoplatSpeed:2000,
    slidesToShow: 5,
    slidesToScroll: 5
  });


  // counter up

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


})