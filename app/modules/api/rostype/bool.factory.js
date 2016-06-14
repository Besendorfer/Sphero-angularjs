'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Bool', [
function () {
	var Bool = function Bool(data) {
		return data;
	};

	Bool.messageType = 'std_msgs/Bool';

	return Bool;
}]);
