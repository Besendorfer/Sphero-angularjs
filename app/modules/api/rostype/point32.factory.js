'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Point32', [
function () {
	var Point32 = function Point32(data) {
		return data;
	};

	Point32.messageType = 'geometry_msgs/Point32';

	return Point32;
}]);
