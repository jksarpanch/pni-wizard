"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNextQuestion = exports.resetInteractiveWizard = exports.closeInteractiveWizard = exports.openInteractiveWizard = void 0;
var pni_wizard_1 = require("./pni-wizard");
var wizard = new pni_wizard_1.PniWizard();
var openInteractiveWizard = wizard.openInteractiveWizard, closeInteractiveWizard = wizard.closeInteractiveWizard, resetInteractiveWizard = wizard.resetInteractiveWizard, onNextQuestion = wizard.onNextQuestion;
exports.openInteractiveWizard = openInteractiveWizard;
exports.closeInteractiveWizard = closeInteractiveWizard;
exports.resetInteractiveWizard = resetInteractiveWizard;
exports.onNextQuestion = onNextQuestion;
//# sourceMappingURL=index.js.map