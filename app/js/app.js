$('.portfolio-footer__element').hover(function() {
	$($(this)).children('.portfolio-element__info').removeClass('hidden');
}, function() {
	$(this).children('.portfolio-element__info').addClass('hidden');
});
