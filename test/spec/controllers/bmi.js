'use strict';

describe('Controller: BmiCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineCalculatorsApp'));

  var BmiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BmiCtrl = $controller('BmiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BmiCtrl.awesomeThings.length).toBe(3);
  });
});
