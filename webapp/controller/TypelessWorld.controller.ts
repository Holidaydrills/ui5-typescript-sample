sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sap/kt/typescript/sample/controller/ButtonTitleProvider"
], function (Controller: typeof sap.ui.core.mvc.Controller, ButtonTitleProvider: typeof com.my.custom.types.ButtonTitleProvider) {
	"use strict";

	return Controller.extend("com.sap.kt.typescript.sample.controller.TypelessWorld", {

		onButtonPress: function() {
			const label: sap.m.Title = this.getView().byId("fancyLabel");
			const currentLabelText = label.getText();
			const buttonTitleProvider = new ButtonTitleProvider();
			const newLabelText = buttonTitleProvider.getTitleFromString(currentLabelText);
			label.setText(newLabelText);
		},

		onNavigateToTypeScriptWorld: function() {
			this.getOwnerComponent().getRouter().navTo("typeScriptWorld");
		}
	});

});