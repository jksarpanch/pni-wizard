import { WizardFunctions } from './wizard-functions'
import './style.css';
export class PniWizard {
  // Add interface
  private wf: WizardFunctions;
  constructor() {
    this.wf = new WizardFunctions();
  }

  openInteractiveWizard = () => {
    this.wf.interactiveWizard()
  }
  closeInteractiveWizard = () => {
    this.wf.closeInteractiveWizard()    
  }
  showNextQuestion = () => {
    this.wf.showNextQuestion()
  } 
}