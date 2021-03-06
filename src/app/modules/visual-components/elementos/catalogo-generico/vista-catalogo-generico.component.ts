import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';


import { TipoCatalogoVista }      from './catalogo-item';
import { CatalogoDirective } from './catalogo.directive';
import { CatalogoRenderTemplate } from './catalogo.component';

@Component({
  selector: 'app-catalogo-banner',
  templateUrl: './vista-catalogos-banner.component.html',
})
export class VistaCatalogoGenericoComponent implements OnInit {
  // @Input() catalogos: TipoCatalogoItem[];
  // @Input() indexCatalogoActual: number;

  @Input() catalogoSeleccionado: TipoCatalogoVista

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
    
    (<CatalogoRenderTemplate>componentRef.instance).parametrosCatalogo = parametrosCatalogo;
  }

}
