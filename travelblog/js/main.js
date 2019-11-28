$(function(){

	'use strict';

	let searchWrapper = document.querySelector('.search'),
		searchForm = document.querySelector('.search__form');

	searchWrapper.addEventListener('click', function() {
		
		if (searchForm.classList.contains('no-active')) {
			searchForm.classList.remove('no-active')
			searchForm.classList.add('active');
		} else {
			searchForm.classList.remove('active');
			searchForm.classList.add('no-active');
		}
	});

  $('.slider__list').slick({
  	arrows: false,
    infinite: false,
    dots: true
  });

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });


});