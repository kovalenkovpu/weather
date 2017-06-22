app.controller('weatherController', ['$scope', '$routeParams', 'weatherData', function($scope, $routeParams, weatherData) {
	weatherData.getData.then(function(data) {
		$scope.data = data;
	});
}]);