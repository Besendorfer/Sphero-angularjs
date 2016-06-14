'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Collision', ['RosType.Collision', 'ROS',
function Collision(CollisionType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'collision',
		messageType: CollisionType.messageType
	});
}]);
