import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogoDirective } from '../catalogo.directive';
import { CatalogoComponent }      from '../catalogo';
import { CatalogoTemplate } from '../catalogo.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './vista-catalogos.component.html',
})
export class VistaCatalogosComponent implements OnInit, OnDestroy {
  @Input() catalogos: CatalogoComponent[];
  currentAdIndex = -1;
  @ViewChild(CatalogoDirective, {static: true}) adHost: CatalogoDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getCatalogos();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.catalogos.length;
    const adItem = this.catalogos[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CatalogoTemplate>componentRef.instance).data = adItem.data;
  }

  getCatalogos() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
