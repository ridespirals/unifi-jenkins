'use strict';

angular.module('unifi-jenkins')

.factory('jobsFactory', ['$http', '$log', function($http, $log) {
	var urlBase = 'http://jenkins.inviewcloud.com/job/';
	var api = '/api/json';
	var factory = {};

	factory.getJob = function(name) {
		// $log.log('-jobs- get job ', name);
		return $http.get(urlBase + name + api);
	};

	return factory;
}]);