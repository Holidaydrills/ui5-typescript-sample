sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller: typeof sap.ui.core.mvc.Controller) {
	"use strict";

	return Controller.extend("com.sap.kt.typescript.sample.controller.TypelessWorld", {

		onButtonPress: function() {
			const label: sap.m.Label = this.getView().byId("fancyLabel");
			label.setText("Somthing changed here");
		},

		onNavigateToTypeScriptWorld: function() {
			this.getOwnerComponent().getRouter().navTo("typeScriptWorld");
		}
	});

});