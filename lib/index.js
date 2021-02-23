"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNextQuestion = exports.closeInteractiveWizard = exports.openInteractiveWizard = void 0;
var pni_wizard_1 = require("./pni-wizard");
var wizard = new pni_wizard_1.PniWizard();
var openInteractiveWizard = wizard.openInteractiveWizard, closeInteractiveWizard = wizard.closeInteractiveWizard, showNextQuestion = wizard.showNextQuestion;
exports.openInteractiveWizard = openInteractiveWizard;
exports.closeInteractiveWizard = closeInteractiveWizard;
exports.showNextQuestion = showNextQuestion;
//# sourceMappingURL=index.js.map