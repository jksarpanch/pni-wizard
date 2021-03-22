"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PniWizard = void 0;
var populate_wizard_1 = require("./populate-wizard");
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
        this.configureWizard = function (displayProducts) {
            _this.wf.configureWizard(displayProducts);
        };
        this.wf = new populate_wizard_1.PopulateWizard();
    }
    return PniWizard;
}());
exports.PniWizard = PniWizard;
//# sourceMappingURL=pni-wizard.js.map