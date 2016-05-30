'use strict';

angular.module('myApp.state1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('state1', {
      url: '/state1',
      templateUrl: 'state1/state1.html',
      controller: 'State1Ctrl'
    });
}])

.controller('State1Ctrl', [function() {

}]);
