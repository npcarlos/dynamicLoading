import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogoDirective } from '../../../catalogo.directive';
import { CatalogoItem }      from '../../../catalogo-item';
import { CatalogoTemplate } from '../../../catalogo.component';
import { TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';

@Component({
  selector: 'app-catalogo-banner',
  templateUrl: './vista-catalogos-banner.component.html',
})
export class VistaCatalogosBannerComponent implements OnInit, OnDestroy {
  @Input() catalogos: CatalogoItem[];
  //@Input() tiposCatalogos: TipoCatalogoModel[];
  @Input() catalogoActual: TipoCatalogoModel;
  currentCatalogoIndex = -1;
  @ViewChild(CatalogoDirective, {static: true}) catalogoHost: CatalogoDirective;
  // interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    //this.loadComponent();
    // this.getCatalogos();
    this.darTiposCatalogos();
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    this.currentCatalogoIndex = (this.currentCatalogoIndex + 1) % this.catalogos.length;
    const catalogoItem = this.catalogos[this.currentCatalogoIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(catalogoItem.component);

    const viewContainerRef = this.catalogoHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CatalogoTemplate>componentRef.instance).data = catalogoItem.data;
  }

  // getCatalogos() {
  //   this.interval = setInterval(() => {
  //     this.loadComponent();
  //   }, 3000);
  // }

  darTiposCatalogos()
  {
    //console.log(this.tiposCatalogos)
  }
}
