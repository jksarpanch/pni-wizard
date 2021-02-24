declare var window;

export class WizardFunctions {
  currentQuestionIndex: number = 0
  private questionsApiRetryCount = 0;
  private questions;
  private defaultTopPosition = '25%';
  private defaultRightPosition = '2%';
  private defaultLeftPosition = 'unset';
  private async fetchedQuestions() {
    let ques = await fetch('https://pni-dev-p2p-web-api.pnidev.com/PNIMEDIA/DynamicQuestions/')
    this.questions = await ques.json()

  }
  constructor() {
    this.fetchedQuestions();
  }

  private setCurrentQuestionIndex(index: number): void {
    this.currentQuestionIndex = index
  }
  private getWizardContent() {
    return `<div class="pni-wizard-header pni-color-theme">
    <div class="title">Let me help You!</div>
    <button data-close-button class="close-button" id='pni-wizard-closeBtn'>&times;</button>
    </div>
    <div class="pni-wizard-body">
        <div class="pni-questions"></div>
    </div>`
  }
  private initializeWizard(wizardContainer: Element, populateByContainer: boolean): void {
    if (populateByContainer) {
      this.removeRepetitiveElements();
    }
    wizardContainer.innerHTML = populateByContainer ? `<div class="pni-wizard active" id="pni-interactive-wizard">${this.getWizardContent()}</div>` : this.getWizardContent()
  }
  private addQuestionAnswerHtml(currentQuesIndex: number): string {
    let currentQuestion = this.questions[currentQuesIndex];
    let Choices = currentQuestion.Choices;
    let question = currentQuestion.Question;
    let questionsHtml: string = `<div class="pni-questions" style='text-align: center; margin-bottom: 10px'>
        <div class="pni-question"> ${question}</div>
        <div style='text-align: right; margin-top: 10px'>
        <select class="select-css" name="answerOptions${currentQuesIndex}" id="answerOptions${currentQuesIndex}">
        <option value="">Select</option>
        </div>
        `
    for (let i = 0; i < Choices.length; i++) {
      questionsHtml += `<option value="${Choices[i]}">${Choices[i]}</option>`
      // questionsHtml += `<option value="${Choices[i].answerId}">${Choices[i].answerValue}</option>`
    }
    questionsHtml += `</select></div > `;

    return questionsHtml
  }
  private initializeFirstQuestion(): void {
    let questionsArea = document.querySelector('.pni-wizard-body');
    questionsArea.innerHTML = this.addQuestionAnswerHtml(0)
    let selectId = `answerOptions${this.currentQuestionIndex}`
    document.getElementById(selectId).addEventListener("change", (e) => this.handleOptionChange(e, 0));
  }

  private isPniWizardOpen(): boolean {
    let wizard = document.getElementById('pni-interactive-wizard')
    return wizard && wizard.classList.contains('active');
  }
  private handleOptionChange = (e, currentQuestionSequence) => {
    let currentQuestion = this.questions[currentQuestionSequence];
    let question = currentQuestion.Question;
    if (parseInt(currentQuestion.Sequence) == this.currentQuestionIndex) {
      this.showNextQuestion()
      //TODO: JSS Temp
      window.parent.postMessage(["df19c1f7-07d8-a265-42f8-e8dfa824cc6e", "2e714edd-0d50-131a-538f-90f23863792b"], "https://satish0543.wixsite.com");
    }
    let questionData = {
      eventType: 'user_answered_question',
      eventData: {
        question: question, // required property
        answerValue: e.target.value // required property
      }
    }
    // window.pniTrackingEvent(questionData);
  }
  private clearAllQuestions() {
    let questionsArea = document.querySelector('.pni-wizard-body');
    questionsArea.innerHTML = '';
  }
  private wizardPositioning(container) {
    let topPosition = container.getAttribute("top")
    let rightPosition = container.getAttribute("right")
    // When both right and left positioning are present then right positioning will take precedence 
    let leftPosition = rightPosition ? this.defaultLeftPosition : container.getAttribute("left")

    let wizard = document.getElementById('pni-interactive-wizard')
    topPosition = topPosition ? topPosition : this.defaultTopPosition
    rightPosition = rightPosition ? rightPosition : this.defaultRightPosition
    leftPosition = leftPosition ? leftPosition : this.defaultLeftPosition
    wizard.style.top = topPosition
    wizard.style.right = rightPosition
    wizard.style.left = leftPosition
  }
  showNextQuestion() {
    if (this.isPniWizardOpen() && this.currentQuestionIndex < this.questions.length - 1) {
      // clearAllQuestions()
      let questionsArea = document.querySelector('.pni-wizard-body');
      let questionHtml = this.addQuestionAnswerHtml(this.currentQuestionIndex)
      questionsArea.insertAdjacentHTML("beforeend", questionHtml);
      let currentQuesSequence = this.currentQuestionIndex
      let selectId = `answerOptions${currentQuesSequence}`
      document.getElementById(selectId).addEventListener("change", (e) => this.handleOptionChange(e, currentQuesSequence));
      this.setCurrentQuestionIndex(this.currentQuestionIndex + 1)
    }
  }
  closeInteractiveWizard = () => {
    let wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
    wizardContainer.innerHTML = '';
  }
  private populateWizard = (wizardContainer: Element, populateByContainer: boolean) => {
    this.questionsApiRetryCount = 0;
    this.setCurrentQuestionIndex(0);
    this.initializeWizard(wizardContainer, populateByContainer);
    this.initializeFirstQuestion();
    this.setCurrentQuestionIndex(this.questions[0].Sequence)
    // Setting positioning of wizard 
    let setPositioning = wizardContainer.getAttribute("positioning")
    if (setPositioning && setPositioning == 'true') {
      this.wizardPositioning(wizardContainer)
    }
    if (!populateByContainer)
      wizardContainer.classList.add('active');
    // Added close wizard event listner
    document.getElementById("pni-wizard-closeBtn").addEventListener("click", this.closeInteractiveWizard);
  }
  private removeRepetitiveElements() {
    let repetitiveElements = document.querySelectorAll('[id=pni-interactive-wizard]');
    for (let i = 0; i < repetitiveElements.length; i++) {
      repetitiveElements[i].remove();
    }
  }
  interactiveWizard = () => {
    let wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
    let populateByContainer = wizardContainer ? true : false
    wizardContainer = wizardContainer ? wizardContainer : document.getElementById('pni-interactive-wizard');

    let haveQuestions = this.questions && this.questions.length >= 1
    if (wizardContainer && !this.isPniWizardOpen() && haveQuestions) {
      this.populateWizard(wizardContainer, populateByContainer)
    }
    else if (!this.isPniWizardOpen() && !haveQuestions && this.questionsApiRetryCount < 30) {
      console.log('Tried', this.questionsApiRetryCount)
      this.questionsApiRetryCount++
      setTimeout(() => {
        this.interactiveWizard();
      }, 250)
    }
  }
}