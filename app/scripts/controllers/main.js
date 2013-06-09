'use strict';

angular.module('instangularApp')
  .controller('MainCtrl',
    ['$scope', '$routeParams', 'instagram',
    function($scope, $routeParams, instagram) {

    var tag = $routeParams.tag || 'copacabana';

    instagram.getPhotosFromTag(tag)
    .success(function(response, status){
      // Load first data.
      $scope.photos = response.data;
      // Save pagination info.
      $scope.pagination = response.pagination;
      // Paginate One time
      $scope.paginate();

      // Debug
      console.log(status);
      console.log(response);
    }).error(function(response, status){
      // Debug
      console.log(status);
      // console.log(response || 'Request failed');
    });

    $scope.openBigPhoto = function($event){
      $scope.photo = this.photo;
      $scope.modalVisible = true;
      $event.preventDefault();
    };

    $scope.closeBigPhoto = function($event){
      $scope.modalVisible = false;
      $event.preventDefault();
    };

    $scope.paginate = function(){
      //Track if pagination is happening.
      if(!$scope.paginating){
        // Start pagination
        $scope.paginating = true;

        var nextMaxId = $scope.pagination.next_max_tag_id;

        // API Call
        instagram.getNextPage(tag, nextMaxId)
          .success(function(response, status){
            // Concat page
            $scope.photos.push.apply($scope.photos, response.data);
            // Set new pagination data.
            $scope.pagination = response.pagination;
            // Finish pagination.
            $scope.paginating = false;
            console.log(status);
          });
      }
    };

  }]);
