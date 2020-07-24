import { Component, Input, OnInit }  from '@angular/core';

import { CatalogoService } from '~modules/business/dummy/catalogo.service';
import { CatalogoRenderTemplate } from '../../visual-components/catalogo-generico/catalogo.component';

@Component({
  templateUrl: './catalogo-tecnologias-render.component.html'
})
export class CatalogoTecnologiasRenderComponent implements CatalogoRenderTemplate, OnInit {
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
    this.listaItems = this.dummyService.getTecnologias();
  }
}


