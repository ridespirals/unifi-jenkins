'use strict';

angular.module('unifi-jenkins.statusView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/status', {
		templateUrl: 'statusView/statusView.html',
		controller: 'StatusViewCtrl'
	});
}])

.controller('StatusViewCtrl', ['$scope', 'jobsFactory', 'teamFactory', function($scope, jobsFactory, teamFactory) {

	$scope.jobs = ['beta-unifi', 'beta-portal', 'beta-licensing', 'dev-unifi', 'dev-licensing'];

	// jobs.forEach(function(j) {
	// 	jobsFactory.getJob(j).then(function(result) {
	// 		$scope.jobs.push(result.data);
	// 	});
	// });

	teamFactory.getTeam('inviewlabs').then(function(result) {
		console.log('- get team ', result.data);
		$scope.team = result.data;
	});
}]);