sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("ovly.controles.eventos.controller.View1", {
		onInit: function () {

		},
		
		onPressTost: function () {
			MessageToast.show("Apertou");
		},
		
		onPressSucesso: function () {
			MessageBox.success("Sucesso");
		},	
		
		onChangeRating: function (oControlEvent) {
			var mSettings = {
				title: "Nota"
			};
			var sNota = oControlEvent.getSource().getValue().toString();
			MessageBox.information(sNota, mSettings);
		}
	});
});