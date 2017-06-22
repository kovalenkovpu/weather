app.factory('weatherData', ['$http', function($http) {
	let dataPromise = $http.get('/data/data.json')
		.then
			(function(response) {
    			return response.data;
  			});

  	return {
  		getData: dataPromise
  	};
}]);