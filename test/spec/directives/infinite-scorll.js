'use strict';

describe('Directive: infiniteScorll', function () {
  beforeEach(module('instangularApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<infinite-scorll></infinite-scorll>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the infiniteScorll directive');
  }));
});
