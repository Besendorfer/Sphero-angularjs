'use strict';
exports.config = {
	specs: ['test/e2e/**/*.js'],
	baseUrl: 'http://localhost:9001', // default test port with Yeoman
	framework: 'jasmine',
	rootElement: 'body',
	capabilities: {
		browserName: 'chrome'
	},

	/* global by: false */
	onPrepare: function () {
		// This will navigate to the project and sign on through lds auth
		browser.get('/');
		browser.sleep(100);
		var loginUsername = browser.driver.findElement(by.id('IDToken1'));
		loginUsername.sendKeys(browser.params.login.username);
		var loginPassword = browser.driver.findElement(by.id('IDToken2'));
		loginPassword.sendKeys(browser.params.login.password);
		var signInButton = browser.driver.findElement(by.name('Login.Submit'));
		signInButton.click();
		browser.sleep(3000);
	},

	params:{
		login:{
			username:'mtc_appmantest_1',
			password:'mtc_appmantest_1pw'
		}
	},

	suites: {
		main: ['test/e2e/base.js']
	}
};
