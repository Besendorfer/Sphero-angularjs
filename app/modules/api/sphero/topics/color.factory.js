'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Color', ['RosType.Color', 'ROS',
function Color(ColorType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'set_color',
		messageType: ColorType.messageType,
		queue_size: 1
	});
}]);
