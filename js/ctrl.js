angular.module('noprizeApp').controller('noprizeCtrl', function($scope, noprizeService, firebaseRoot, $firebaseArray){
   var messagesRef = new Firebase(firebaseRoot + '/messages');
   $scope.messages = $firebaseArray(messagesRef);
   $scope.addMessage = function(message){
      $scope.messages.$add(message);
   };
});
