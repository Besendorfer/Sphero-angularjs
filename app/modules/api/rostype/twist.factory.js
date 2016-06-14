'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Twist', [
function () {
	var Twist = function Twist(x, y, z, ax, ay, az) {
		return new ROSLIB.Message({
			linear: {
				x: x || 0,
				y: y || 0,
				z: z || 0
			},
			angular: {
				x: ax || 0,
				y: ay || 0,
				z: az || 0
			}
		});
	};

	Twist.messageType = 'geometry_msgs/Twist';

	return Twist;
}]);
