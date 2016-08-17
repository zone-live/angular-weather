'use strict';

angular.module('coolApp', ['weatherBlock', 'ui.bootstrap', 'ngSanitize', 'ui.select', 'ngAnimate', 'ngRoute'])

//Scroll to section (href) directive
.directive('scrollOnClick', function() {
	return {
		restrict: 'A',
		link: function(scope, $elm) {
			$elm.on('click', function(event) {
			    event.preventDefault();
			    $('html, body').animate({
			        scrollTop: $( $.attr(this, 'href') ).offset().top
			    }, 500);
			});
		}
	}
});