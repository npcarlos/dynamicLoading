import { Component, Input } from '@angular/core';

import { VisualCatalogoTemplate }      from '../../../../catalogo.component';
import { PlanModel, TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';

@Component({
  templateUrl: './catalogo-planes.component.html',
})
export class CatalogoPlanesComponent implements VisualCatalogoTemplate {
  @Input() parametrosCatalogo: any;
  listaItems: any[];
  visualItemRender: any;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit(){
    this.listaItems = this.dummyService.getPlanes();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent;
  }
}

// 