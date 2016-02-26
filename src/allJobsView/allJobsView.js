'use strict';

angular.module('unifi-jenkins.allJobsView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/jobs', {
		templateUrl: 'allJobsView/allJobsView.html',
		controller: 'AllJobsCtrl'
	});
}])

.controller('AllJobsCtrl', ['$scope', '$http', '$log',
function($scope, $http, $log) {
	console.log('-- all jobs ctrl');
	$scope.started = false;
	$http.get('http://jenkins.inviewcloud.com/api/json?tree=jobs[name,url,color]&xpath=/hudson/job[ends-with(color/text(),%22_anime%22)]&wrapper=jobs&pretty=true').then(function(d) {
		var result = d.data;

		$log.log('-- get all jobs: ', result);

		$scope.jobs = result.jobs;

	});
}]);
