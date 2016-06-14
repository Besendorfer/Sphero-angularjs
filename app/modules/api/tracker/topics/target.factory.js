'use strict';

angular.module('BB8.api.tracker.topics')
.factory('Tracker.Target', ['RosType.Pose2D', 'ROS',
function Target(Pose2DType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'target_pos',
		messageType: Pose2DType.messageType
	});
}]);
