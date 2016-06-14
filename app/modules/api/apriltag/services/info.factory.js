'use strict';

angular.module('BB8.api.apriltag.services')
.factory('Apriltag.Info', ['ROS',
function Info(ROS) {
	return new ROSLIB.Service({
		ros: ROS,
		name: 'apriltags_info',
		serviceType: 'apriltags_intrude_detector/apriltags_info'
	});
}]);
