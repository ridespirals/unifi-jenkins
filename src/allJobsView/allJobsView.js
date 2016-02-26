'use strict';

angular.module('unifi-jenkins.allJobsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/jobs', {
		templateUrl: 'allJobsView/allJobsView.html',
		controller: 'AllJobsCtrl'
	});
}])

.controller('AllJobsCtrl', ['$scope', 'jobsFactory', '$log',
function($scope, jobsFactory, $log) {
	console.log('-- all jobs ctrl');
	$scope.started = false;
	jobsFactory.getAllJobs().then(function(d) {
		var result = d.data;

		$log.log('-- get all jobs: ', result);

		$scope.jobs = result.jobs;

	});
}]);
