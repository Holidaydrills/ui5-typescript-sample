sap.ui.define([
	"sap/ui/test/Opa5",
	"com/sap/kt/typescript/sample/localservice/mockserver"
], function(Opa5, mockserver) {
	"use strict";

	return Opa5.extend("com.sap.kt.typescript.sample.test.integration.arrangements.Startup", {

		iStartMyApp: function (oOptionsParameter) {
            
            let oOptions = oOptionsParameter || {};

			oOptions.delay = oOptions.delay || 1100;

			this.iWaitForPromise(mockserver.init(oOptions.delay));

			this.iStartMyUIComponent({
				componentConfig: {
					name: "com.sap.kt.typescript.sample",
					async: true
				},
				hash: oOptions.hash,
				autoWait: true
			});
		}
	});
});