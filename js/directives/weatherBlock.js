app.directive('weatherBlock', function() {
	return {
		restrict: 'E',
		scope: {
			httpdata: '=',
			convertDate: '&',
			convertTemp: '&'
		},
		templateUrl: 'js/directives/weatherBlock.html'
	};
});