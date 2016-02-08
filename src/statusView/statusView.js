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

	jobsFactory.getJob('Unifi-Beta').then(function(result) {
		$scope.unifiBeta = result.data;
		console.log('Unifi Beta Job', result);
	});


}]);