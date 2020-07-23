import { Component, Input, OnInit }  from '@angular/core';

import { VisualCatalogoTemplate }       from '../../../../catalogo.component';
import { ItemComponent } from 'src/app/modules/visual-components/item';
import { ItemTemplate } from 'src/app/modules/visual-components/item.interface';

import { ItemEquipoComponent } from '../../../visual-components/item-equipo/item-equipo.component';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';

@Component({
  templateUrl: './catalogo-equipos.component.html'
})
export class CatalogoEquiposComponent implements VisualCatalogoTemplate, OnInit {
  @Input() parametrosCatalogo: any;
  listaItems: any[];
  visualItemRender: any;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit(){
    this.listaItems = this.dummyService.getEquipos();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent;
  }
}


