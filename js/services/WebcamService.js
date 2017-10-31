'use strict';

angular.module('weatherApp')

  .service('WebcamService', function ($http, $q) {

    const API_URL = ('https://webcamstravel.p.mashape.com/webcams/list/country=FR?lang=en&show=webcams%3Aimage%2Clocation')
    
    this.getWebcam = () => {
      var defer = $q.defer();
      $http.get(API_URL, {
        headers: {'X-Mashape-Key': '2AtEE5bqkpmshUgPjMHLYSngVcVIp1R5KhDjsnEb3tIR9UxNXR'}
      }).then((response) => {
        defer.resolve(response.data.result.webcams);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    };
  });
  'use strict';
  
  angular.module('app')
  
  .service('WeatherService', function ($http, $q) {
  
  const KEY = 'e91d047936881c8d8bb518b45e246fa2';
  
  this.getCity = (city) => {
  let defer = $q.defer();
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`;
  
  $http.get(API_URL).then((response) => {
  defer.resolve(response.data);
  }).catch((error) => {
  defer.reject(error.statusText);
  });
  return defer.promise;
  }
  });