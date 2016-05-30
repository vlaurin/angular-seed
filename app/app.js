'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.state1',
  'myApp.state2',
  'myApp.version'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise("state1");
}]);
