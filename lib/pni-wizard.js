"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PniWizard = void 0;
var wizard_functions_1 = require("./wizard-functions");
require("./style.css");
var PniWizard = (function () {
    function PniWizard() {
        var _this = this;
        this.openInteractiveWizard = function () {
            _this.wf.openInteractiveWizard();
        };
        this.closeInteractiveWizard = function () {
            _this.wf.closeInteractiveWizard();
        };
        this.resetInteractiveWizard = function () {
            _this.wf.resetInteractiveWizard();
        };
        this.wf = new wizard_functions_1.WizardFunctions();
    }
    PniWizard.prototype.displayProducts = function (ids) { };
    ;
    return PniWizard;
}());
exports.PniWizard = PniWizard;
//# sourceMappingURL=pni-wizard.js.map