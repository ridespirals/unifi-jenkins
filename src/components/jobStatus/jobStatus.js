'use strict';

angular.module('unifi-jenkins')

.directive('jobStatus', ['$log', '$interval', 'jobsFactory', function($log, $interval, jobsFactory) {
	return {
		restrict: 'E',
		scope: {
			name: '@jobName',
			repo: '@repository',
			branch: '@branch'
		},
		templateUrl: 'components/jobStatus/jobStatus.html',
		link: function(scope, elem, attrs) {

			function refresh() {
				jobsFactory.getJob(scope.name).then(function(r) {
					scope.item = r.data;
					scope.lastUpdate = new Date();
					$log.log('-job status- got job data', r.data);
				});
			}

			$interval(refresh, 1000 * 30);

			refresh();
		}
	};
}]);