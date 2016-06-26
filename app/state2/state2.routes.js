(function () {
  'use strict';

  angular
    .module('myApp.state2')
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('state2', {
        abstract: true,
        url: '/state2',
        templateUrl: 'state2/state2.html',
        controller: 'State2Controller',
        controllerAs: 'vm'
      })
      .state('state2.a', {
        url: '/a',
        templateUrl: 'state2/state2a.html',
        controller: 'State2AController',
        controllerAs: 'vm'
      })
      .state('state2.b', {
        url: '/b',
        templateUrl: 'state2/state2b.html',
        controller: 'State2BController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.when('/state2', '/state2/a');
  }
})();
