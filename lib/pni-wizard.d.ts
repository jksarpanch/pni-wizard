import './style.css';
export declare class PniWizard {
    private wf;
    constructor();
    openInteractiveWizard: () => void;
    closeInteractiveWizard: () => void;
    resetInteractiveWizard: () => void;
    injectImages: () => void;
    displayProducts(ids: string[]): void;
}
