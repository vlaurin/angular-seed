'use strict';

angular.module('myApp.state2', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('state2', {
      abstract: true,
      url: '/state2',
      templateUrl: 'state2/state2.html',
      controller: 'State2Ctrl'
    })
    .state('state2.a', {
      url: '/a',
      templateUrl: 'state2/state2a.html',
      controller: 'State2ACtrl'
    })
    .state('state2.b', {
      url: '/b',
      templateUrl: 'state2/state2b.html',
      controller: 'State2BCtrl'
    });

    $urlRouterProvider.when('/state2', '/state2/a');
}])

.controller('State2Ctrl', [function() {

}]);
