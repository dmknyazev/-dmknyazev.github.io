$(function(){

      $('.slider__list').slick({
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
               breakpoint: 991,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
            }
        },
    ],
      });

      if (document.body.clientWidth < 991) {
        let reviewsItemActive = document.querySelector('.reviews__item--active');
      
        if (reviewsItemActive.classList.contains('reviews__item--active')) {
          reviewsItemActive.classList.remove('reviews__item--active');
        }
      }

      
  
    $('.navbar__toggle').on('click', function(){
      $('.navbar__wrapper .site-list').slideToggle();
    });
  
});