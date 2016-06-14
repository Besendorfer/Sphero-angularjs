'use strict';

angular.module('BB8.api.sphero')
.factory('Sphero', [
	// publishers
	'Sphero.Backled',
	'Sphero.Color',
	'Sphero.Heading',
	'Sphero.RotationRate',
	'Sphero.Stabilization',
	'Sphero.Velocity',

	// subscribers
	'Sphero.Battery',
	'Sphero.Collision',
	'Sphero.Inertia',
	'Sphero.Odometer',

function SpheroFactory(Backled, Color, Heading, RotationRate, Stabilization, Velocity,
	                   Battery, Collision, Inertia, Odometer) {
	return {
		backled: Backled,
		color: Color,
		heading: Heading,
		rotationRate: RotationRate,
		stabilization: Stabilization,
		velocity: Velocity,

		battery: Battery,
		collision: Collision,
		inertia: Inertia,
		odometer: Odometer
	};
}]);
