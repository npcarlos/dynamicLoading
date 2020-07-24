import { Component, Input } from '@angular/core';

import { CatalogoRenderTemplate }      from '../../../../catalogo.component';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';
import { ItemTemplate } from 'src/app/modules/visual-components/item.interface';

@Component({
  templateUrl: './catalogo-planes-render.component.html',
})
export class CatalogoPlanesRenderComponent implements CatalogoRenderTemplate {
  @Input() parametrosCatalogo: any;
  listaItems: any[];
  visualItemRender: ItemTemplate;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit(){
    this.inicializarFuentesDeDatos();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent;
  }

  inicializarFuentesDeDatos(){
    this.listaItems = this.dummyService.getPlanes();
  }
}

// 