/*
---------------------------------------------------------------------------------------
* Template Name             :                                                         *
* Author                    :                                                         *
* Version                   :                                                         *
* Design and Developed by   :                                                         * 
*--------------------------------------------------------------------------------------
NOTE: This file contains all scripts for the actual Template.
*/


/*==============================================
[  Table of contents  ]
================================================
	1). Back to top 
	2). WOW animation
	3). header fixed
	4). header dropdown menu
	5). Banner Slider 
	6). copyright Year
	7). android carousel
	8). Contact Icon 
	9). page scroll 
================================================
[ End table content ]
==============================================*/


/*=========================================================================
		1). Back to top    
=========================================================================*/
jQuery(document).ready(function($){	
	if ($("#back-to-top").length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $("#back-to-top").addClass("show");
	            } else {
	                $("#back-to-top").removeClass("show");
	            }
	        };
	    backToTop();
	    $(window).on("scroll", function () {
	        backToTop();
	    });
	    $('#back-to-top').on("click", function (e) {
	        e.preventDefault();
	        $("html,body").animate({
	            scrollTop: 0
	        }, 700);
	    });
	};
});

/*=========================================================================
	2). WOW animation   
=========================================================================*/
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         false        // default
})
wow.init();


/*=========================================================================
	3). header fixed
=========================================================================*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".fixed-top").addClass("header-animation");
    } else {
        $(".fixed-top").removeClass("header-animation");
    }
});

/*=========================================================================
	4). header dropdown menu
=========================================================================*/
$(function() { 
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).siblings().toggleClass("show");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
    });
});


/*=========================================================================
	5). Banner Slider  
=========================================================================*/

// $('.main-banner').owlCarousel({
// 	items: 1, 
// 	nav: false,
// 	dots: false,
// 	loop: true,
//     autoPlay: 300,
// 	autoplayTimeout:300,
// 	autoplayHoverPause:false,
// 	responsive: {
// 		0: {
// 			items: 1,
// 		},
// 		600: {
// 			items: 1,
// 		},
// 		1000: {
// 			items: 1
// 		},
// 		1200: {
// 			items: 1,
// 		}
// 	}
// });

 
var owl = $('.main-banner');
owl.owlCarousel({
	items: 1,
	loop: true, 
	autoplay: true,
	autoplayTimeout: 8000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1
		},
		1200: {
			items: 1,
		}
	}
});  


/*=========================================================================
	6).copyright Year   
=========================================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});


/*=========================================================================
	7). android carousel
=========================================================================*/
 $('.android-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: true,
	centerPadding: '0px',
    //centerMode: true,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnFocus: false,
	draggable: true, 
	speed: 500,
	fade: true,
	cssEase: 'linear',
    responsive: [{
            breakpoint: 1224,
            settings: {
                slidesToShow: 1
            }
        },
		{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, 
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


/*=========================================================================
	8). Contact Icon 
=========================================================================*/
jQuery(document).ready(function($){	
	$(".Address").hover(function() {
	 	if ($(".Address .location-icon img").hasClass("img")) {
	 		$(".Address .location-icon img").attr('src',"images/contact/location.png"); 
	 	} else {
	 		$(".Address .location-icon img").attr('src',"images/contact/location_active.png"); 
	 	}
	 	$(".Address .location-icon img").toggleClass('img'); 
	}); 
	$(".call").hover(function() {
	 	if ($(".call .location-icon img").hasClass("img")) {
	 		$(".call .location-icon img").attr('src',"images/contact/call.png"); 
	 	} else {
	 		$(".call .location-icon img").attr('src',"images/contact/call_active.png"); 
	 	}
	 	$(".call .location-icon img").toggleClass('img'); 
	}); 
	$(".mail").hover(function() {
	 	if ($(".mail .location-icon img").hasClass("img")) {
	 		$(".mail .location-icon img").attr('src',"images/contact/mail.png"); 
	 	} else {
	 		$(".mail .location-icon img").attr('src',"images/contact/mail_active.png"); 
	 	}
	 	$(".mail .location-icon img").toggleClass('img'); 
	}); 
});

/*=========================================================================
	9). page scroll
=========================================================================*/
$('a[href*=#]:not([href=#])').click(function() { 
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
}); 

 
