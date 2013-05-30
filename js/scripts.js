// Load scripts after page loads
$(document).ready(function(){

	$('.introduction').fadeIn(800);
	$('.close').click(function(){
		$('.introduction').fadeOut();
		return false;
	});

	// Deck Animation

	$('.more.closed').on("click", function(){
		$(this).stop().animate({
			bottom: '240px'
		});
		$('.deck').stop().animate({
			bottom: '0'
		});
		$(this).removeClass('closed');
		$(this).addClass('open');
		return false;
	});

	$('.more.open').on("click", function(){
		$(this).stop().animate({
			bottom: '0px'
		});
		$('.deck').stop().animate({
			bottom: '-240px'
		});
		$(this).removeClass('open');
		$(this).addClass('closed');
		return false;
	});

	// Tooltips

	$('.tooltip').tooltipster({
		arrow: false
	});

	// Grade Nav
	
	$('.grade-nav-li').click(function(){
		$('.introduction').fadeOut();
		$('.grade-nav').children('li').removeClass('g-active');
		$('.library').children('ul').removeClass('lib-active');
		$(this).addClass('g-active');
		$('.active').removeClass('active');

		if ($(this).is($('.gradea-nav'))) {
			$('.gradea-lib').addClass('lib-active');
		}
		if ($(this).is($('.gradeb-nav'))) {
			$('.gradeb-lib').addClass('lib-active');
		}
		if ($(this).is($('.gradec-nav'))) {
			$('.gradec-lib').addClass('lib-active');
		}
		if ($(this).is($('.graded-nav'))) {
			$('.graded-lib').addClass('lib-active');
		}
		if ($(this).is($('.gradef-nav'))) {
			$('.gradef-lib').addClass('lib-active');
		}

		$('.lib-active').children(':first-child').addClass('active');
	});

	// Directional Nav

	$('ul').children('li').click(function(){
		$('.introduction').fadeOut();
		if ($('.active').is(':last-child')) {
			$('.active').removeClass('active');
			$('.lib-active').children(':first-child').addClass('active');
		} else {
			$('.active').removeClass('active').next().addClass('active');
		}		
	});

	$('.next').click(function(){
		$('.introduction').fadeOut();
		if ($('.active').is(':last-child')) {
			$('.active').removeClass('active');
			$('.lib-active').children(':first-child').addClass('active');
		} else {
			$('.active').removeClass('active').next().addClass('active');
		}		
	});

	$('.prev').click(function(){
		$('.introduction').fadeOut();
		if ($('.active').is(':first-child')) {
			$('.active').removeClass('active');
			$('.lib-active').children(':last-child').addClass('active');
		} else {
			$('.active').removeClass('active').prev().addClass('active');
		}
	});

});