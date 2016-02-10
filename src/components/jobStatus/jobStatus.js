'use strict';

angular.module('unifi-jenkins')

.directive('jobStatus', ['$log', '$interval', 'jobsFactory', function($log, $interval, jobsFactory) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			name: '@jobName',
			repo: '@repository',
			branch: '@branch'
		},
		templateUrl: 'components/jobStatus/jobStatus.html',
		link: function(scope, elem, attrs) {

			function refresh() {
				scope.loading = true;
				jobsFactory.getJob(scope.name).then(function(r) {
					scope.item = r.data;
					scope.lastUpdate = new Date();
					scope.loading = false;
					// $log.log('-job status- got job data', r.data);
				});
			}

			$interval(refresh, 1000 * 30);

			refresh();
		}
	};
}]);