app.service('weatherData', [function() {
	this.api = '//api.openweathermap.org/data/2.5/weather?APPID=f014a10f31104549ece104488875b27b';

	this.apiFiveDay = '//api.openweathermap.org/data/2.5/forecast?APPID=f014a10f31104549ece104488875b27b';

	this.city = 'Moscow';
}]);