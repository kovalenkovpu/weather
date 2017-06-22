app.directive('weatherBlock', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/weatherBlock.html'
	};
});