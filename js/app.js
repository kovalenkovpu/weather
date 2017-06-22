let app = angular.module('weatherApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'weatherController',
		templateUrl: 'views/main.html'
	})
	.when('/city/:id', {
		controller: 'cityController',
		templateUrl: 'views/city.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});