'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Heading', ['RosType.Float32', 'ROS',
function Heading(Float32Type, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'set_heading',
		messageType: Float32Type.messageType,
		queue_size: 1
	});
}]);
