"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulateWizard = void 0;
var dynamic_images_1 = require("./dynamic-images");
var wizard_service_1 = require("./wizard-service");
var dynamic_questions_1 = require("./dynamic-questions");
var PopulateWizard = (function () {
    function PopulateWizard() {
        var _this = this;
        this.apiRetryCount = 0;
        this.questions = [];
        this.imageDataList = [];
        this.dynamicsQuestionApi = 'https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/';
        this.dynamicsImagesApi = 'https://pni-dev-p2p-web-api.pnidev.com/api/imagegamification/';
        this.isImageGamification = true;
        this.displayProducts = function (ids) { };
        this.populateWizard = function (wizardContainer, populateByContainer) {
            _this.apiRetryCount = 0;
            _this.wizardService.initializeWizard(wizardContainer, populateByContainer);
            if (_this.isImageGamification) {
                _this.dynamicImages.renderImageWizard();
            }
            else {
                _this.dynamicQuestions.renderQuestionsWizard();
            }
            _this.wizardService.addResetButton();
            _this.wizardService.configuringWizard(wizardContainer);
            if (!populateByContainer)
                wizardContainer.classList.add('active');
            document.getElementById("pni-wizard-closeBtn").addEventListener("click", _this.closeInteractiveWizard);
            document.getElementById("pni-reset-button").addEventListener("click", _this.resetInteractiveWizard);
        };
        this.openInteractiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            var populateByContainer = wizardContainer ? true : false;
            wizardContainer = wizardContainer ? wizardContainer : document.getElementById('pni-interactive-wizard');
            var haveDataList = _this.isImageGamification ? _this.haveOptionData(_this.imageDataList) : _this.haveOptionData(_this.questions);
            if (wizardContainer && !_this.wizardService.isPniWizardOpen() && haveDataList) {
                _this.populateWizard(wizardContainer, populateByContainer);
            }
            else if (!_this.wizardService.isPniWizardOpen() && !haveDataList && _this.apiRetryCount < 30) {
                _this.apiRetryCount++;
                setTimeout(function () {
                    _this.openInteractiveWizard();
                }, 250);
            }
        };
        this.configureWizard = function (displayProducts) {
            _this.wizardService.configureWizard(displayProducts);
        };
        this.resetWizard = function () {
            if (_this.isImageGamification) {
                _this.imageDataList = [_this.imageDataList[0]];
                _this.wizardService.showHideResetButton(_this.imageDataList);
            }
            else {
                _this.questions = [_this.questions[0]];
                _this.dynamicQuestions.resetQuestionsWizard();
                _this.wizardService.showHideResetButton(_this.questions);
            }
        };
        this.resetInteractiveWizard = function () {
            _this.resetWizard();
            _this.closeInteractiveWizard();
            _this.openInteractiveWizard();
            window.parent.postMessage(undefined, "https://satish0543.wixsite.com");
        };
        this.closeInteractiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            wizardContainer.innerHTML = '';
            _this.resetWizard();
        };
        this.fetchFirstOption();
        this.wizardService = new wizard_service_1.WizardService();
    }
    PopulateWizard.prototype.fetchFirstOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ques, _a, newQuestions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isImageGamification) return [3, 2];
                        return [4, fetch(this.dynamicsImagesApi)];
                    case 1:
                        _a = _b.sent();
                        return [3, 4];
                    case 2: return [4, fetch(this.dynamicsQuestionApi)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        ques = _a;
                        return [4, ques.json()];
                    case 5:
                        newQuestions = _b.sent();
                        if (this.isImageGamification) {
                            this.imageDataList = newQuestions;
                            this.dynamicImages = new dynamic_images_1.DynamicImages(newQuestions, this.wizardService);
                        }
                        else {
                            this.questions = [newQuestions[0]];
                            this.dynamicQuestions = new dynamic_questions_1.DynamicQuestions([newQuestions[0]], this.wizardService);
                        }
                        return [2];
                }
            });
        });
    };
    PopulateWizard.prototype.haveOptionData = function (dataList) {
        return dataList && dataList.length >= 1;
    };
    return PopulateWizard;
}());
exports.PopulateWizard = PopulateWizard;
//# sourceMappingURL=populate-wizard.js.map