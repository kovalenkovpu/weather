app.controller('cityController', ['$scope', '$routeParams', 'weatherData', function($scope, $routeParams, weatherData) {
	$scope.cityId = $routeParams.id;
	$scope.cityData = {};

	weatherData.getData.then(function(data) {
		for (let i = 0; i < data.length; i++) {
			for (let key in data[i]) {
				if (data[i][key] == $scope.cityId) {
					$scope.cityData = data[i];
					break;
				}
			}
		}
	});
}]);