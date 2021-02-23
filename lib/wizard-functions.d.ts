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
    showNextQuestion(): void;
    closeInteractiveWizard: () => void;
    private populateWizard;
    private removeRepetitiveElements;
    interactiveWizard: () => void;
}
