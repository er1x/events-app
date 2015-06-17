angular.module('eventsApp.services', [])

.factory('EventsService', function($http) {
  return {
    all: function() {
      return $http.get('http://192.168.0.100:8000/events');
    }
  };
});
