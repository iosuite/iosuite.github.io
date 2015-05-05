var home = 0,
	installation = 0,
	useage = 0,
	contact = 0,
	license = 0,
	scrolling = false;

$(document).on('click', '#cssmenu > ul > li > a', function( e ) {
	
	e.preventDefault();
	scrolling = true;
	var scrollToId = $(this).attr('href'),
		scrollFrom = $(document).scrollTop(),
		scrollTo = $( scrollToId ).offset().top,
		scrollPixelsPerSecond = 1500,
		scrollRate = 0;

	scrollRate = ( Math.abs( scrollTo - scrollFrom ) / scrollPixelsPerSecond ) * 1000;

	$('html, body').animate({
        scrollTop: scrollTo
    }, scrollRate, function(){
    	scrolling = false;
    });

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
	
	installation = $('#installation').offset().top;
	useage = $('#useage').offset().top;
	contact = $('#contact').offset().top;
	license = $('#license').offset().top;

});

$(document).on('scroll', function(e){
	if( scrolling ) {
		return false;
	}
	var curScroll = $(document).scrollTop();

	if( curScroll >= 0 && curScroll < installation ) {
		if( !$('a[href="#home"]').closest('li').hasClass('active') ) {
			$('li.active').removeClass('active');
			$('a[href="#home"]').closest('li').addClass('active');
		}
	} else if( curScroll >= installation && curScroll < useage ) {
		if( !$('a[href="#installation"]').closest('li').hasClass('active') ) {
			$('li.active').removeClass('active');
			$('a[href="#installation"]').closest('li').addClass('active');
		}
	} else if( curScroll >= useage && curScroll < contact ) {
		if( !$('a[href="#useage"]').closest('li').hasClass('active') ) {
			$('li.active').removeClass('active');
			$('a[href="#useage"]').closest('li').addClass('active');
		}
	} else if( curScroll >= contact && curScroll < license ) {
		if( !$('a[href="#contact"]').closest('li').hasClass('active') ) {
			$('li.active').removeClass('active');
			$('a[href="#contact"]').closest('li').addClass('active');
		}
	} else if( curScroll >= license ) {
		if( !$('a[href="#license"]').closest('li').hasClass('active') ) {
			$('li.active').removeClass('active');
			$('a[href="#license"]').closest('li').addClass('active');
		}
	}
});