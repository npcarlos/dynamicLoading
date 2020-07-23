import { Component, Input, OnInit }  from '@angular/core';

import { VisualCatalogoTemplate } from '../../../catalogo.component';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';

@Component({
  templateUrl: './catalogo-tecnologias.component.html'
})
export class CatalogoTecnologiasComponent implements VisualCatalogoTemplate, OnInit {
  @Input() parametrosCatalogo: any;
  listaItems: any[];
  visualItemRender: any;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit(){
    this.listaItems = this.dummyService.getTecnologias();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent;
  }
}


