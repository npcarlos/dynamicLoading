import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '~modules/presentation/navigation';

export interface ButtonTemplate {
  isVisible: () => boolean;
  isEnabled: () => boolean;
  text: () => string;
}

export abstract class ChildNavigationComponentBase implements OnInit {
  public previousButton: ButtonTemplate;
  public nextButton: ButtonTemplate;

  constructor(protected navigationService: NavigationService, protected activatedRoute: ActivatedRoute) {
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.isPreviousButtonVisible = this.isPreviousButtonVisible.bind(this);
    this.isNextButtonVisible = this.isNextButtonVisible.bind(this);
    this.isPreviousButtonEnabled = this.isPreviousButtonEnabled.bind(this);
    this.isNextButtonEnabled = this.isNextButtonEnabled.bind(this);
    this.getPreviousButtonText = this.getPreviousButtonText.bind(this);
    this.getNextButtonText = this.getNextButtonText.bind(this);

    this.previousButton = {
      isVisible: this.isPreviousButtonVisible,
      isEnabled: this.isPreviousButtonEnabled,
      text: this.getPreviousButtonText,
    };
    this.nextButton = {
      isVisible: this.isNextButtonVisible,
      isEnabled: this.isNextButtonEnabled,
      text: this.getNextButtonText,
    };
  }

  ngOnInit() {}

  previous() {
    this.navigationService.previous();
  }

  next() {
    this.navigationService.next();
  }

  isPreviousButtonVisible() {
    return this.navigationService.isPreviousButtonVisible();
  }

  isNextButtonVisible() {
    return this.navigationService.isNextButtonVisible();
  }

  isPreviousButtonEnabled() {
    return this.navigationService.isPreviousButtonEnabled();
  }

  isNextButtonEnabled() {
    return this.navigationService.isNextButtonEnabled();
  }

  getPreviousButtonText() {
    return this.navigationService.getPreviousButtonText();
  }

  getNextButtonText() {
    return this.navigationService.getNextButtonText();
  }
}
