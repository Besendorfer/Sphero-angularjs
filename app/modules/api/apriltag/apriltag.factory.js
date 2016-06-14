'use strict';

angular.module('BB8.api.apriltag')
.factory('Apriltag', [
	// subscribers
	'Apriltag.Info',
	'Apriltag.Intrude',

function TrackerFactory(Info, Intrude) {
	return {
		info: Info,
		intrude: Intrude
	};
}]);
