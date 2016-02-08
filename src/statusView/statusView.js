'use strict';

angular.module('unifi-jenkins.statusView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/status', {
		templateUrl: 'statusView/statusView.html',
		controller: 'StatusViewCtrl'
	});
}])

.controller('StatusViewCtrl', ['$scope', function($scope) {
	$scope.test = 'Hello from controller!';
}]);