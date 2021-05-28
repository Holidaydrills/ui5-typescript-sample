sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller: typeof sap.ui.core.mvc.Controller) {

	"use strict";

	return class TypeScriptWorld extends Controller {
		constructor() {
			const fnClass = Controller.extend("com.sap.kt.typescript.sample.controller.TypeScriptWorld", {});
			TypeScriptWorld.prototype.getMetadata = fnClass.prototype.getMetadata;
			super("com.sap.kt.typescript.sample.controller.TypeScriptWorld");
		}
		public onInit(): void {
		}

		onNavigateToTypelessWorld(): void {
			// See here: https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html
			const uiComponent: sap.ui.core.UIComponent = (this.getOwnerComponent() as any) as sap.ui.core.UIComponent;
			uiComponent.getRouter().navTo("typelessWorld");
		}
	}

});
