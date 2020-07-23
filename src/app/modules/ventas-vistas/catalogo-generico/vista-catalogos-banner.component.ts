import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogoDirective } from '../../../catalogo.directive';
import { CatalogoItem }      from '../../../catalogo-item';
import { CatalogoTemplate } from '../../../catalogo.component';

@Component({
  selector: 'app-catalogo-banner',
  templateUrl: './vista-catalogos-banner.component.html',
})
export class VistaCatalogosBannerComponent implements OnInit {
  @Input() catalogos: CatalogoItem[];
  @Input() indexCatalogoActual: number;
  currentCatalogoIndex = -1;
  @ViewChild(CatalogoDirective, {static: true}) catalogoHost: CatalogoDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges(changes) {
    if (changes.indexCatalogoActual) {
      this.loadComponent();
    }
  }

  loadComponent() {
    this.currentCatalogoIndex = this.indexCatalogoActual;
    const catalogoItem = this.catalogos[this.currentCatalogoIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(catalogoItem.component);

    const viewContainerRef = this.catalogoHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CatalogoTemplate>componentRef.instance).data = catalogoItem.data;
  }

}
