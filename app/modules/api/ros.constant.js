'use strict';

angular.module('BB8')
.value('ROS', (function () {
	var ros = new ROSLIB.Ros({
		url: 'ws://localhost:9090'
	});

	return ros;
})());
