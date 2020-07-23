import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CatalogoDirective } from '../../../catalogo.directive';
import { TipoCatalogoItem }      from '../../../catalogo-item';
import { VisualCatalogoTemplate } from '../../../catalogo.component';

@Component({
  selector: 'app-catalogo-banner',
  templateUrl: './vista-catalogos-banner.component.html',
})
export class VistaCatalogoGenericoComponent implements OnInit {
  // @Input() catalogos: TipoCatalogoItem[];
  // @Input() indexCatalogoActual: number;

  @Input() catalogoSeleccionado: TipoCatalogoItem

  @ViewChild(CatalogoDirective, {static: true}) catalogoHost: CatalogoDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges(changes) {
    // if (changes.indexCatalogoActual) {
    //   this.loadComponent();
    // }
    // TODO ¿Sería bueno cargarlo como un observable o sólo con onChange?
    this.loadComponent();
  }

  loadComponent() {

    const parametrosCatalogo = this.catalogoSeleccionado.parametrosCatalogo;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(parametrosCatalogo.visualCatalogComponent);

    const viewContainerRef = this.catalogoHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    
    (<VisualCatalogoTemplate>componentRef.instance).parametrosCatalogo = parametrosCatalogo;
  }

}
