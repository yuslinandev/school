$(document).ready(function(){

	"use strict";
	
    // CAROUSEL BANNER
	var slides = $(".carousel-sliders"),
    b = slides.find('.item');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({
			'background-image': 'url(' + ocImg + ')', 
			'background-size': 'cover', 
			'background-position': 'center'}
		);
    });

    slides.owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'flipInX',
	    loop: true,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	// CAROUSEL TESTIMONIALS
	$(".carousel-testimonials").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1
	});
});