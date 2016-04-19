angular.module('noprizeApp',['firebase','ui.router'])
.constant("firebaseRoot", "https://tracyadamsmemorial.firebaseio.com/memories?print=pretty")
.config(function($stateProvider,$urlRouterProvider){
   $stateProvider
      .state('home',{
         url: '/',
         templateUrl: 'js/routes/home.html'
      })
      .state('photos',{
         url: '/photos',
         templateUrl: 'js/routes/photos.html'
      })
      .state('memorial',{
         url: '/memorial',
         templateUrl: 'js/routes/memorial.html'
      });
      $urlRouterProvider
      .otherwise('/');

})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
