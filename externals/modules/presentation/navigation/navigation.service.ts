import { Injectable } from '@angular/core';
import { SettingsService } from '~modules/infraestructure/settings';
import { Subject, BehaviorSubject } from 'rxjs';

export interface StepTemplate {
  route: string;
  params?: string[];

  isVisible?: (params: any) => boolean;
  isEnabled?: (params: any) => boolean;
  isCurrent?: (params: any) => boolean;

  isPreviousButtonVisible?: () => boolean;
  isNextButtonVisible?: () => boolean;

  getPreviousButtonText?: () => string;
  getNextButtonText?: () => string;

  label: string;
  place?: string;
}

export interface CustomFlowTemplate {
  alias?: string;
  label: string;
  steps: StepTemplate[];
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private settings: any;
  private steps: StepTemplate[];
  private currentStep: number;

  private stepsSubject: BehaviorSubject<StepTemplate[]>;
  private currentStepSubject: BehaviorSubject<StepTemplate>;

  private previousButtonEnabled: boolean = true;
  private nextButtonEnabled: boolean = true;

  // Constructor
  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.getConfiguration('flows');

    this.stepsSubject = new BehaviorSubject<StepTemplate[]>([]);
    this.currentStepSubject = new BehaviorSubject<StepTemplate>(null);
  }

  // internals
  private refreshSteps(currentStep: number) {
    this.currentStep = currentStep;

    this.stepsSubject.next(this.steps);
    this.currentStepSubject.next(this.steps[this.currentStep]);

    this.previousButtonEnabled = true;
    this.nextButtonEnabled = true;
  }

  // Getters
  getStepsSubject() {
    return this.stepsSubject;
  }

  getCurrentStepSubject() {
    return this.currentStepSubject;
  }

  getCurrentStep() {
    return this.steps[this.currentStep];
  }

  setPreviousButtonEnable(isButtonEnable: boolean) {
    this.previousButtonEnabled = isButtonEnable;
  }

  setNextButtonEnable(isButtonEnable: boolean) {
    this.nextButtonEnabled = isButtonEnable;
  }

  // Load
  loadStepsConfiguration(tipoFlujo: string, nombreFlujo: string, data: any = {}) {
    const defaultNavigation: StepTemplate[] = this.settings.defaultFlow;
    const customNavigation: CustomFlowTemplate = tipoFlujo
      ? this.settings.customFlows[tipoFlujo].flows[nombreFlujo]
      : this.settings.customFlows[nombreFlujo];

    this.steps = []
      .concat(defaultNavigation.filter((step: StepTemplate) => this.isVisible(step, data) && step.place === 'before'))
      .concat(customNavigation.steps.filter((step: StepTemplate) => this.isVisible(step, data)))
      .concat(defaultNavigation.filter((step: StepTemplate) => this.isVisible(step, data) && step.place === 'after'))
      .map((step: StepTemplate, index: number) => ({
        route: step.route,
        params: step.params || [],
        label: step.label,

        isCurrent: () => index === this.currentStep,
        isEnabled: step.isEnabled || ((data: any = {}) => !!data),

        isPreviousButtonVisible: step.isPreviousButtonVisible,
        isNextButtonVisible: step.isNextButtonVisible,
        getPreviousButtonText: step.getPreviousButtonText,
        getNextButtonText: step.getNextButtonText,
      }));
    this.refreshSteps(this.steps.length > 0 ? 0 : -1);
  }

  // Validate state
  isVisible(step: StepTemplate, data: any = {}) {
    return step.isVisible ? step.isVisible(data) : true;
  }

  isFirst(step: StepTemplate = null): boolean {
    return (step || this.currentStep) === 0;
  }

  isLast(step: StepTemplate = null): boolean {
    return (step || this.currentStep) === this.steps.length - 1;
  }

  // Navigation
  setCurrentStep(newCurrentStep: StepTemplate) {
    const index = this.steps.findIndex((step) => step.route === newCurrentStep.route);
    if (index > -1) {
      this.refreshSteps(index);
    }
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.refreshSteps(this.currentStep + 1);
    }
  }

  previous() {
    if (this.currentStep > 0) {
      this.refreshSteps(this.currentStep - 1);
    }
  }

  // Visual Methods
  isPreviousButtonVisible() {
    const step = this.getCurrentStep();
    return (
      this.currentStep > 0 &&
      (!step.isPreviousButtonVisible || (step.isPreviousButtonVisible && step.isPreviousButtonVisible()))
    );
  }

  isNextButtonVisible() {
    const step = this.getCurrentStep();
    return (
      this.currentStep < this.steps.length - 1 &&
      (!step.isNextButtonVisible || (step.isNextButtonVisible && step.isNextButtonVisible()))
    );
  }

  isPreviousButtonEnabled() {
    return this.previousButtonEnabled;
  }

  isNextButtonEnabled() {
    return this.nextButtonEnabled;
  }

  getPreviousButtonText() {
    const step = this.getCurrentStep();
    return (step.getPreviousButtonText && step.getPreviousButtonText()) || 'Anterior';
  }

  getNextButtonText() {
    const step = this.getCurrentStep();
    return (step.getNextButtonText && step.getNextButtonText()) || 'Siguiente';
  }
}
