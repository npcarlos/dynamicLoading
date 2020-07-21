import { Component, Input } from '@angular/core';

import { CatalogoTemplate }      from '../catalogo.component';

@Component({
  templateUrl: './planes.component.html',
})
export class PlanesComponent implements CatalogoTemplate {
  @Input() data: any;

}

