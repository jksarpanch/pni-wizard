export declare class PopulateWizard {
    private currentQuestionIndex;
    private questionsApiRetryCount;
    private questions;
    private dynamicsQuestionApi;
    private questionList;
    private tracking;
    private dynamicImages;
    private wizardService;
    private isImageGamification;
    private productCartegory;
    displayProducts: (ids: string[]) => void;
    constructor();
    private fetchFirstQuestion;
    private initializeFirstQuestion;
    private handleOptionChange;
    private reevaluateQuestions;
    private setQuestionsQuery;
    private setNewQuestion;
    private configuringWizard;
    renderImageGamification: () => void;
    private populateWizard;
    openInteractiveWizard: () => void;
    private showNextQuestion;
    configureWizard: (displayProducts: any) => void;
    private resetWizard;
    resetInteractiveWizard: () => void;
    closeInteractiveWizard: () => void;
}
