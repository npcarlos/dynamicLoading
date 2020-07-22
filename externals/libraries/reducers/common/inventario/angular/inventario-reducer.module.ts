import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { InventarioIntegrationModule } from '~modules/integration/inventario';

import * as inventarioReducer from './inventario.reducer';
import { InventarioEffects } from './inventario.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(inventarioReducer.inventarioFeatureKey, inventarioReducer.reducer),

    InventarioIntegrationModule,
    EffectsModule.forFeature([InventarioEffects]),
  ],
})
export class InventarioReducerModule {}
