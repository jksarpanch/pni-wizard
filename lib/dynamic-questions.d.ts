import { WizardService, IQuestion, IQuestionList } from './wizard-service';
export declare class DynamicQuestions {
    currentQuestionIndex: number;
    questions: IQuestion[];
    questionList: IQuestionList[];
    private productCartegory;
    wizardService: WizardService;
    private dynamicsQuestionApi;
    displayProducts: (ids: string[]) => void;
    constructor(questions: IQuestion[], wizardService: WizardService);
    private setQuestionsQuery;
    private setNewQuestion;
    private showNextQuestion;
    private reevaluateQuestions;
    private handleOptionChange;
    private initializeFirstQuestion;
    renderQuestionsWizard: () => void;
    resetQuestionsWizard: () => void;
}
