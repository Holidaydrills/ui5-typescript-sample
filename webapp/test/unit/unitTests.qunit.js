/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/kt/typescript/sample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});