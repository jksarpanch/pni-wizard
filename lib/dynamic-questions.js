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
exports.DynamicQuestions = void 0;
var DynamicQuestions = (function () {
    function DynamicQuestions(questions, wizardService) {
        var _this = this;
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.questionList = [];
        this.productCartegory = '';
        this.dynamicsQuestionApi = 'https://pni-dev-p2p-web-api.pnidev.com/api/DynamicQuestion/GetChoices/';
        this.displayProducts = function (ids) { };
        this.setNewQuestion = function () { return __awaiter(_this, void 0, void 0, function () {
            var ques, newQuestion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.wizardService.fetchNewQuestion(this.dynamicsQuestionApi, this.questionList)];
                    case 1:
                        ques = _a.sent();
                        return [4, ques.json()];
                    case 2:
                        newQuestion = _a.sent();
                        this.wizardService.disableEnableChoiceDropdown(true);
                        if (newQuestion && newQuestion[0] && newQuestion[0].Choices.length >= 1) {
                            this.questions.push(newQuestion[0]);
                            return [2, true];
                        }
                        this.wizardService.displayProducts(newQuestion[0].Products);
                        this.questionList.pop();
                        return [2, null];
                }
            });
        }); };
        this.showNextQuestion = function (questionSequence, answerValue) { return __awaiter(_this, void 0, void 0, function () {
            var newQuestion, questionsArea, questionHtml, currentQuesSequence_1, selectId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.wizardService.isPniWizardOpen() && this.currentQuestionIndex == this.questions.length && answerValue)) return [3, 2];
                        this.setQuestionsQuery(questionSequence, answerValue, this.productCartegory);
                        return [4, this.setNewQuestion()];
                    case 1:
                        newQuestion = _a.sent();
                        if (newQuestion) {
                            questionsArea = document.querySelector('.pni-wizard-body');
                            questionHtml = this.wizardService.addQuestionAnswerHtml(this.currentQuestionIndex, this.questions);
                            questionsArea.insertAdjacentHTML("beforeend", questionHtml);
                            currentQuesSequence_1 = this.currentQuestionIndex;
                            selectId = "answerOptions" + currentQuesSequence_1;
                            document.getElementById(selectId).addEventListener("change", function (e) { return _this.handleOptionChange(e, currentQuesSequence_1); });
                            this.currentQuestionIndex = this.currentQuestionIndex + 1;
                            this.wizardService.showHideResetButton(this.questions);
                            this.wizardService.displayProducts(this.questions[this.questions.length - 1].Products);
                        }
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        }); };
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
        this.handleOptionChange = function (e, currentQuestionSequence) {
            var currentQuestion = _this.questions[currentQuestionSequence];
            var questionText = currentQuestion.Question;
            if (currentQuestion.Sequence == _this.currentQuestionIndex) {
                _this.showNextQuestion(currentQuestion.Sequence, e.target.value);
            }
            else {
                _this.reevaluateQuestions(currentQuestionSequence);
                _this.currentQuestionIndex = _this.questions.length;
                _this.showNextQuestion(currentQuestion.Sequence, e.target.value);
                _this.wizardService.showHideResetButton(_this.questions);
            }
            if (_this.wizardService.tracking) {
                _this.wizardService.triggerTrackingEvent(currentQuestionSequence, questionText, e.target.value);
            }
        };
        this.renderQuestionsWizard = function () {
            _this.initializeFirstQuestion();
            _this.currentQuestionIndex = _this.questions[0].Sequence;
        };
        this.resetQuestionsWizard = function () {
            _this.questions = [_this.questions[0]];
            _this.currentQuestionIndex = 0;
            _this.questionList = [];
            _this.wizardService.showHideResetButton(_this.questions);
        };
        this.wizardService = wizardService;
        this.questions = questions;
    }
    ;
    DynamicQuestions.prototype.setQuestionsQuery = function (questionSequence, answerValue, category) {
        this.questionList.push({ sequence: questionSequence, choice: answerValue, attrvalue: category });
    };
    DynamicQuestions.prototype.initializeFirstQuestion = function () {
        var _this = this;
        var questionsArea = document.querySelector('.pni-wizard-body');
        questionsArea.innerHTML = this.wizardService.addQuestionAnswerHtml(0, this.questions);
        var selectId = "answerOptions" + this.currentQuestionIndex;
        document.getElementById(selectId).addEventListener("change", function (e) { return _this.handleOptionChange(e, 0); });
    };
    return DynamicQuestions;
}());
exports.DynamicQuestions = DynamicQuestions;
//# sourceMappingURL=dynamic-questions.js.map