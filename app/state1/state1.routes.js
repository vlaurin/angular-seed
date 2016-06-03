(function () {
  'use strict';

  angular
    .module('myApp.state1')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('state1', {
        url: '/state1',
        templateUrl: 'state1/state1.html',
        controller: 'State1Controller',
        controllerAs: 'vm'
      });
  }
})();
