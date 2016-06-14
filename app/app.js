'use strict';

angular.module('BB8', ['BB8.intruder'])

.run(['$http', '$rootScope', function ($http, $scope) {
	// Get version
	$http.get('version.json')
	.success(function (version) {
		$scope.appVersion = version;
	});
}]);

// Template module definition
angular.module('BB8.templates', []);
