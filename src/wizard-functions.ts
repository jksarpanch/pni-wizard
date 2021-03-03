declare var window;

export class WizardFunctions {
  private currentQuestionIndex: number = 0
  private questionsApiRetryCount = 0;
  private questions = [];
  private questionsApiQueryParams = ''
  private defaultTopPosition = '25%';
  private defaultRightPosition = '2%';
  private defaultLeftPosition = 'unset';
  private dynamicsQuestionApi = 'https://pni-dev-p2p-web-api.pnidev.com/PNIMedia/DynamicQuestions/';
  private questionQueryList: string[] = [];
  private questionList: any[] = [];
  private tracking: boolean = false;

  constructor() {
    this.fetchFirstQuestion();
  }
  // Will make an api call to dynamic questions
  private async fetchNewQuestion() {
    return await fetch(this.dynamicsQuestionApi,{
      method: "POST", 
      body: JSON.stringify(this.questionList)
    })
  }
  private async fetchFirstQuestion() {
    let ques = await fetch(this.dynamicsQuestionApi)
    let newQuestions = await ques.json();
    this.questions.push(newQuestions[0]);
  }
  // Will return html for wizard main content 
  private getWizardContent(): string {
    return `<div class="pni-wizard-header pni-color-theme-background">
    <div class="title">Let me help You!</div>
    <button data-close-button class="close-button" id='pni-wizard-closeBtn'>&times;</button>
    </div>
    <div class="pni-wizard-body"></div>`
  }
  // Will initialize things and put wizard on the dom
  private initializeWizard(wizardContainer: Element, populateByContainer: boolean): void {
    if (populateByContainer) {
      this.removeRepetitiveElements();
    }
    wizardContainer.innerHTML = populateByContainer ? `<div class="pni-wizard active" id="pni-interactive-wizard">${this.getWizardContent()}</div>` : this.getWizardContent()
  }
  // This will put question html in the body of wizard
  private addQuestionAnswerHtml(currentQuesIndex: number): string {
    let currentQuestion = this.questions[currentQuesIndex];
    let Choices = currentQuestion.Choices;
    let question = currentQuestion.Question;
    let questionsHtml: string = `<div class="pni-questions" style='text-align: center; margin-bottom: 10px' id='pni-question${currentQuesIndex}'>
        <div class="pni-question"> ${question}</div>
        <div style='text-align: right; margin-top: 10px'>
        <select class="pni-select-css" name="answerOptions${currentQuesIndex}" id="answerOptions${currentQuesIndex}">
        <option value="">Select</option>
        </div>
        `
    for (let choice of Choices) {
      questionsHtml += `<option value="${choice}">${choice}</option>`
    }
    questionsHtml += `</select></div > `;
    return questionsHtml
  }
  // Initializing the first question on wizard load
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
  private triggerTrackingEvent(sequence_id: number, questionText: string, answerValue: string){
    let questionData = {
      eventType: 'user_answered_question',
      eventData: {
        sequence_id,
        questionText, 
        answerValue 
      }
    }
    window.pniTrackingEvent(questionData);
  }

