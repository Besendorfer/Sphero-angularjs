'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Odometer', [
function () {
	var Odometer = function Odometer(data) {
		return data;
	};

	Odometer.messageType = 'nav_msgs/Odometry';

	return Odometer;
}]);
