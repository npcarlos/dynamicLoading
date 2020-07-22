import { Injectable } from '@angular/core';

import { ItemPlanComponent } from './item-plan/item-plan.component';
import { ItemEquipoComponent } from './item-equipo/item-equipo.component';
import { ItemComponent } from './item';

@Injectable()
export class ItemService {
  getItems() {
    return [
      new ItemComponent(ItemPlanComponent, {nombrePlan: 'plan 1', datosMoviles: '500gb' }),

      new ItemComponent(ItemEquipoComponent, {name: 'Samsung'}),
    ];
  }
}