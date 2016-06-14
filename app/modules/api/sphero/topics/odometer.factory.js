'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Odometer', ['RosType.Odometer', 'ROS',
function Odometer(OdometerType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'odom',
		messageType: OdometerType.messageType
	});
}]);
