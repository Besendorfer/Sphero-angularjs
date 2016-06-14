'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Stabilization', ['RosType.Bool', 'ROS',
function Stabilization(BoolType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'disable_stabilization',
		messageType: BoolType.messageType,
		queue_size: 1
	});
}]);
