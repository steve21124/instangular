'use strict';

angular.module('instangularApp')
  .factory('instagram', ['$http', function($http) {
    var clientID = 'fa1ce5ede7da49f58003485513386389';
    var apiURL = 'https://api.instagram.com/v1/';

    return {

      // Get photos from tag.
      getPhotosFromTag: function(tag){
        return $http({
          method: 'JSONP',
          url: apiURL + 'tags/' + tag + '/media/recent?client_id=' + clientID + '&callback=JSON_CALLBACK'
        });
      },

      getNextPage: function(tag, maxTagId) {
        return $http({
          method: 'JSONP', 
          url: apiURL + 'tags/' + tag + '/media/recent?client_id=' + clientID + '&max_tag_id=' + maxTagId + '&callback=JSON_CALLBACK'
        });
      }

    };

  }]);
