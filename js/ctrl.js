angular.module('noprizeApp').controller('noprizeCtrl', function($scope, firebaseRoot, $firebaseArray){
// firebase code for guest book page //
   var messagesRef = new Firebase(firebaseRoot + '/messages');

   $scope.messages = $firebaseArray(messagesRef);
   $scope.newMessage = {};
   $scope.addMessage = function(message){
      $scope.messages.$add(message);
      $scope.newMessage = {};
   };
   $scope.date = new Date();

// photo carousel scripts //
   $scope.num = 1;
   $scope.photo = "/img/" + $scope.num + ".jpg";
   $scope.nextPhoto = function(){
      if($scope.num < 28){
         $scope.num++;
         $scope.photo = "/img/" + $scope.num + ".jpg";
      }
      if($scope.num > 27){
         $scope.num = 1;
         $scope.photo = "/img/" + $scope.num + ".jpg";
      }
   };
   $scope.prevPhoto = function(){
      if($scope.num >= 1){
         $scope.num--;
         $scope.photo = "/img/" + $scope.num + ".jpg";
      }
      if($scope.num < 1){
         $scope.num = 27;
         $scope.photo = "/img/" + $scope.num + ".jpg";
      }
   };
});
