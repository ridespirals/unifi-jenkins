'use strict';

angular.module('unifi-jenkins')

.directive('jobStatus', ['$log', '$interval', 'jobsFactory', function($log, $interval, jobsFactory) {
	return {
		restrict: 'E',
		scope: {
			name: '@jobName'
		},
		templateUrl: 'components/jobStatus/jobStatus.html',
		link: function(scope, elem, attrs) {

			function refresh() {
				jobsFactory.getJob(scope.name).then(function(r) {
					scope.item = r.data;
					$log.log('-job status- got job data', r.data);
				});
			}

			refresh();
		}
	};
}]);