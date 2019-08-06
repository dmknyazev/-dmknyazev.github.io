'use strict';

let slideIndex = 1,
	slides = document.querySelectorAll('.slider__item'),
	dotsWrap = document.querySelector('.slider__toggles'),
	dot = document.querySelectorAll('.slider__toggle');

showSlides(slideIndex);
function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	slides.forEach((item) => item.style.display = 'none');

	dot.forEach((item) => item.classList.remove('slider__toggle--active'));

	slides[slideIndex - 1].style.display = 'block';
	dot[slideIndex - 1].classList.add('slider__toggle--active');
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < dot.length + 1; i++) {
		if (event.target.classList.contains('slider__toggle') && event.target == dot[i-1]) {
			currentSlide(i);
		}
	}
});



let reviewsBlock = document.querySelector('.reviews');

dot[0].addEventListener('click', function() {
	reviewsBlock.style.backgroundImage = 'url(img/reviews-bg1.jpg)'
});

dot[1].addEventListener('click', function() {
	reviewsBlock.style.backgroundImage = 'url(img/reviews-bg2.jpg)'
});

dot[2].addEventListener('click', function() {
	reviewsBlock.style.backgroundImage = 'url(img/reviews-bg3.jpg)'
});



let navToggle = document.querySelector('.main-nav__toggle'),
	mainNav = document.querySelector('.main-nav'),
	siteList = document.querySelector('.site-list');

navToggle.addEventListener('click', function() {
	if(mainNav.classList.contains('main-nav--closed')) {
		mainNav.classList.remove('main-nav--closed');
		mainNav.classList.add('main-nav--opened');
	} else {
		mainNav.classList.remove('main-nav--opened');
		mainNav.classList.add('main-nav--closed');

	}
});