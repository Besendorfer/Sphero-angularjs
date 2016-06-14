'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Velocity', ['RosType.Twist', 'ROS',
function Velocity(TwistType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'cmd_vel',
		messageType: TwistType.messageType,
		queue_size: 1
	});
}]);
