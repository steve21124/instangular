'use strict';

angular.module('instangularApp')
  .directive('infiniteScorll', [function () {
    return function(scope, elm, attr) {
      var raw = elm[0];

      angular.element(window).bind('scroll load', function(){
        var rectObject = raw.getBoundingClientRect();
        // console.log(rectObject.bottom);
        // console.log(window.innerHeight);

        if(rectObject.bottom <= (window.innerHeight + 100)) {
          scope.$apply(attr.infiniteScorll);
        }
      });
    };

  }]);
