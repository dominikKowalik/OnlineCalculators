'use strict';

/**
 * @ngdoc overview
 * @name onlineCalculatorsApp
 * @description
 * # onlineCalculatorsApp
 *
 * Main module of the application.
 */
angular
  .module('onlineCalculatorsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).when('/bmi',{
      templateUrl:'views/bmi.html',
      controller:'BmiCtrl',
      controllerAs:'bmi'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
