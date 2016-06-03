(function () {
  'use strict';

  angular
    .module('myApp')
    .config(config);

  config.$inject = [
    '$urlRouterProvider'
  ];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("state1");
  }
})();
