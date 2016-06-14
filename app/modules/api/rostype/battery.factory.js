'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Battery', [
function () {
	var Battery = function Battery(data) {
		return data;
	};

	Battery.messageType = 'diagnostic_msgs/DiagnosticArray';

	return Battery;
}]);
