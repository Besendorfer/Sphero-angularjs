'use strict';

angular.module('BB8.intruder')
.controller('intruderCtrl', ['$scope', 'Sphero', 'Tracker', 'RosType.Twist', 'Apriltag.Info',
							 'ROS', 'Vector', '$timeout',
function ($scope, Sphero, Tracker, Twist, Info, ROS, Vector, $timeout) {
	var startTracker = false;
	$scope.tags = [];

	function updateStatus() {
		$scope.status = 'Connected: ' + ROS.isConnected +
			'. ' + $scope.battery;
	}

	$scope.ros = ROS;
	// update angular when ROS connection changes
	ROS.on('connection', $scope.$apply.bind($scope, updateStatus));
	ROS.on('error', $scope.$apply.bind($scope, updateStatus));
	ROS.on('close', $scope.$apply.bind($scope, updateStatus));

	// Battery diagnostics. When Sphero starts blinking red, it says "WARNING",
	// when Sphero is solid red, it says "CRITICAL".
	Sphero.battery.subscribe(function (diagnostic) {
		$scope.battery = diagnostic.status[0].message;
		$scope.battery += ' (' + (diagnostic.status[1].message / 100) + 'V';
		$scope.battery += ', ' + diagnostic.status[2].message + ' times charged';
		$scope.battery += ', ' + diagnostic.status[3].message + 's since charge)';
		$scope.$apply(updateStatus);
	});

	// This is the same as trackposCallback in the Python code.
	Tracker.tracked.subscribe(function (position) {
		if (!startTracker) return;
		if (position.x === -1 || position.y === -1) return;

		var twist = new Twist();

		// This is to give the Sphero some x and y velocities.
		// twist.linear.x = 100;
		// twist.linear.y = -80;

		Sphero.velocity.publish(twist);
	});

	function polyCenter(poly) {
		var center = {};
		center.x = 0;
		center.y = 0;
		for (var i = 0; i < poly.points.length; i++) {
			center.x += poly.points[i].x;
			center.y += poly.points[i].y;
		}
		center.x /= poly.points.length;
		center.y /= poly.points.length;
		return center;
	}

	// This allows us to manually move the Sphero.
	$scope.twist = function (x, y) {
		console.log('twist', x, y);
		var twist = new Twist(x, y);
		Sphero.velocity.publish(twist);
	};

	$scope.start = function () {
		$timeout($scope.startWorking, 5000);
	};

	function scalePolygon(polygon, amount) {
		var scalePoly = angular.copy(polygon);
		var center = polyCenter(scalePoly);
		for (var i = 0; i < scalePoly.points.length; i++) {
			var toPoint = new Vector(scalePoly.points[i], center);
			scalePoly.points[i].x += toPoint.dx * (amount - 1);
			scalePoly.points[i].y += toPoint.dy * (amount - 1);
		}
		return scalePoly;
	}

	// This is the function that runs when the start button is pushed in the browser.
	// The same as the start function in the Python code.
	$scope.startWorking = function () {
		// This is the same as the "info_query" call in the Python code.
		// JavaScript has awesome callback power!
		Info.callService(new ROSLIB.ServiceRequest({}), function (response) {
			for (var i = 0; i < response.polygons.length; i++) {
				var polygon = response.polygons[i];
				var ids = response.ids[i];

				$scope.tags.push(scalePolygon(polygon, 1.2));
			}

			startTracker = true;
		});
	};

	// This is the function that runs when the stop button is pushed in the browser.
	// The same as the stop function in the Python code.
	$scope.stop = function () {
		startTracker = false;
	};

	var visuallyImpaired = true;
	var largeLine = visuallyImpaired ? 4 : 1;
	var smallLine = visuallyImpaired ? 1 : 0.25;
	var largeDot = visuallyImpaired ? 8 : 4;
	var smallDot = visuallyImpaired ? 4 : 2;

	// Show the tags in the canvas.
	var backCanvas;
	$scope.visualizeInit = function (position) {
		var canvas = document.getElementById('canvas');
		backCanvas = document.createElement('canvas');
		backCanvas.width = canvas.width;
		backCanvas.height = canvas.height;
		var ctx = backCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = largeLine;

		// **********************************************************
		// Just to display the tags in a canvas.
		$scope.tags.forEach(function (tag) {
			ctx.beginPath();
			ctx.moveTo(tag.points[0].x, tag.points[0].y);

			tag.points.forEach(function (point) {
				ctx.lineTo(point.x, point.y);
			});

			ctx.lineTo(tag.points[0].x, tag.points[0].y);

			ctx.stroke();
			ctx.closePath();
		});
		// **********************************************************

		ctx.lineWidth = largeLine;
		ctx.fillStyle = ctx.strokeStyle = '#000000';

		var realCtx = canvas.getContext('2d');
		realCtx.clearRect(0, 0, canvas.width, canvas.height);
		realCtx.drawImage(backCanvas, 0, 0);
	};

	// Show the Sphero in the canvas
	$scope.visualizeUpdate = function (position) {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		var backCtx = backCanvas.getContext('2d');
		ctx.fillStyle = ctx.strokeStyle = backCtx.fillStyle = backCtx.strokeStyle = '#880000';
		backCtx.beginPath(); ctx.beginPath();
		backCtx.arc(position.x, position.y, smallDot, 0, 2 * Math.PI, true);
		ctx.arc(position.x, position.y, smallDot, 0, 2 * Math.PI, true);
		backCtx.stroke(); ctx.stroke();
		backCtx.closePath(); ctx.closePath();
		ctx.fillStyle = ctx.strokeStyle = backCtx.fillStyle = backCtx.strokeStyle = '#000000';
	};
}]);
