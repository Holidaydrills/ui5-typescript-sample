sap.ui.define([
    'sap/ui/core/UIComponent'
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("com.sap.kt.typescript.sample.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    });
});
//# sourceMappingURL=Component.js.map