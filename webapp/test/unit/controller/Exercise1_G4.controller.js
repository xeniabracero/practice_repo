/*global QUnit*/

sap.ui.define([
	"exercise1g4/controller/Exercise1_G4.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Exercise1_G4 Controller");

	QUnit.test("I should test the Exercise1_G4 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
