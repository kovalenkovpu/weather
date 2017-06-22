app.controller('cityController', ['$scope', '$routeParams', 'weatherData', '$resource', function($scope, $routeParams, weatherData, $resource) {
	
	let api = weatherData.apiFiveDay,
		city = weatherData.city;

	//$scope.cityId = $routeParams.id;

	$scope.cityData = null;

	$scope.resourceAPI = $resource(api, { get: {method: "JSONP"}});

	$scope.cityData = $scope.resourceAPI.get({ q: city});

	$scope.convertTemp = function(temp) {
		return (temp - 273.15).toFixed(2);
	};

	$scope.convertDate = function(date) {
		return new Date(date * 1000);
	};
}]);