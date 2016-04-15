angular.module('noprizeApp').directive('navDir', function(){
   return {
      restrict: 'E',
      templateUrl: 'js/routes/navDir.html',
      link: function(scope, element, attr){
         element.find("button").css("color","rgb(164, 10, 149)");
         element.find("button").css('font-size', '20px');
      }

   };

});
