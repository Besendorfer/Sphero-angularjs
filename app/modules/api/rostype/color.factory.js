'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Color', [
function () {
	var Color = function Color(data) {
		return data;
	};

	Color.messageType = 'std_msgs/ColorRGBA';

	return Color;
}]);
