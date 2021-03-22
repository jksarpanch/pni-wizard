import { PopulateWizard } from './populate-wizard';
import './style.css';
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
        this.wf = new PopulateWizard();
    }
    return PniWizard;
}());
export { PniWizard };
//# sourceMappingURL=pni-wizard.js.map