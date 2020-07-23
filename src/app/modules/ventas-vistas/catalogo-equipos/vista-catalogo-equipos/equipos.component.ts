import { Component, Input }  from '@angular/core';

import { CatalogoTemplate }       from '../../../../catalogo.component';
import { ItemComponent } from 'src/app/modules/visual-components/item';
import { ItemTemplate } from 'src/app/modules/visual-components/item.interface';

import { ItemEquipoComponent } from '../../../visual-components/item-equipo/item-equipo.component';

@Component({
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements CatalogoTemplate {
  @Input() parametrosCatalogo: any;
  constructor(){
  }
}


