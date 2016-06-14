'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Float32', [
function () {
	var Float32 = function Float32(data) {
		return data;
	};

	Float32.messageType = 'std_msgs/Float32';

	return Float32;
}]);
