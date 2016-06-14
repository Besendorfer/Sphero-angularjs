'use strict';

angular.module('BB8.api.apriltag.services')
.factory('Apriltag.Intrude', ['ROS',
function Intrude(ROS) {
	return new ROSLIB.Service({
		ros: ROS,
		name: 'apriltags_intrude',
		serviceType: 'apriltags_intrude_detector/apriltags_intrude'
	});
}]);
