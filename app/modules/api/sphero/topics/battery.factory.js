'use strict';

angular.module('BB8.api.sphero.topics')
.factory('Sphero.Battery', ['RosType.Battery', 'ROS',
function Battery(BatteryType, ROS) {
	return new ROSLIB.Topic({
		ros: ROS,
		name: 'diagnostics',
		messageType: BatteryType.messageType
	});
}]);
