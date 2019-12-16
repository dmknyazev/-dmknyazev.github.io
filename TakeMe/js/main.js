$(function () {

  let menuToggle = document.querySelector('.main-nav__toggle'),
    nav = document.querySelector('.main-nav');


  menuToggle.addEventListener('click', function () {
    if (nav.classList.contains('main-nav--closed')) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--opened');
    } else {
      nav.classList.remove('main-nav--opened');
      nav.classList.add('main-nav--closed');
    }
  });

  $('.hero-form__select').styler();

  $('.location__slider-list').slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    arrows: false,
    dots: true,
    variableWidth: true,


    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]
  });


  $('.activities__list').slick({

    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ]

  });

  let reviewsSortBtn = document.querySelectorAll('.sort-btn'),
      reviewsSortList = document.querySelector('.reviews-sort__list');

  reviewsSortBtn[0].addEventListener('click', function() {

    if (reviewsSortList.classList.contains('dn')) {
      reviewsSortList.classList.remove('dn');
      reviewsSortList.classList.add('db');
    } else {
      reviewsSortList.classList.remove('db');
      reviewsSortList.classList.add('dn');
    };
  });


  let placeBarList = document.querySelector('.place-bar__list');

  reviewsSortBtn[1].addEventListener('click', function() {

    if (placeBarList.classList.contains('dn')) {
      placeBarList.classList.remove('dn');
      placeBarList.classList.add('db');
    } else {
      placeBarList.classList.remove('db');
      placeBarList.classList.add('dn');
    };
  });

  let toursTripTitle = document.querySelector('.tours-trip__title'),
      toursTripSelect = document.querySelector('.tours-trip__select'),
      toursDestinationsTitle = document.querySelector('.tours-destinations__title'),
      toursDestinationsCheckbox = document.querySelector('.tours-destinations__checkbox');

  toursDestinationsTitle.addEventListener('click', function() {

    if (toursDestinationsCheckbox.classList.contains('active')) {
      toursDestinationsCheckbox.classList.remove('active');
      toursDestinationsCheckbox.classList.add('not-active');
    } else {
      toursDestinationsCheckbox.classList.remove('not-active');
      toursDestinationsCheckbox.classList.add('active');
    }
  });

  toursTripTitle.addEventListener('click', function() {

    if (toursTripSelect.classList.contains('active')) {
      toursTripSelect.classList.remove('active');
      toursTripSelect.classList.add('not-active');
    } else {
      toursTripSelect.classList.remove('not-active');
      toursTripSelect.classList.add('active');
    }
  });

  let toursPriceTitle = document.querySelector('.tours-price__title'),
      toursPriceRange = document.querySelector('.tours-price__range');
    
      toursPriceTitle.addEventListener('click', function() {

        if (toursPriceRange.classList.contains('active')) {
          toursPriceRange.classList.remove('active');
          toursPriceRange.classList.add('not-active');
        } else {
          toursPriceRange.classList.remove('not-active');
          toursPriceRange.classList.add('active');
        }
      });
});