angular.module('noprizeApp').controller('noprizeCtrl', function($scope, noprizeService){
   $scope.photos = noprizeService.getPhotos();
});
