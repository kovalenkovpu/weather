app.controller('weatherController', ['$scope', 'weatherData', '$resource', function($scope, weatherData, $resource) {
	
	let api = weatherData.api;
	
	$scope.city = weatherData.city;

	$scope.$watch('city', () => {
		weatherData.city = $scope.city;
	});

	$scope.resourceAPI = $resource(api, { get: {method: "JSONP"}});

	$scope.getCurrentForecast = function() {
		$scope.httpData = $scope.resourceAPI.get({ q: $scope.city});
	};

	$scope.convertTemp = function(temp) {
		return (temp - 273.15).toFixed(2);
	};
	
	$scope.convertDate = function(date) {
		return new Date(date * 1000);
	};
}]);