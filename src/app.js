'use strict';

angular.module('unifi-jenkins', [
	'ngRoute',
	'unifi-jenkins.statusView',
	'unifi-jenkins.allJobsView',
	'angularMoment'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/jobs' });
}]);