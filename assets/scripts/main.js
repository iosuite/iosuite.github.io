$(document).on('click', '#cssmenu > ul > li > a', function( e ) {
	
	e.preventDefault();

	var scrollToId = $(this).attr('href'),
		scrollFrom = $(document).scrollTop(),
		scrollTo = $( scrollToId ).offset().top,
		scrollPixelsPerSecond = 500,
		scrollRate = 0;

	scrollRate = ( Math.abs( scrollTo - scrollFrom ) / scrollPixelsPerSecond ) * 1000;

	$('html, body').animate({
        scrollTop: scrollTo
    }, scrollRate);

	$('#cssmenu li').removeClass('active');
	$(this).closest('li').addClass('active');	

	var checkElement = $(this).next();
	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		checkElement.slideUp('normal');
	}
	
	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#cssmenu ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
	}

	if($(this).closest('li').find('ul').children().length == 0) {
		return true;
	} else {
		return false;	
	}

});

$(document).ready(function(){
	
	
});