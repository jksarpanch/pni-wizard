export declare class PopulateWizard {
    private apiRetryCount;
    private questions;
    private imageDataList;
    private dynamicsQuestionApi;
    private dynamicsImagesApi;
    private dynamicImages;
    private dynamicQuestions;
    private wizardService;
    private isImageGamification;
    displayProducts: (ids: string[]) => void;
    constructor();
    private fetchFirstOption;
    private populateWizard;
    private haveOptionData;
    openInteractiveWizard: () => void;
    configureWizard: (displayProducts: any) => void;
    private resetWizard;
    resetInteractiveWizard: () => void;
    closeInteractiveWizard: () => void;
}
