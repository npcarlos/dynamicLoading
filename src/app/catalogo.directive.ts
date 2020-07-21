import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class CatalogoDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

