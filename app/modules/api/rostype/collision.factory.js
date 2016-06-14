'use strict';

angular.module('BB8.api.rostype')
.factory('RosType.Collision', [
function () {
	var Collision = function Collision(data) {
		return data;
	};

	Collision.messageType = 'sphero_node/SpheroCollision';

	return Collision;
}]);
