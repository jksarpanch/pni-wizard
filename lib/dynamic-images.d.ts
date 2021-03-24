import { WizardService } from "./wizard-service";
interface ImageData {
    product_id: string;
    Label: string;
    image_name: string;
    image_url: any[];
}
export declare class DynamicImages {
    private imageDataList;
    wizardService: WizardService;
    constructor(imageDataList: ImageData[], wizardService: WizardService);
    imageUrls: {
        src: string;
        text: string;
        imageName: string;
    }[];
    fetchProducts: (imageName: string) => Promise<void>;
    handleImageClick: (event: any) => void;
    showImages: () => void;
    renderImageWizard: () => void;
}
export {};
