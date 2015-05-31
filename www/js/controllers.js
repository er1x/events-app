angular.module('eventsApp.controllers', [])

.controller('LoginCtrl', function($scope){
  $scope.authenticate = function() {
    console.log('TODO: authenticate');
  };
})

.controller('ListCtrl', function($scope, EventsService) {
  $scope.events = EventsService.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.logout = function() {
    console.log('TODO: logout');
  };
});
