sap.ui.define([], function(
) {
	'use strict'

	class ButtonTitleProvider {
		public constructor() {}

		public getTitleFromString(string: string): string {
			if(string === "Initial Title") {
                return "New Title";
            } 
            return "Initial Title";
		}
	}

	return ButtonTitleProvider
})