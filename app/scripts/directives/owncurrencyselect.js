'use strict';

/**
 * @ngdoc directive
 * @name onlineCalculatorsApp.directive:ownCurrencySelect
 * @description
 * # ownCurrencySelect
 */
angular.module('onlineCalculatorsApp')
  .directive('ownCurrencySelect', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ownCurrencySelect directive');

      }
    };
  });
