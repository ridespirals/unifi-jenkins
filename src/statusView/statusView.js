'use strict';

angular.module('unifi-jenkins.statusView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/status', {
		templateUrl: 'statusView/statusView.html',
		controller: 'StatusViewCtrl'
	});
}])

.controller('StatusViewCtrl', ['$scope', 'jobsFactory', 'teamFactory', function($scope, jobsFactory, teamFactory) {

	$scope.jobs = [
		{
			name: 'beta-unifi',
			repository: 'Discover',
			branch: 'develop'
		},
		{
			name: 'beta-portal',
			repository: 'unifi-webapp',
			branch: 'develop'
		},
		{
			name: 'beta-licensing',
			repository: 'licensing',
			branch: 'develop'
		},
		{
			name: 'dev-unifi',
			repository: 'Discover',
			branch: 'develop'
		},
		{
			name: 'dev-licensing',
			repository: 'licensing',
			branch: 'develop'
		}
	];

	teamFactory.getTeam('inviewlabs').then(function(result) {
		console.log('- get team ', result.data);
		$scope.team = result.data;
	});
}]);