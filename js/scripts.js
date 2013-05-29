// Load scripts after page loads
$(document).ready(function(){

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

	$('.tooltip').tooltipster();

	$('.next').click(function(){
		$('.lib-active').find('.active').removeClass('active').next().addClass('active');
	});

});