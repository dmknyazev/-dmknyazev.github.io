'use strict';

let navToggle = document.querySelector('.main-nav__toggle'),
	mainNav = document.querySelector('.main-nav'),
	siteList = document.querySelector('.site-list');


	console.log(navToggle);
	console.log(mainNav);

navToggle.addEventListener('click', function() {
	if (mainNav.classList.contains('main-nav--closed')) {
		mainNav.classList.remove('main-nav--closed');
		mainNav.classList.add('main-nav--opened')
		siteList.style.display = 'block';
	} else {
		mainNav.classList.remove('main-nav--opened')
		mainNav.classList.add('main-nav--closed');
		siteList.style.display = 'none';
	}
});


// modal

let appointmentBtn = document.querySelectorAll('.btn'),
	modalAppointment = document.querySelector('.modal-appointment'),
	closeModal = document.querySelector('.appointment-form__modal-close'),
	btnsWrapper = document.querySelector('.price__list');

btnsWrapper.addEventListener('click', function(event) {
	if (event.target && event.target.tagName == 'BUTTON') {
		modalAppointment.classList.remove('hide-modal');
		modalAppointment.classList.add('show-modal');
	}
});

closeModal.addEventListener('click', function() {
	modalAppointment.classList.remove('show-modal')
	modalAppointment.classList.add('hide-modal');
});



// slider

let slideIndex = 1,
	slides = document.querySelectorAll('.slider__item'),
	prevSlide = document.querySelector('.reviews__prev'),
	nextSlide = document.querySelector('.reviews__next'),
	dotsWrap = document.querySelector('.slider__toggles'),
	dots = document.querySelectorAll('.slider__toggle');

showSlides(slideIndex);
function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	slides.forEach((item) => item.style.display = 'none');

	dots.forEach((item) => item.classList.remove('slider__toggle--active'));

	slides[slideIndex - 1].style.display = 'flex';
	dots[slideIndex - 1].classList.add('slider__toggle--active');

}

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

prevSlide.addEventListener('click', function() {
	plusSlides(-1);
});

nextSlide.addEventListener('click', function() {
	plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('slider__toggle') && event.target == dots[i-1]) {
			currentSlide(i);
		}
	}
});

// 	dotsWrap.addEventListener('click', function(event) {
// 		for (let i = 0; i < dots.length + 1; i++) {
// 			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
// 				currentSlide(i);
// 			}
// 		}
// 	});

