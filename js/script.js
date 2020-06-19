
var carouselStop;
var itemWidth;

function checkWidth(){
	var containerWidth = document.querySelector('.carousel-container').offsetWidth;
	itemWidth = document.querySelector('.articles-item').offsetWidth + 1;
	if (containerWidth < 539){
		carouselStop = itemWidth*3;
	} else if (containerWidth < 839){
		carouselStop = itemWidth*2;
	}
	else if (containerWidth < 999){
		carouselStop = itemWidth;
	}else{
		carouselStop = 0;
	};
};

var carouselTrack = document.querySelector('.carousel-track');
var carouselShift = 0;
var timer;

function autoCarousel(){
	timer = setTimeout(function (){
		checkWidth();
		carouselShift = carouselShift - itemWidth;
		if (carouselShift < -carouselStop){
			carouselShift = 0
			clearTimeout(timer);
		};
		carouselTrack.style.left = carouselShift + 'px';
		autoCarousel();
	},4000);
};

autoCarousel();