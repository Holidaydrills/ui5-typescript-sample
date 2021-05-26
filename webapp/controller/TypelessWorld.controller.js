sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("com.sap.kt.typescript.sample.controller.TypelessWorld", {
        onButtonPress: function () {
            var label = this.getView().byId("fancyLabel");
            label.setText("Somthing changed here");
        },
        onNavigateToTypeScriptWorld: function () {
            this.getOwnerComponent().getRouter().navTo("typeScriptWorld");
        }
    });
});
//# sourceMappingURL=TypelessWorld.controller.js.map