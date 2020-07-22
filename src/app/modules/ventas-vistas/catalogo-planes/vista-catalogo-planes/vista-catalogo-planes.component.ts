import { Component, Input } from '@angular/core';

import { CatalogoTemplate }      from '../../../../catalogo.component';
import { PlanModel } from 'externals/libraries/domain/fullstack/catalogo';

@Component({
  templateUrl: './vista-catalogo-planes.component.html',
})
export class VistaCatalogoPlanesComponent implements CatalogoTemplate {
  @Input() data: any;
  @Input() planes: PlanModel[] = [];

  

}

// 