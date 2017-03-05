'use strict';

describe('Directive: ownCurrencySelect', function () {

  // load the directive's module
  beforeEach(module('onlineCalculatorsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<own-currency-select></own-currency-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ownCurrencySelect directive');
  }));
});
