angular.module('eventsApp.controllers', [])

.controller('LoginCtrl', function($scope, $auth, $state){
  $scope.authenticate = function() {
    $auth.authenticate('twitter')
         .then(function(){
           $state.go('tab.list');
         })
         .catch(function(err){
            console.log(err);
         });
  };
})

.controller('ListCtrl', function($scope, EventsService, $auth) {
  if (!$auth.isAuthenticated()) {
    $state.go('login');
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

.controller('AccountCtrl', function($scope, $auth, $state) {
  $scope.logout = function() {
    $auth.logout();
    $state.go('login');
  };
});
