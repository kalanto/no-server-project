angular.module('noprizeApp').service('noprizeService', function(){
this.getMemory = function(){
var myFirebaseRef = new       Firebase("https://tracyadamsmemorial.firebaseio.com/");
      myFirebaseRef.set({
         Comment: "",
         Name: ""
      });
      return myFirebaseRef;
   };
});
