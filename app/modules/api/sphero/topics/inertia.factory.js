'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Inertia', ['RosType.Inertia', 'ROS',
function Inertia(InertiaType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'imu',
		messageType: Inertia.messageType
	});
}]);
