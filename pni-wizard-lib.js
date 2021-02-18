var questions = []
var getQuestionsData = function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://pni-dev-p2p-web-api.pnidev.com/PNIMEDIA/DynamicQuestions/');
    request.send();
    request.onload = function () {
        console.log(request)
        if (request.status == '200') {
            questions = JSON.parse(request.response);
        }
        else {
            console.log(request)
        }
    }
}
getQuestionsData();
let clearAllQuestions = function () {
    var questionsArea = document.querySelector('.pni-wizard-body');
    questionsArea.innerHTML = '';
}

let handleOptionChange = function (e, question, questionSequence) {
    if (parseInt(questionSequence) == floatingWizard.currentQuestionIndex){
        floatingWizard.showNextQuestion()
        //TODO: JSS Temp
        window.parent.postMessage(["a97ccda0-6ae5-429c-89bd-665a933cb092","1833cfcf-ae18-48b2-9893-dfab235feba9","e203723a-b3ad-4746-a6e0-0afcbeacbf03","bf4dd941-c04f-48a2-9939-e99d213b52f0"], "https://satish0543.wixsite.com");
    }
    var questionData = {
        eventType: 'user_answered_question',
        eventData: {
            question: question, // required property
            answerValue: e.target.value // required property
        }
    }
    window.pniTrackingEvent(questionData);
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
    addQuestionAnswerHtml: function (question, Choices, questionSequence) {
        var questionsHtml = `<div class="pni-questions" style='text-align: center; margin-bottom: 10px'>
        <span class="pni-question" style="font-weight: bold"> ${question}</span>
        <div style='text-align: right; margin-top: 10px'>
        <select class="select-css" name="answerOptions${this.currentQuestionIndex}" id="answerOptions${this.currentQuestionIndex}" onchange="handleOptionChange(event, '${question}', '${questionSequence}')">
        <option value="">Select</option>
        </div>
        `
        for (let i = 0; i < Choices.length; i++) {
            questionsHtml += `<option value="${Choices[i]}">${Choices[i]}</option>`
            // questionsHtml += `<option value="${Choices[i].answerId}">${Choices[i].answerValue}</option>`
        }
        questionsHtml += `</select></div > `;
        return questionsHtml
    },

    initializeFirstQuestion: function () {
        var questionsArea = document.querySelector('.pni-wizard-body');
        questionsArea.innerHTML = this.addQuestionAnswerHtml(questions[0].Question, questions[0].Choices, questions[0].Sequence)
        floatingWizard.setCurrentQuestionIndex(questions[0].Sequence)
    },
    initializeWizard: function () {
        var wizard = document.getElementById('pni-interactive-wizard')
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
        var wizard = document.getElementById('pni-interactive-wizard')
        if (wizard.className.indexOf('active') == -1) {
            this.initializeWizard();
            wizard.classList.add('active');
            this.initializeFirstQuestion();
        }
    },
    closeIntyeractiveWizard: function () {
        var wizard = document.getElementById('pni-interactive-wizard')
        wizard.classList.remove('active');
    },
    isPniWizardOpen: function () {
        var wizard = document.getElementById('pni-interactive-wizard')
        return wizard.classList.contains('active');
    },

    showNextQuestion: function () {
        if (this.isPniWizardOpen() && this.currentQuestionIndex < questions.length - 1) {
            // clearAllQuestions()
            var questionsArea = document.querySelector('.pni-wizard-body');
            let questionHtml = this.addQuestionAnswerHtml(questions[this.currentQuestionIndex].Question, questions[this.currentQuestionIndex].Choices, questions[this.currentQuestionIndex].Sequence)
            questionsArea.insertAdjacentHTML("beforeend", questionHtml);
            this.setCurrentQuestionIndex(this.currentQuestionIndex + 1)
        }
    },
    getCatalogData: function () {
        setTimeout(function () {
            return []
        }, 2000)
    }
}