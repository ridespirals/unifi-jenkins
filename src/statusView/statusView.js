'use strict';

angular.module('unifi-jenkins.statusView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/status', {
		templateUrl: 'statusView/statusView.html',
		controller: 'StatusViewCtrl'
	});
}])

.controller('StatusViewCtrl', ['$scope', 'jobsFactory', function($scope, jobsFactory) {
	$scope.test = 'Hello from controller!';

	$scope.jobs = [];

	jobsFactory.getJob('Unifi-Beta').then(function(result) {
		$scope.jobs.push(result.data);
	});

	jobsFactory.getJob('Unifi-dev').then(function(result) {
		$scope.jobs.push(result.data);
	});

	jobsFactory.getJob('Unifi-Portal').then(function(result) {
		$scope.jobs.push(result.data);
	});

}]);