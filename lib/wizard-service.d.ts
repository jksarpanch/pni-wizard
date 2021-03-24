export interface IQuestionList {
    sequence: number;
    choice: string;
    attrvalue?: string;
}
export interface IQuestion {
    Choices: string[];
    Question: string;
    Sequence: number;
    Products?: string[];
}
export declare class WizardService {
    private defaultTopPosition;
    private defaultRightPosition;
    private defaultLeftPosition;
    tracking: boolean;
    displayProducts: (ids: string[]) => void;
    constructor();
    private getWizardContent;
    private removeRepetitiveElements;
    initializeWizard(wizardContainer: Element, populateByContainer: boolean): void;
    wizardPositioning(topPosition: string, rightPosition: string, leftPosition: string): void;
    disableEnableChoiceDropdown(enableDropdown: boolean): void;
    fetchNewQuestion(dynamicsQuestionApi: any, questionList: any): Promise<Response>;
    isPniWizardOpen(): boolean;
    addResetButton: () => void;
    triggerTrackingEvent(sequence_id: number, questionText: string, answerValue: string): void;
    showHideResetButton(questions: any): void;
    addQuestionAnswerHtml(currentQuesIndex: number, questions: IQuestion[]): string;
    configuringWizard(wizardContainer: Element): void;
    configureWizard: (displayProducts: any) => void;
}
