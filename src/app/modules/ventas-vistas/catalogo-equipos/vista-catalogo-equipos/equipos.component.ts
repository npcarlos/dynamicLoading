import { Component, Input }  from '@angular/core';

import { CatalogoTemplate }       from '../../../../catalogo.component';

@Component({
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements CatalogoTemplate {
  @Input() data: any;
}


