'use strict';

angular.module('unifi-jenkins')

.factory('jobsFactory', ['$http', '$log', function($http, $log) {
	var urlBase = 'http://jenkins.inviewcloud.com/';
	var api = '/api/json';
	var factory = {};

	factory.getAllJobs = function() {
		return $http.get(urlBase + api);
	};

	factory.getJob = function(name) {
		// $log.log('-jobs- get job ', name);
		return $http.get(urlBase + 'job/' + name + api);
	};

	return factory;
}]);