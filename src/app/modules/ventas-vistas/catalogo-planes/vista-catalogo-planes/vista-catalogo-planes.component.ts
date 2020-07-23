import { Component, Input } from '@angular/core';

import { CatalogoTemplate }      from '../../../../catalogo.component';
import { PlanModel, TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';

@Component({
  templateUrl: './vista-catalogo-planes.component.html',
})
export class VistaCatalogoPlanesComponent implements CatalogoTemplate {
  @Input() parametrosCatalogo: any; 
}

// 