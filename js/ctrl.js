angular.module('noprizeApp').controller('noprizeCtrl', function($scope, noprizeService){
   // $scope.nameInput = "";
   // $scope.commetInput = "";

   $scope.getComment = function(nameInput, commetInput){
      noprizeService.getMemory($scope.nameInput, $scope.commetInput).then(function(myFirebaseRef){
         $scope.memory = myFirebaseRef;
      });
   };
});
