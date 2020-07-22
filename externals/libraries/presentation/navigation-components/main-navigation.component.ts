import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavigationService, StepTemplate } from '~modules/presentation/navigation';

export abstract class MainNavigationBase implements OnInit {
  steps: StepTemplate[] = [];

  protected mappingParameters: { [key: string]: () => string } = {};

  constructor(
    protected navigationService: NavigationService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {}

  ngOnInit() {
    this.navigationService.getStepsSubject().subscribe((steps) => {
      this.steps = steps;
    });

    this.navigationService.getCurrentStepSubject().subscribe((step) => {
      step && this.navigateTo(step);
    });
  }

  protected loadStepsConfiguration() {
    const { tipoFlujo, nombreFlujo } = this.activatedRoute.snapshot.params;
    this.navigationService.loadStepsConfiguration(tipoFlujo, nombreFlujo, this.getData());
  }

  /**
   *
   */
  selectCurrentStep(step: StepTemplate) {
    this.navigationService.setCurrentStep(step);
  }

  /**
   *
   */
  abstract getData(): { [key: string]: any };

  /**
   *
   * @param step
   */
  protected navigateTo(step: StepTemplate) {
    const { route, params = [] } = step;

    this.router.navigate([route, ...params.map((paramName) => this.mappingParameters[paramName]())], {
      relativeTo: this.activatedRoute,
    });
  }

  // Visual Methods
  previous() {
    this.navigationService.previous();
  }

  next() {
    this.navigationService.next();
  }
}
