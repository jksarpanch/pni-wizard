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
var WizardFunctions = (function () {
    function WizardFunctions() {
        var _this = this;
        this.currentQuestionIndex = 0;
        this.questionsApiRetryCount = 0;
        this.questions = [];
        this.defaultTopPosition = '25%';
        this.defaultRightPosition = '2%';
        this.defaultLeftPosition = 'unset';
        this.handleOptionChange = function (e, currentQuestionSequence) {
            var currentQuestion = _this.questions[currentQuestionSequence];
            var question = currentQuestion.Question;
            if (parseInt(currentQuestion.Sequence) == _this.currentQuestionIndex) {
                _this.showNextQuestion(currentQuestion.Sequence, e.target.value);
            }
            var questionData = {
                eventType: 'user_answered_question',
                eventData: {
                    question: question,
                    answerValue: e.target.value
                }
            };
            window.pniTrackingEvent(questionData);
        };
        this.queryParams = '';
        this.closeInteractiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            wizardContainer.innerHTML = '';
        };
        this.populateWizard = function (wizardContainer, populateByContainer) {
            _this.questionsApiRetryCount = 0;
            _this.setCurrentQuestionIndex(0);
            _this.initializeWizard(wizardContainer, populateByContainer);
            _this.initializeFirstQuestion();
            _this.setCurrentQuestionIndex(_this.questions[0].Sequence);
            var setPositioning = wizardContainer.getAttribute("positioning");
            if (setPositioning && setPositioning == 'true') {
                _this.wizardPositioning(wizardContainer);
            }
            if (!populateByContainer)
                wizardContainer.classList.add('active');
            document.getElementById("pni-wizard-closeBtn").addEventListener("click", _this.closeInteractiveWizard);
        };
        this.interactiveWizard = function () {
            var wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
            var populateByContainer = wizardContainer ? true : false;
            wizardContainer = wizardContainer ? wizardContainer : document.getElementById('pni-interactive-wizard');
            var haveQuestions = _this.questions && _this.questions.length >= 1;
            if (wizardContainer && !_this.isPniWizardOpen() && haveQuestions) {
                _this.populateWizard(wizardContainer, populateByContainer);
            }
            else if (!_this.isPniWizardOpen() && !haveQuestions && _this.questionsApiRetryCount < 30) {
                console.log('Tried', _this.questionsApiRetryCount);
                _this.questionsApiRetryCount++;
                setTimeout(function () {
                    _this.interactiveWizard();
                }, 250);
            }
        };
        this.fetchedQuestions('');
    }
    WizardFunctions.prototype.fetchedQuestions = function (queryParams) {
        return __awaiter(this, void 0, void 0, function () {
            var ques, newQuestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch('https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/' + queryParams)];
                    case 1:
                        ques = _a.sent();
                        return [4, ques.json()];
                    case 2:
                        newQuestions = _a.sent();
                        console.log(newQuestions);
                        this.questions.push(newQuestions[0]);
                        return [2];
                }
            });
        });
    };
    WizardFunctions.prototype.setCurrentQuestionIndex = function (index) {
        this.currentQuestionIndex = index;
    };
    WizardFunctions.prototype.getWizardContent = function () {
        return "<div class=\"pni-wizard-header pni-color-theme\">\n    <div class=\"title\">Let me help You!</div>\n    <button data-close-button class=\"close-button\" id='pni-wizard-closeBtn'>&times;</button>\n    </div>\n    <div class=\"pni-wizard-body\">\n        <div class=\"pni-questions\"></div>\n    </div>";
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
        var questionsHtml = "<div class=\"pni-questions\" style='text-align: center; margin-bottom: 10px'>\n        <div class=\"pni-question\"> " + question + "</div>\n        <div style='text-align: right; margin-top: 10px'>\n        <select class=\"select-css\" name=\"answerOptions" + currentQuesIndex + "\" id=\"answerOptions" + currentQuesIndex + "\">\n        <option value=\"\">Select</option>\n        </div>\n        ";
        for (var i = 0; i < Choices.length; i++) {
            questionsHtml += "<option value=\"" + Choices[i] + "\">" + Choices[i] + "</option>";
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
    WizardFunctions.prototype.clearAllQuestions = function () {
        var questionsArea = document.querySelector('.pni-wizard-body');
        questionsArea.innerHTML = '';
    };
    WizardFunctions.prototype.wizardPositioning = function (container) {
        var topPosition = container.getAttribute("top");
        var rightPosition = container.getAttribute("right");
        var leftPosition = rightPosition ? this.defaultLeftPosition : container.getAttribute("left");
        var wizard = document.getElementById('pni-interactive-wizard');
        topPosition = topPosition ? topPosition : this.defaultTopPosition;
        rightPosition = rightPosition ? rightPosition : this.defaultRightPosition;
        leftPosition = leftPosition ? leftPosition : this.defaultLeftPosition;
        wizard.style.top = topPosition;
        wizard.style.right = rightPosition;
        wizard.style.left = leftPosition;
    };
    WizardFunctions.prototype.setQuestionsQuery = function (seq, answerValue) {
        var newQuery = String(seq) + '/' + String(answerValue) + '/';
        this.queryParams += newQuery;
    };
    WizardFunctions.prototype.showNextQuestion = function (seq, answerValue) {
        return __awaiter(this, void 0, void 0, function () {
            var ques, newQuestions, questionsArea, questionHtml, currentQuesSequence_1, selectId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isPniWizardOpen() && this.currentQuestionIndex == this.questions.length)) return [3, 3];
                        this.setQuestionsQuery(seq, answerValue);
                        return [4, fetch('https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/' + this.queryParams)];
                    case 1:
                        ques = _a.sent();
                        return [4, ques.json()];
                    case 2:
                        newQuestions = _a.sent();
                        this.questions.push(newQuestions[0]);
                        window.parent.postMessage(newQuestions[0].Products, "https://satish0543.wixsite.com");
                        questionsArea = document.querySelector('.pni-wizard-body');
                        questionHtml = this.addQuestionAnswerHtml(this.currentQuestionIndex);
                        questionsArea.insertAdjacentHTML("beforeend", questionHtml);
                        currentQuesSequence_1 = this.currentQuestionIndex;
                        selectId = "answerOptions" + currentQuesSequence_1;
                        document.getElementById(selectId).addEventListener("change", function (e) { return _this.handleOptionChange(e, currentQuesSequence_1); });
                        this.setCurrentQuestionIndex(this.currentQuestionIndex + 1);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    WizardFunctions.prototype.removeRepetitiveElements = function () {
        var repetitiveElements = document.querySelectorAll('[id=pni-interactive-wizard]');
        for (var i = 0; i < repetitiveElements.length; i++) {
            repetitiveElements[i].remove();
        }
    };
    return WizardFunctions;
}());
export { WizardFunctions };
//# sourceMappingURL=wizard-functions.js.map