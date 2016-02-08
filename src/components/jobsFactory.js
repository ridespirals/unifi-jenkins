'use strict';

angular.module('unifi-jenkins')

.factory('jobsFactory', ['$http', function($http) {
	var urlBase = 'http://jenkins.inviewcloud.com/job/';
	var api = '/api/json';
	var factory = {};

	factory.getJob = function(name) {
		return $http.get(urlBase + name + api);
	};

	return factory;
}]);