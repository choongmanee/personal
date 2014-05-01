(function ($) {
	$( '#dl-menu' ).dlmenu();
	$('ul.dl-menu li a').smoothScroll();

	$('#name').fitText(1.1, { minFontSize: '28px', maxFontSize: '48px' });

	$('#subtitle').fitText(1.5, { minFontSize: '10px', maxFontSize: '24px' });

	//animation
	new WOW().init();
})(jQuery);