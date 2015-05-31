
angular.module('eventsApp', [ 'ionic',
                              'eventsApp.controllers',
                              'eventsApp.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('tab.list', {
    url: '/list',
    views: {
      'tab-list': {
        templateUrl: 'templates/tab-list.html',
        controller: 'ListCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });

  $urlRouterProvider.otherwise('/tab/list');
});
