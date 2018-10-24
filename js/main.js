//MENU MOBILE
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navItem = document.querySelectorAll('.main-nav__item');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');

        navItem.forEach(function (item, i) {

            item.addEventListener("click", function (event) {

                navMain.classList.add('main-nav--closed');
            })
        })
    navMain.style.backgroundColor = "rgba(0,0,0,1)";
    }
    else {
        navMain.classList.add('main-nav--closed');
          if (window.pageYOffset < 40)
            navMain.style.backgroundColor = "rgba(0,0,0,0.1)";
    };
});

// MENU OPACITY

window.addEventListener("scroll", changeOpacityMenu);

function changeOpacityMenu() {

	if (window.innerWidth > 767) {
		if (window.pageYOffset > 40) {
    		navMain.style.backgroundColor = "rgba(0,0,0,0.8)";
    			}
    	else {
    			navMain.style.backgroundColor = "rgba(0,0,0,0.1)";
    	};
	}
	else {
		if (window.pageYOffset > 40) {
      		navMain.style.backgroundColor = "rgba(0,0,0,0.8)";
      			}
      	else {
      			if (navMain.classList.contains('main-nav--closed')) {
      			  navMain.style.backgroundColor = "rgba(0,0,0,0.1)";
      			}
      	};
	};
};

// SLIDER PLATFORM BG

var sliderBox = document.querySelector('.platform__slider-box');
var sliderItem = document.querySelectorAll('.platform__item');
var radioSlider = document.querySelectorAll('.radio-slide');
var customRadioSlider = document.querySelectorAll('.radio-custom');
var textSlide = document.querySelectorAll('.platform__info');
var overlaySlide = document.querySelectorAll('.platform__item-overlay');
var platformImage = document.querySelectorAll('.platform__image');

var sliderArrLeft = document.querySelector('.platform__slide-change--left');
var sliderArrRight = document.querySelector('.platform__slide-change--right');

var numItemChecked = 0;
var intervalSlider;

sliderBox.classList.remove('platform--nojs');
sliderArrLeft.classList.remove('platform--nojs');
sliderArrRight.classList.remove('platform--nojs');


sliderItem[numItemChecked].style.display = 'flex';

setTimeout(function() {
	overlaySlide[numItemChecked].style.opacity = 1
	}, 44);

textSlide[numItemChecked].style.marginLeft = 0 + 'px';

if (window.innerWidth >= 960) {
	platformImage[numItemChecked].style.width = 33 + '%';
} else
		if (window.innerWidth > 639) {
			platformImage[numItemChecked].style.width = 30 + '%';
		}

changeSlideInterval();

function checkRadio() {
	radioSlider.forEach(function(radioSlider,j) {

		if (radioSlider.checked) {
//			console.log(j)
		}
	})
}
checkRadio();

var isEven = function(Num) {
  return (Num % 2 == 0) ? true : false;
};

sliderArrRight.addEventListener('click', function (event) {
	event.preventDefault();

	if (radioSlider[radioSlider.length-1].checked == false) {
		event.preventDefault();
		var nextSlide = numItemChecked + 1;
		changeSlide(nextSlide);
	};
	clearInterval(intervalSlider);
	changeSlideInterval();
})

sliderArrLeft.addEventListener('click', function (event) {

	if (radioSlider[0].checked == false) {
		event.preventDefault();
		var prevSlide = numItemChecked - 1;
		changeSlide(prevSlide);
	};
		clearInterval(intervalSlider);
  	changeSlideInterval();
})

customRadioSlider.forEach(function(customRadioSlider,i) {

	customRadioSlider.addEventListener('click', function (event) {
		event.preventDefault();
		changeSlide(i);
		clearInterval(intervalSlider);
  	changeSlideInterval();
	})
})

function changeSlideInterval() {
		intervalSlider = setInterval(function(){
		var nextSlide = numItemChecked + 1;

		if (numItemChecked == (sliderItem.length-1)) {
			nextSlide = 0;
		};
		changeSlide(nextSlide);
		}, 6000);
}

function changeSlide(newSlide, marginOut, swipe) {
		clearTimeout(timeoutID_1);
  	clearTimeout(timeoutID_2);
    clearTimeout(timeoutID_3);
    clearTimeout(timeoutID_4);

		if (radioSlider[newSlide].checked == false) {

			overlaySlide[numItemChecked].style.opacity = 0;
			platformImage[numItemChecked].style.width = 0;

			radioSlider[numItemChecked].checked = false;

			if (swipe) {
				textSlide[numItemChecked].style.marginLeft = marginOut + 'px';
				textSlide[newSlide].style.marginLeft = -marginOut + 'px';
			}
			else {
				if (isEven(numItemChecked)) {
          textSlide[numItemChecked].style.marginLeft = 700 + 'px';
          } else {
              textSlide[numItemChecked].style.marginLeft = -700 + 'px';
          }
				}

			var timeoutID_4 = setTimeout(function() {
				sliderItem[newSlide].style.display = 'flex';
      }, 400);

   		var timeoutID_1 = setTimeout(function() {

        overlaySlide[newSlide].style.opacity = 1;
        if (window.innerWidth >= 960) {
        	platformImage[newSlide].style.width = 33 + '%';
        } else
        		if (window.innerWidth > 639) {
        			platformImage[newSlide].style.width = 30 + '%';
        		}

       textSlide[newSlide].style.marginLeft = 0 + 'px';
      }, 500);

			var timeoutID_2 = setTimeout(function() {
        sliderItem[numItemChecked].style.display = 'none';
        if (swipe) {
          if (isEven(numItemChecked)) {
            textSlide[numItemChecked].style.marginLeft = 700 + 'px';
          } else {
              textSlide[numItemChecked].style.marginLeft = -700 + 'px';
          }
        }
      }, 500);

      radioSlider[newSlide].checked = true;


			var timeoutID_3 = setTimeout(function() {
    	  numItemChecked = newSlide;
			}, 600);
		}
}

// SLIDER CHANGE TOUCH

var initialPoint;
var finalPoint;

sliderBox.addEventListener('touchstart', function(event) {
	event.preventDefault();
	event.stopPropagation();
	initialPoint = event.changedTouches[0].pageX;
}, false);

sliderBox.addEventListener('touchend', function(event) {
	event.preventDefault();
	event.stopPropagation();
	finalPoint = event.changedTouches[0].pageX;
	var xAbs = Math.abs(initialPoint - finalPoint);

	if (xAbs > 20) {
		if (finalPoint < initialPoint){

			var prevSlide = numItemChecked - 1;

			if (radioSlider[0].checked == true) {
  		  prevSlide = radioSlider.length-1;
  	  };

			changeSlide(prevSlide, -700, 1);
			clearInterval(intervalSlider);
      changeSlideInterval();
		}
		else {
			var nextSlide = numItemChecked + 1;

			if (radioSlider[radioSlider.length-1].checked == true) {
        nextSlide = 0;
      };

			changeSlide(nextSlide, 700, 1);
			clearInterval(intervalSlider);
  	  changeSlideInterval();
			}
		}
}, false);