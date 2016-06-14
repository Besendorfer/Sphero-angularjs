'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Pose2D', [
function () {
	var Pose2D = function Pose2D(data) {
		return data;
	};

	Pose2D.messageType = 'geometry_msgs/Pose2D';

	return Pose2D;
}]);
