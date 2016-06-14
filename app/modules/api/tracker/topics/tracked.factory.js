'use strict';

angular.module('BB8.api.tracker.topics')
.factory('Tracker.Tracked', ['RosType.Pose2D', 'ROS',
function Tracked(Pose2DType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'tracked_pos',
		messageType: Pose2DType.messageType
	});
}]);
