'use strict';

angular.module('instangularApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/:tag', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
