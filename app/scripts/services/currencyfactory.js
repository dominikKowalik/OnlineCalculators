'use strict';

/**
 * @ngdoc service
 * @name onlineCalculatorsApp.currencyFactory
 * @description
 * # currencyFactory
 * Factory in the onlineCalculatorsApp.
 */
angular.module('onlineCalculatorsApp')
  .factory('currencyFactory', ['$http','$q', function ($http) {
    // Service logic
    // ...


    // Public API here
    return {
      rates: function (base) {
        console.log('rates');
       return $http.get('http://api.fixer.io/latest?base=' + base).then(function (response) {
          var data = response.data;
          console.log(data);
          return data;
        }, function (errorResponse) {
          console.log(errorResponse);
        })
      }
      ,
      specificRate: function (base, symbol) {
        console.log('specificRate');
       return $http.get('http://api.fixer.io/latest?symbols=' + symbol + '&base=' + base).then(function (response) {
          console.log(response.data);
          return response.data;
        }, function (errorResponse) {
          console.log(errorResponse);
         return $q.reject(errorResponse);
        })
      }

    };
  }]);
