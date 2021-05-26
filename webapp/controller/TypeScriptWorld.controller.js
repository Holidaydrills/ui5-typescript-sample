var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return /** @class */ (function (_super) {
        __extends(TypeScriptWorld, _super);
        function TypeScriptWorld() {
            var _this = this;
            var fnClass = Controller.extend("com.sap.kt.typescript.sample.controller.TypeScriptWorld", {});
            TypeScriptWorld.prototype.getMetadata = fnClass.prototype.getMetadata;
            _this = _super.call(this, "com.sap.kt.typescript.sample.controller.TypeScriptWorld") || this;
            return _this;
        }
        TypeScriptWorld.prototype.onInit = function () {
            alert("This comes from a typescript controller");
        };
        TypeScriptWorld.prototype.onNavigateToTypelessWorld = function () {
            // See here: https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html
            var uiComponent = this.getOwnerComponent();
            uiComponent.getRouter().navTo("typelessWorld");
        };
        return TypeScriptWorld;
    }(Controller));
    // return Controller.extend("com.sap.kt.typescript.sample.controller.TypeScriptWorld", {
    // 	onButtonPress: function() {
    // 		const label = this.getView().byId("fancyLabel");
    // 		label.setText("Somthing changed here");
    // 	},
    // 	onNavigateToTypelessWorld: function() {
    // 		this.getOwnerComponent().getRouter().navTo("typelessWorld");
    // 	}
    // });
});
//# sourceMappingURL=TypeScriptWorld.controller.js.map