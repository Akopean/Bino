$('.portfolio-footer__element').hover(function() {
	$($(this)).children('.portfolio-element__info').removeClass('hidden');
}, function() {
	$(this).children('.portfolio-element__info').addClass('hidden');
});

$('.team-member__block>.team-member').hover(function(){
	$(this).stop(true);
	$(this).animate({
		width: 80,
		height: 80,
		borderRadius: 70,
		boxShadow : "0 6px 16px 3px black",
	},500);
}, function(){
	$(this).stop(true);
	$(this).animate({
		width: 57,
		height: 57,
		borderRadius: 30,

	},500);
});

$(document).ready(function(){
    $('a[href^="#"]').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
