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
exports.WizardService = void 0;
;
;
var WizardService = (function () {
    function WizardService() {
        this.defaultTopPosition = '25%';
        this.defaultRightPosition = '2%';
        this.defaultLeftPosition = 'unset';
        this.addResetButton = function () {
            var questionsArea = document.querySelector('#pni-interactive-wizard');
            var resetHtml = "<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style=\"visibility: hidden;\">Reset</button>";
            questionsArea.insertAdjacentHTML("beforeend", resetHtml);
        };
    }
    WizardService.prototype.getWizardContent = function () {
        return "<div class=\"pni-wizard-header pni-color-theme-background\">\n                    <div class=\"title\">Let me help You!</div>\n                    <button data-close-button class=\"close-button\" id='pni-wizard-closeBtn'>&times;</button>\n                </div>\n            <div class=\"pni-wizard-body\"></div>";
    };
    WizardService.prototype.removeRepetitiveElements = function () {
        var repetitiveElements = document.querySelectorAll('[id=pni-interactive-wizard]');
        repetitiveElements.forEach(function (el) {
            el.remove();
        });
    };
    WizardService.prototype.initializeWizard = function (wizardContainer, populateByContainer) {
        if (populateByContainer) {
            this.removeRepetitiveElements();
        }
        wizardContainer.innerHTML = populateByContainer ? "<div class=\"pni-wizard active\" id=\"pni-interactive-wizard\">" + this.getWizardContent() + "</div>" : this.getWizardContent();
    };
    WizardService.prototype.wizardPositioning = function (topPosition, rightPosition, leftPosition) {
        leftPosition = rightPosition ? this.defaultLeftPosition : leftPosition;
        var wizard = document.getElementById('pni-interactive-wizard');
        topPosition = topPosition ? topPosition : this.defaultTopPosition;
        rightPosition = rightPosition ? rightPosition : this.defaultRightPosition;
        leftPosition = leftPosition ? leftPosition : this.defaultLeftPosition;
        wizard.style.top = topPosition;
        wizard.style.right = rightPosition;
        wizard.style.left = leftPosition;
    };
    WizardService.prototype.disableEnableChoiceDropdown = function (enableDropdown) {
        var allChoiceDropdowns = document.querySelectorAll('[class=pni-select-css]');
        if (enableDropdown) {
            allChoiceDropdowns.forEach(function (el) {
                el.removeAttribute('disabled');
            });
            document.getElementById('pni-reset-button').removeAttribute('disabled');
        }
        else {
            allChoiceDropdowns.forEach(function (el) {
                el.setAttribute('disabled', 'disabled');
            });
            document.getElementById('pni-reset-button').setAttribute('disabled', 'disabled');
        }
    };
    WizardService.prototype.fetchNewQuestion = function (dynamicsQuestionApi, questionList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disableEnableChoiceDropdown(false);
                        return [4, fetch(dynamicsQuestionApi, {
                                method: "POST",
                                body: JSON.stringify(questionList)
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    WizardService.prototype.isPniWizardOpen = function () {
        var wizard = document.getElementById('pni-interactive-wizard');
        return wizard && wizard.classList.contains('active');
    };
    WizardService.prototype.triggerTrackingEvent = function (sequence_id, questionText, answerValue) {
        var questionData = {
            eventType: 'user_answered_question',
            eventData: {
                sequence_id: sequence_id,
                questionText: questionText,
                answerValue: answerValue
            }
        };
        window.pniTrackingEvent(questionData);
    };
    WizardService.prototype.showHideResetButton = function (questions) {
        if (document.getElementById('pni-reset-button') && questions.length > 1)
            document.getElementById('pni-reset-button').style.visibility = 'visible';
        else if (document.getElementById('pni-reset-button'))
            document.getElementById('pni-reset-button').style.visibility = 'hidden';
    };
    WizardService.prototype.addQuestionAnswerHtml = function (currentQuesIndex, questions) {
        var currentQuestion = questions[currentQuesIndex];
        var Choices = currentQuestion.Choices;
        var question = currentQuestion.Question;
        var questionsHtml = "<div class=\"pni-questions\" style='text-align: center; margin-bottom: 10px' id='pni-question" + currentQuesIndex + "'>\n        <div class=\"pni-question\"> " + question + "</div>\n        <div style='text-align: right; margin-top: 10px'>\n        <select class=\"pni-select-css\" name=\"answerOptions" + currentQuesIndex + "\" id=\"answerOptions" + currentQuesIndex + "\">\n        <option value=\"\">Select</option>\n        </div>\n        ";
        for (var _i = 0, Choices_1 = Choices; _i < Choices_1.length; _i++) {
            var choice = Choices_1[_i];
            questionsHtml += "<option value=\"" + choice + "\">" + choice + "</option>";
        }
        questionsHtml += "</select></div > ";
        return questionsHtml;
    };
    return WizardService;
}());
exports.WizardService = WizardService;
//# sourceMappingURL=wizard-service.js.map