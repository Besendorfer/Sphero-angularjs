'use strict';

describe('app', function () {
	beforeEach(function () {
		browser.get('/');
	});
	it('should be on Applicant Manager', function () {
		expect(browser.getTitle()).toBe('Applicant Manager');
	});
});
