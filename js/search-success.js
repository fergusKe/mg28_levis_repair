(function($) {
	$(function() {
		slider()
	})

	function slider() {
		var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 18,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	}
})(jQuery)