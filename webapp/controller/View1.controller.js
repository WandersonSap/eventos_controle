sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function (Controller, MessageBox, MessageToast, History) {
	"use strict";
	return Controller.extend("ovly.controles.eventos.controller.View1", {
		onInit: function () {},
		onPressTost: function (oEvent) {
			//console.log(oEvent.getSource().getText());
			this._imprimeNoConsole(oEvent.getSource(), "text");
			MessageToast.show("Apertou");
		},
		onPressSucesso: function (oEvt) {
			//console.log(oEvt.getSource().getText());
			this._imprimeNoConsole(oEvt.getSource(), "text");
			MessageBox.success("Sucesso");
		},
		onChangeRating: function (oControlEvent) {
			var mSettings = {
				title: "Nota"
			};
			// var sNota = oControlEvent.getSource().getValue().toString();
			// var sNota = oControlEvent.getParameters().value.toString();
			var sNota = oControlEvent.getParameter("value").toString();
			MessageBox.information(sNota, mSettings);
			this._imprimeNoConsole(oControlEvent.getSource(), "value");
		},
		onScanSuccess: function (oEvent) {
			var svalue = oEvent.getParameters().text;
			MessageBox.success(svalue);
			var svalue = oEvent.getParameters().format;
			MessageBox.success(svalue);
		},
		_imprimeNoConsole: function (omanagedObject, sProperty) {
			//console.log(oButton.getText());
			var sPropertyValue = omanagedObject.getProperty(sProperty);
			console.log(sPropertyValue);
		},
		
	
		onBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
		}
	});
});