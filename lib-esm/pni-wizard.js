import { WizardFunctions } from './wizard-functions';
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
            _this.wf.clearAllQuestions();
        };
        this.wf = new WizardFunctions();
    }
    return PniWizard;
}());
export { PniWizard };
//# sourceMappingURL=pni-wizard.js.map