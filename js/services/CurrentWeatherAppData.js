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

});