  // This will triger on chnaging or selecting choices to a question 
  private handleOptionChange = (e, currentQuestionSequence: number) => {
    let currentQuestion = this.questions[currentQuestionSequence];
    let question = currentQuestion.Question;
    // For changing a value of new question
    if (parseInt(currentQuestion.Sequence) == this.currentQuestionIndex) {
      this.showNextQuestion(currentQuestion.Sequence, e.target.value)
    }
    // For changing a value of any previously answered question
    else {
      this.reevaluateQuestions(currentQuestionSequence);
      this.currentQuestionIndex = this.questions.length;
      this.showNextQuestion(currentQuestion.Sequence, e.target.value)
      this.showHideResetButton();
    }    
    if(this.tracking){
      this.triggerTrackingEvent(currentQuestionSequence, question, e.target.value)
    }   
  }
  // If a client wants to set positioning of the wizard manually
  private wizardPositioning(container: Element) {
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
  //  When a user will change answer to an already answered question
  private reevaluateQuestions = (questionSequence: number) => {

	this.questionList = this.questionList.filter((query, i) => {
      return i < questionSequence
    })
    // Remove questions query params for already answered future questions based on users current selection
    this.questionQueryList = this.questionQueryList.filter((query, i) => {
      return i < questionSequence
    })
    // Remove html for already answered future questions based on users current selection
    this.questions.forEach((ques, i) => {
      if (i > questionSequence)
        document.getElementById(`pni-question${i}`).remove();
    })
    // Remove already answered future questions from scope based on users current selection
    this.questions = this.questions.filter((ques, i) => {
      return i <= questionSequence
    })
  }
  // Set questions api query param based on user choices to questions
  private setQuestionsQuery(questionSequence: number, answerValue: string) {
    this.questionList.push({sequence: questionSequence, choice: answerValue})
    // let query = '';
    // let newQuery = String(questionSequence) + '/' + String(answerValue) + '/';
    // let newQuery = {sequence: questionSequence, choice: answerValue}
    // this.questionQueryList.push(newQuery)
    // this.questionQueryList.forEach(q => {
    //   query += q
    // })
    // this.questionsApiQueryParams = query
  }
  // Once a user will make a selection then an api will be called to fetch new question
  private  setNewQuestion = async () => {
    let ques = await this.fetchNewQuestion();
    let newQuestion = await ques.json();
    // check if new question is coming with some choices
    //TODO:JSS Temp        
    window.parent.postMessage(newQuestion[0].Products, "https://satish0543.wixsite.com");

    if (newQuestion && newQuestion[0] && newQuestion[0].Choices.length >= 1) {
      this.questions.push(newQuestion[0]);
      return true
    }
    this.questionList.pop();
    this.questionQueryList.pop();
    return null;
  }
  private addResetButton = () => {
    let questionsArea = document.querySelector('#pni-interactive-wizard');
    let resetHtml = `<button id='pni-reset-button' class='pni-reset-button pni-color-theme' style="visibility: hidden;">Reset</button>`;
    questionsArea.insertAdjacentHTML("beforeend", resetHtml);
  }
  private positioningAndTracking(wizardContainer){
    // Setting positioning of wizard 
    let setPositioning = wizardContainer.getAttribute("positioning")
    let tracking = wizardContainer.getAttribute("tracking")
    if (setPositioning && setPositioning == 'true') {
      this.wizardPositioning(wizardContainer)
    }    
    this.tracking = tracking && tracking == 'true' ? true: false
  }
  // This will populate wizard on the dom after initializing few properties
  private populateWizard = (wizardContainer: Element, populateByContainer: boolean) => {
    this.questionsApiRetryCount = 0;
    this.currentQuestionIndex = 0;
    this.initializeWizard(wizardContainer, populateByContainer);
    this.initializeFirstQuestion();
    this.currentQuestionIndex = this.questions[0].Sequence
    this.addResetButton()
    this.positioningAndTracking(wizardContainer);
    // if client is populating wizard in a div
    if (!populateByContainer)
      wizardContainer.classList.add('active');
    // Added close wizard event listner
    document.getElementById("pni-wizard-closeBtn").addEventListener("click", this.closeInteractiveWizard);
    document.getElementById("pni-reset-button").addEventListener("click", this.clearAllQuestions);
  }
  // If a user will call our wizard dom element as an htmlElement and in a div then 
  // Wizard as an htmlElement will take precedence and all div elements with id pni-interactive-wizard will be removed 
  private removeRepetitiveElements() {
    let repetitiveElements = document.querySelectorAll('[id=pni-interactive-wizard]');
    repetitiveElements.forEach(el => {
      el.remove();
    });
  }
  // method to open wizard
  openInteractiveWizard = () => {
    let wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
    let populateByContainer = wizardContainer ? true : false
    wizardContainer = wizardContainer ? wizardContainer : document.getElementById('pni-interactive-wizard');

    let haveQuestions = this.questions && this.questions.length >= 1
    if (wizardContainer && !this.isPniWizardOpen() && haveQuestions) {
      this.populateWizard(wizardContainer, populateByContainer)
    }
    // Wizard will wait approx 7 seconds for the questions api to respond to display first question
    else if (!this.isPniWizardOpen() && !haveQuestions && this.questionsApiRetryCount < 30) {
      this.questionsApiRetryCount++
      setTimeout(() => {
        this.openInteractiveWizard();
      }, 250)
    }
  }
  private showHideResetButton() {
    if (document.getElementById('pni-reset-button') && this.questions.length > 1)
      document.getElementById('pni-reset-button').style.visibility = 'visible';
    else if (document.getElementById('pni-reset-button'))
      document.getElementById('pni-reset-button').style.visibility = 'hidden'
  }
  async showNextQuestion(questionSequence: number, answerValue: string) {
    // first check if wizard is already open and current question is very recent
    if (this.isPniWizardOpen() && this.currentQuestionIndex == this.questions.length && answerValue) {
      this.setQuestionsQuery(questionSequence, answerValue);
      // Fetch new question from api
      let newQuestion = await this.setNewQuestion();
      if (newQuestion) {        
        // window.parent.postMessage(newQuestion.Products, "https://satish0543.wixsite.com");
        // Add/append html for new questions
        let questionsArea = document.querySelector('.pni-wizard-body');
        let questionHtml = this.addQuestionAnswerHtml(this.currentQuestionIndex);
        questionsArea.insertAdjacentHTML("beforeend", questionHtml);
        let currentQuesSequence = this.currentQuestionIndex;
        let selectId = `answerOptions${currentQuesSequence}`;
        document.getElementById(selectId).addEventListener("change", (e) => this.handleOptionChange(e, currentQuesSequence));
        this.currentQuestionIndex = this.currentQuestionIndex + 1
        this.showHideResetButton();
      }
    }
    else if(this.isPniWizardOpen() && !answerValue){
      window.parent.postMessage(this.questions[this.questions.length-1].Products, "https://satish0543.wixsite.com");
    }	
													   
																													   
		
  }
  private resetWizard = () => {
    this.questions = [this.questions[0]];
    this.questionQueryList = [];
    this.questionList =[];
    this.showHideResetButton();
  }
  clearAllQuestions = () => {
    this.resetWizard();
    this.closeInteractiveWizard();
    this.openInteractiveWizard();
    // TODO:JSS only for wix
    window.parent.postMessage(undefined, "https://satish0543.wixsite.com");
  }
  closeInteractiveWizard = () => {
    let wizardContainer = document.getElementsByTagName("Analytics-Wizard")[0];
    wizardContainer.innerHTML = '';
    this.resetWizard();
  }
}