'use strict';

angular.module('unifi-jenkins', [
	'ngRoute',
	'unifi-jenkins.statusView',
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/status' });
}]);