sap.ui.define([
    "sap/m/App",
	"sap/ui/core/ComponentContainer"
], function (App, ComponentContainer) {
	"use strict";
    new App({
        pages: [
            new ComponentContainer({
                name: "com.sap.kt.typescript.sample",
                settings : {
                    id : "com.sap.kt.typescript.sample"
                },
                height: "100%",
                width: "100%",
                async: true
            })
        ]
    }).placeAt("content");
});