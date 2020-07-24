import { Component, Input, OnInit }  from '@angular/core';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';
import { CatalogoRenderTemplate } from 'src/app/modules/visual-components/catalogo-generico/catalogo.component';

@Component({
  templateUrl: './catalogo-equipos-render.component.html'
})
export class CatalogoEquiposRenderComponent implements CatalogoRenderTemplate, OnInit {
  @Input() parametrosCatalogo: any;
  listaItems: any[];
  visualItemRender: any;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit(){
    this.inicializarFuentesDeDatos();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent;
  }

  inicializarFuentesDeDatos(){
    this.listaItems = this.dummyService.getEquipos();
  }
}


