'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.RotationRate', ['RosType.Float32', 'ROS',
function (Float32Type, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'set_angular_velocity',
		messageType: Float32Type.messageType,
		queue_size: 1
	});
}]);
