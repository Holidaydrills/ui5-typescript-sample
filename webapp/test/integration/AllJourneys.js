sap.ui.define([
	"sap/ui/test/Opa5",
	"com/sap/kt/typescript/sample/test/integration/arrangements/Startup"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.sap.kt.typescript.sample.view",
		autoWait: true
	});
});