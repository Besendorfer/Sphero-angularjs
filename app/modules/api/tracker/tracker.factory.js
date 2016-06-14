'use strict';

angular.module('BB8.api.tracker')
.factory('Tracker', [
	// subscribers
	'Tracker.Tracked',
	'Tracker.Target',

function TrackerFactory(Tracked, Target) {
	return {
		tracked: Tracked,
		target: Target
	};
}]);
