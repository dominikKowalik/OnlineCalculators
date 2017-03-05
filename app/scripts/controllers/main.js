'use strict';

/**
 * @ngdoc function
 * @name onlineCalculatorsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineCalculatorsApp
 */
angular.module('onlineCalculatorsApp')
  .controller('MainCtrl', ['currencyFactory', '$scope', function (currencyFactory, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //creating array with currency names that fill in selectboxes
    $scope.currencies = ['PLN', 'EUR', 'USD', 'CZK', 'CAD']
    $scope.selectedOwnCurrency = $scope.currencies[0];
    $scope.selectedForeignCurrency = $scope.currencies[1];
    $scope.exchangedAmount = 0;
    $scope.amount = 0;

    $scope.calculate = function (base, symbol) {
      currencyFactory.specificRate(base, symbol).then(function (payload) {
        //first value in rates array is wanted rate because there
        // is only one parameter symbol so in response there is only one rate
        var obj = payload.rates;
        var value;

        for(var key in obj){
          console.log(key);
          console.log(obj);
          console.log(obj[key]);
          value = obj[key];
          break;
        }

        console.log(payload.rates);
        $scope.exchangedAmount = parseFloat($scope.amount * value).toFixed(3);
        console.log($scope.exchangedAmount);
      }, function (errorPayload) {
        console.log('error' + errorPayload);
      })
    }
  }]);
