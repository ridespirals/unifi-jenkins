'use strict';

angular.module('unifi-jenkins')

.factory('teamFactory', ['$http', function($http) {
	var urlBase = 'https://api.bitbucket.org/2.0/';
	var api = '/api/json';
	var factory = {};

	factory.getTeam = function(name) {
		return $http.get(urlBase + "teams/" + name);
	};

	return factory;
}]);