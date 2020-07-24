import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[catalogo-host]',
})
export class CatalogoDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

