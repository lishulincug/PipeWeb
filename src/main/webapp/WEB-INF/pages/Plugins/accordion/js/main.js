(function(factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], function($) {
      return factory($, window, document);
    });
  } else {
    return factory(jQuery, window, document);
  }
})(function($, window, document) {

	$('.cd-accordion-menu').on('change', 'input[type="checkbox"]', function(){
		var checkbox = $(this);
		//console.log(checkbox.prop('checked'));
		( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
	});
});