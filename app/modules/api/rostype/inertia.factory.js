'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Inertia', [
function () {
	var Inertia = function Inertia(data) {
		return data;
	};

	// imu = inertial measurement unit
	Inertia.messageType = 'sensor_msgs/Imu';

	return Inertia;
}]);
