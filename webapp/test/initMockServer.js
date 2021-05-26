sap.ui.define([
	"sap/payroll/mockserver/mockserver",
	"sap/m/MessageBox"
], function (mockserver, MessageBox) {
	"use strict";

	const aMockserver = mockserver.init({microservices: []});

	Promise.resolve(aMockserver).catch(function (oError) {
		MessageBox.error(oError.message);
	}).finally(function () {
		sap.ui.require(["com/sap/kt/typescript/sample/index"]);
	});
});