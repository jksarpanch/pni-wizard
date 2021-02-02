const questions = [
    {
        index: 0,
        question: "What are you looking for",
        answers: [{ answerId: '1', answerValue: 'Cloths' }, { answerId: '2', answerValue: 'Shoes' }]
    },
    {
        index: 1,
        question: "Please pick a category",
        answers: [{ answerId: '1', answerValue: 'Men' }, { answerId: '2', answerValue: 'Women' }]
    },
    {
        index: 2,
        question: "So which one looks best?",
        answers: [{ answerId: '1', answerValue: 'Sneakers' }, { answerId: '2', answerValue: 'Sport' }]
    }
]
let clearAllQuestions = function () {
    var questionsArea = document.querySelector('.pni-wizard-body');
    questionsArea.innerHTML = '';
}

let handleOptionChange = function (e) {
    console.log(e)
}
let addQuestionAnswerHtml = function (question, answers) {
    var questionsHtml = `<div class="pni-questions">
    <span class="pni-question"> ${question}</span>
    <label for="answerOptions">Options:</label>
    <select name="answerOptions${this.currentQuestionIndex}" id="answerOptions${this.currentQuestionIndex}" onchange="handleOptionChange(event)">
    <option value="">Select</option>
    `
    for (let i = 0; i < answers.length; i++) {
        questionsHtml += `<option value="${answers[i].answerId}">${answers[i].answerValue}</option>`
    }
    questionsHtml += `</select></div > `;
    return questionsHtml
}

let initializeFirstQuestion = function () {
    var questionsArea = document.querySelector('.pni-wizard-body');
    questionsArea.innerHTML = addQuestionAnswerHtml(questions[0].question, questions[0].answers)
    floatingWizard.setCurrentQuestionIndex(questions[0].index)
}

var floatingWizard = {
    currentQuestionIndex: 0,    
    pniWizard: function (selector) {
        var self =
        {
            element: document.querySelector(selector),
            html: function () { self.element },

        };
        return self;
    },
    initializeWizard: function(){
        var wizard =  document.getElementById('pni-interactive-wizard')
        wizard.innerHTML = `<div class="pni-wizard-header">
        <div class="title">Let me help You!</div>
        <button data-close-button class="close-button"
            onclick="floatingWizard.closeIntyeractiveWizard()">&times;</button>
        </div>
        <div class="pni-wizard-body">
            <div class="pni-questions"></div>
        </div>`
    },
    setCurrentQuestionIndex: function (index) {
        this.currentQuestionIndex = index
    },

    openIntyeractiveWizard: function () {
        var wizard =  document.getElementById('pni-interactive-wizard')
        this.initializeWizard();
        wizard.classList.add('active');
        initializeFirstQuestion();
    },
    closeIntyeractiveWizard: function () {
        var wizard =  document.getElementById('pni-interactive-wizard')
        wizard.classList.remove('active');
    },
    isPniWizardOpen: function () {
        var wizard =  document.getElementById('pni-interactive-wizard')
        return wizard.classList.contains('active');
    },

    showNextQuestion: function () {
        if (this.isPniWizardOpen() && this.currentQuestionIndex < questions.length - 1) {
            clearAllQuestions()
            var questionsArea = document.querySelector('.pni-wizard-body');
            let questionHtml = addQuestionAnswerHtml(questions[this.currentQuestionIndex + 1].question, questions[this.currentQuestionIndex + 1].answers)
            questionsArea.insertAdjacentHTML("beforeend", questionHtml);
            this.setCurrentQuestionIndex(this.currentQuestionIndex + 1)
        }
    }

}