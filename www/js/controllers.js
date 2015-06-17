angular.module('eventsApp.controllers', [])

.controller('LoginCtrl', function($scope, $auth, $location){
  $scope.authenticate = function() {
    $auth.authenticate('twitter')
         .then(function(){
           $location.path('/list');
         })
         .catch(function(err){
            console.log(err);
         });
  };
})

.controller('ListCtrl', function($scope, EventsService, $auth, $location) {
  if (!$auth.isAuthenticated()) {
    $location.path('/login');
  } else {
    EventsService.all()
    .success(function(events){
      $scope.events = events;
    })
    .error(function(err) {
      console.log(err);
    });
  }
})

.controller('AccountCtrl', function($scope, $auth) {
  $scope.logout = function() {
    $auth.logout();
  };
});
