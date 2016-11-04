var main = function() {
	$('.menu_open').click(function() {
		$('.menu_bar').animate({
			left: "-1px"
		}, 300);
		
		$('.main_wrapper').animate({
			left: "218px"
		}, 300);
		
		$('.menu_open').animate({
			left: "218px"
		}, 300);
		
		$('body').animate({
			left: "218px"
		}, 300);
	});
	
	$('.menu_close').click(function() {
		$('.menu_bar').animate({
			left: "-221px"
		}, 300);
		
		$('.main_wrapper').animate({
			left: "0px"
		}, 300);
		
		$('.menu_open').animate({
			left: "0px"
		}, 300);
		
		$('body').animate({
			left: "0px"
		}, 300);
	});
	
	$('.presentation_element_nobg_main h1').fadeIn(1000);
	$('.presentation_element_nobg_main h2').fadeIn(3800);
	$('.presentation_element_nobg_main h3').fadeIn(5100);
	
};

$(document).ready(main);