'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Backled', ['RosType.Float32', 'ROS',
function Backled(Float32Type, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'set_back_led',
		messageType: Float32Type.messageType,
		queue_size: 1
	});
}]);
