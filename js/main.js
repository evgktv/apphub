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


////MENU FIXED
//
//
//var hd1 = 0;
//var h2 = 0;
//var menuID = "menuID";
//var header = document.querySelector('.header');
//
//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//    hd = document.documentElement.clientHeight;
//    header.style.height       = hd + "px";
//}
//
//
//function getScrollTop() {
//    var scrollOfY = 0;
//
//    if (typeof (window.pageYOffset) == "number") {
//        scrollOfY = window.pageYOffset;
//    }
//    else if (document.body && document.body.scrollTop) {
//        scrollOfY = document.body.scrollTop;
//    }
//    else if (document.documentElement && document.documentElement.scrollTop) {
//        scrollOfY = document.documentElement.scrollTop;
//    }
//    return scrollOfY;
//}
//
//function marginMenuTop() {
//    var top  = getScrollTop();
//    var s    = document.getElementById(menuID);
//    if(typeof s != "undefined" && s){
//        if (top+h2 < h1) {
//            s.style.top       = (h1-top) + "px";
//        } else {
//            s.style.top       = h2 + "px";
//        }
//    }
//}
//
//function setMenuPosition(){
//    if(typeof window.addEventListener != "undefined"){
//        window.addEventListener("scroll", marginMenuTop, false);
//    } else if(typeof window.attachEvent != "undefined"){
//        window. attachEvent("onscroll", marginMenuTop);
//    }
//    marginMenuTop();
//};
//
//if(typeof window.addEventListener != "undefined"){
//    window.addEventListener("load", setMenuPosition, false);
//} else if(typeof window.attachEvent != "undefined"){
//    window. attachEvent("onload", setMenuPosition);
//}
//
//
//go();
//window.addEventListener('resize', go);
//
//function go(){
//    h1 = document.documentElement.clientHeight;
//
//    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//        hd = document.documentElement.clientHeight;
//        header.style.height       = hd + "px";
//    }
//    setMenuPosition();
//}
