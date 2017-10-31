'use strict';

const weatherApp = angular.module('weatherApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/currentWeather', {
			templateUrl:'templates/currentWeather.html',
			controller:'currentWeatherController'
		});
		
		$routeProvider.otherwise({redirectTo:'/currentWeather'});
		
	});
