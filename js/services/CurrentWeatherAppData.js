'use strict';

weatherApp.service('currentWeatherAppData', function ($resource, $q, $http) {

	var resource = $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&units=metric&APPID=e91d047936881c8d8bb518b45e246fa2', { city: '@city' });
	return {
		getCurrentWeatherData: function (city) {
			var deferred = $q.defer();

			resource.get({ city: city },
				function (data) {
					deferred.resolve(data);
				},
				function (response) {
					deferred.reject(response);
				});

			return deferred.promise;
		}

	};
	
	const API_URL = "https://webcamstravel.p.mashape.com/webcams/list/nearby={lat},{lng},{radius}?lang=en&show=webcams%3Aimage%2Clocation";

	this.getWebcam = () => {
		var defer = $q.defer();
		$http.get(API_URL)
		.header("X-Mashape-Key", "2AtEE5bqkpmshUgPjMHLYSngVcVIp1R5KhDjsnEb3tIR9UxNXR")
		.then((response) => {
			defer.resolve(response.data);
		}).catch((error) => {
			defer.reject(error.statusText);
		});
		return defer.promise;
	};

});