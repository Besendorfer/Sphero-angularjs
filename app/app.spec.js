'use strict';

describe('app.js', function () {

	beforeEach(module('BB8'));

	describe('run', function () {
		it('should try to get the version, and put it on rootScope', function () {
			inject(function ($httpBackend, $rootScope) {
				$httpBackend.expectGET('version.json').respond('versionTest');
				$httpBackend.flush();
				expect($rootScope.appVersion).toEqual('versionTest');
			});
		});
	});
});
