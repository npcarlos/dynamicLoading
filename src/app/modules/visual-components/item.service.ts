import { Injectable } from '@angular/core';

import { ItemPlanComponent } from './item-plan/item-plan.component';
import { ItemEquipoComponent } from './item-equipo/item-equipo.component';
import { ItemComponent } from './item';
import { CatalogoModel } from '~libraries/domain/fullstack/catalogo';

@Injectable()
export class ItemService {
  public ListaItemsComponent = [ ItemPlanComponent, ItemEquipoComponent]

  getItems(indexItemComponent: number, data: any[]) {
    const component = this.ListaItemsComponent[indexItemComponent];
    return new ItemComponent(component, data);
  }
}