export declare class WizardFunctions {
    currentQuestionIndex: number;
    private questionsApiRetryCount;
    private questions;
    private defaultTopPosition;
    private defaultRightPosition;
    private defaultLeftPosition;
    private fetchedQuestions;
    constructor();
    private setCurrentQuestionIndex;
    private getWizardContent;
    private initializeWizard;
    private addQuestionAnswerHtml;
    private initializeFirstQuestion;
    private isPniWizardOpen;
    private handleOptionChange;
    private clearAllQuestions;
    private wizardPositioning;
    private queryParams;
    private setQuestionsQuery;
    showNextQuestion(seq?: any, answerValue?: any): Promise<void>;
    closeInteractiveWizard: () => void;
    private populateWizard;
    private removeRepetitiveElements;
    interactiveWizard: () => void;
}
