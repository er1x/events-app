
angular.module('eventsApp', [ 'ionic',
                              'eventsApp.controllers',
                              'eventsApp.services',
                              'satellizer'])

.config(function($authProvider){
  var cfg = {
    popupOptions: {
      location: 'no',
      toolbar: 'no',
      width: window.screen.width,
      height: window.screen.height
    },
    url: '/auth/twitter'
  };

  $authProvider.baseUrl = 'http://192.168.0.100:8000';

  if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
    $authProvider.platform   = 'mobile';
    cfg.redirectUri          = 'http://127.0.0.1/';
  } else {
    $authProvider.withCredentials = false;
  }

  $authProvider.twitter(cfg);
})

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
