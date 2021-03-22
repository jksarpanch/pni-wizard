import { PopulateWizard } from './populate-wizard'
import './style.css';
export class PniWizard {
  // Add interface
  private wf: PopulateWizard;
  constructor() {
    this.wf = new PopulateWizard();
  }

  openInteractiveWizard = () => {
    this.wf.openInteractiveWizard()
  }
  closeInteractiveWizard = () => {
    this.wf.closeInteractiveWizard()    
  }  
  resetInteractiveWizard = () => {
    this.wf.resetInteractiveWizard()
  }
  configureWizard = (displayProducts: void) => {
    this.wf.configureWizard(displayProducts)
  };
}