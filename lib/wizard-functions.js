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
exports.WizardFunctions = void 0;
require("./style.css");
;
;
var WizardFunctions = (function () {
    function WizardFunctions() {
        var _this = this;
        this.currentQuestionIndex = 0;
        this.questionsApiRetryCount = 0;
        this.questions = [];
        this.defaultTopPosition = '25%';
        this.defaultRightPosition = '2%';
        this.defaultLeftPosition = 'unset';
        this.dynamicsQuestionApi = 'https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/';
        this.questionList = [];
        this.tracking = false;
        this.handleOptionChange = function (e, currentQuestionSequence) {
            var currentQuestion = _this.questions[currentQuestionSequence];
            var question = currentQuestion.Question;
            if (currentQuestion.Sequence == _this.currentQuestionIndex) {
                _this.showNextQuestion(currentQuestion.Sequence, e.target.value);
            }
            else {
                _this.reevaluateQuestions(currentQuestionSequence);
                _this.currentQuestionIndex = _this.questions.length;
                _this.showNextQuestion(currentQuestion.Sequence, e.target.value);
                _this.showHideResetButton();
            }
            if (_this.tracking) {
                _this.triggerTrackingEvent(currentQuestionSequence, question, e.target.value);
            }
        };
        this.reevaluateQuestions = function (questionSequence) {
            _this.questionList = _this.questionList.filter(function (query, i) {
                return i < questionSequence;
            });
            _this.questions.forEach(function (ques, i) {
                if (i > questionSequence)
                    document.getElementById("pni-question" + i).remove();
            });
            _this.questions = _this.questions.filter(function (ques, i) {
                return i <= questionSequence;
            });
        };
        this.setNewQuestion = function () { return __awaiter(_this, void 0, void 0, function () {
            var ques, newQuestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.fetchNewQuestion()];
                    case 1:
                        ques = _a.sent();
                        return [4, ques.json()];
                    case 2:
                        newQuestion = _a.sent();
                        if (newQuestion && newQuestion[0] && newQuestion[0].Choices.length >= 1) {
                            this.questions.push(newQuestion[0]);
                            return [2, true];
                        }
                        this.displayProducts(newQuestion[0].Products);
                        this.questionList.pop();
                        return [2, null];
                }
            });
        }); };
        this.addResetButton = function () {
            var questionsArea = document.querySelector('#pni-interactive-wizard');
            var resetHtml = "<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style=\"visibility: hidden;\">Reset</button>";
            questionsArea.insertAdjacentHTML("beforeend", resetHtml);
        };
        this.populateWizard = function (wizardContainer, populateByContainer) {
            _this.questionsApiRetryCount = 0;
            _this.currentQuestionIndex = 0;
            _this.initializeWizard(wizardContainer, populateByContainer);
            _this.initializeFirstQuestion();
            _this.currentQuestionIndex = _this.questions[0].Sequence;
            _this.addResetButton();
            _this.configuringWizard(wizardContainer);
            if (!populateByContainer)
                wizardContainer.classList.add('active');
            document.getElementById("pni-wizard-closeBtn").addEventListener("click", _this.closeInteractiveWizard);
            document.getElementById("pni-reset-button").addEventListener("click", _this.resetInteractiveWizard);
        };
        this.openInteractiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            var populateByContainer = wizardContainer ? true : false;
            wizardContainer = wizardContainer ? wizardContainer : document.getElementById('pni-interactive-wizard');
            var haveQuestions = _this.questions && _this.questions.length >= 1;
            if (wizardContainer && !_this.isPniWizardOpen() && haveQuestions) {
                _this.populateWizard(wizardContainer, populateByContainer);
            }
            else if (!_this.isPniWizardOpen() && !haveQuestions && _this.questionsApiRetryCount < 30) {
                _this.questionsApiRetryCount++;
                setTimeout(function () {
                    _this.openInteractiveWizard();
                }, 250);
            }
        };
        this.showNextQuestion = function (questionSequence, answerValue) { return __awaiter(_this, void 0, void 0, function () {
            var newQuestion, questionsArea, questionHtml, currentQuesSequence_1, selectId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isPniWizardOpen() && this.currentQuestionIndex == this.questions.length && answerValue)) return [3, 2];
                        this.setQuestionsQuery(questionSequence, answerValue);
                        return [4, this.setNewQuestion()];
                    case 1:
                        newQuestion = _a.sent();
                        if (newQuestion) {
                            questionsArea = document.querySelector('.pni-wizard-body');
                            questionHtml = this.addQuestionAnswerHtml(this.currentQuestionIndex);
                            questionsArea.insertAdjacentHTML("beforeend", questionHtml);
                            currentQuesSequence_1 = this.currentQuestionIndex;
                            selectId = "answerOptions" + currentQuesSequence_1;
                            document.getElementById(selectId).addEventListener("change", function (e) { return _this.handleOptionChange(e, currentQuesSequence_1); });
                            this.currentQuestionIndex = this.currentQuestionIndex + 1;
                            this.showHideResetButton();
                            this.displayProducts(this.questions[this.questions.length - 1].Products);
                        }
                        return [3, 3];
                    case 2:
                        if (this.isPniWizardOpen() && !answerValue) {
                        }
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); };
        this.configureWizard = function (displayProducts) {
            _this.displayProducts = displayProducts;
        };
        this.resetWizard = function () {
            _this.questions = [_this.questions[0]];
            _this.questionList = [];
            _this.showHideResetButton();
        };
        this.resetInteractiveWizard = function () {
            _this.resetWizard();
            _this.closeInteractiveWizard();
            _this.openInteractiveWizard();
        };
        this.closeInteractiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            wizardContainer.innerHTML = '';
            _this.resetWizard();
        };
        this.fetchFirstQuestion();
    }
    WizardFunctions.prototype.fetchNewQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.dynamicsQuestionApi, {
                            method: "POST",
                            body: JSON.stringify(this.questionList)
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    WizardFunctions.prototype.fetchFirstQuestion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ques, newQuestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(this.dynamicsQuestionApi)];
                    case 1:
                        ques = _a.sent();
                        return [4, ques.json()];
                    case 2:
                        newQuestions = _a.sent();
                        this.questions.push(newQuestions[0]);
                        return [2];
                }
            });
        });
    };
    WizardFunctions.prototype.getWizardContent = function () {
        return "<div class=\"pni-wizard-header pni-color-theme-background\">\n    <div class=\"title\">Let me help You!</div>\n    <button data-close-button class=\"close-button\" id='pni-wizard-closeBtn'>&times;</button>\n    </div>\n    <div class=\"pni-wizard-body\"></div>";
    };
    WizardFunctions.prototype.initializeWizard = function (wizardContainer, populateByContainer) {
        if (populateByContainer) {
            this.removeRepetitiveElements();
        }
        wizardContainer.innerHTML = populateByContainer ? "<div class=\"pni-wizard active\" id=\"pni-interactive-wizard\">" + this.getWizardContent() + "</div>" : this.getWizardContent();
    };
    WizardFunctions.prototype.addQuestionAnswerHtml = function (currentQuesIndex) {
        var currentQuestion = this.questions[currentQuesIndex];
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
    WizardFunctions.prototype.initializeFirstQuestion = function () {
        var _this = this;
        var questionsArea = document.querySelector('.pni-wizard-body');
        questionsArea.innerHTML = this.addQuestionAnswerHtml(0);
        var selectId = "answerOptions" + this.currentQuestionIndex;
        document.getElementById(selectId).addEventListener("change", function (e) { return _this.handleOptionChange(e, 0); });
    };
    WizardFunctions.prototype.isPniWizardOpen = function () {
        var wizard = document.getElementById('pni-interactive-wizard');
        return wizard && wizard.classList.contains('active');
    };
    WizardFunctions.prototype.triggerTrackingEvent = function (sequence_id, questionText, answerValue) {
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
    WizardFunctions.prototype.wizardPositioning = function (topPosition, rightPosition, leftPosition) {
        leftPosition = rightPosition ? this.defaultLeftPosition : leftPosition;
        var wizard = document.getElementById('pni-interactive-wizard');
        topPosition = topPosition ? topPosition : this.defaultTopPosition;
        rightPosition = rightPosition ? rightPosition : this.defaultRightPosition;
        leftPosition = leftPosition ? leftPosition : this.defaultLeftPosition;
        wizard.style.top = topPosition;
        wizard.style.right = rightPosition;
        wizard.style.left = leftPosition;
    };
    WizardFunctions.prototype.setQuestionsQuery = function (questionSequence, answerValue) {
        this.questionList.push({ sequence: questionSequence, choice: answerValue });
    };
    WizardFunctions.prototype.configuringWizard = function (wizardContainer) {
        var setPositioning = wizardContainer.getAttribute("positioning");
        this.tracking = wizardContainer.getAttribute("tracking") && wizardContainer.getAttribute("tracking") == 'true' ? true : false;
        if (setPositioning && setPositioning == 'true')
            this.wizardPositioning(wizardContainer.getAttribute("top"), wizardContainer.getAttribute("right"), wizardContainer.getAttribute("left"));
        if (wizardContainer.getAttribute("color"))
            document.documentElement.style.setProperty('--defaultTheme', wizardContainer.getAttribute("color"));
    };
    WizardFunctions.prototype.removeRepetitiveElements = function () {
        var repetitiveElements = document.querySelectorAll('[id=pni-interactive-wizard]');
        repetitiveElements.forEach(function (el) {
            el.remove();
        });
    };
    WizardFunctions.prototype.showHideResetButton = function () {
        if (document.getElementById('pni-reset-button') && this.questions.length > 1)
            document.getElementById('pni-reset-button').style.visibility = 'visible';
        else if (document.getElementById('pni-reset-button'))
            document.getElementById('pni-reset-button').style.visibility = 'hidden';
    };
    return WizardFunctions;
}());
exports.WizardFunctions = WizardFunctions;
//# sourceMappingURL=wizard-functions.js.map