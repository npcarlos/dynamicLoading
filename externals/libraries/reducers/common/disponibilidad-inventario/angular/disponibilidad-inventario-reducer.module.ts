import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as disponibilidadInventarioReducer from './disponibilidad-inventario.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DisponibilidadInventarioEffects } from './disponibilidad-inventario.effects';
import { DisponibilidadInventarioModule } from '~modules/integration/disponibilidad-inventario/disponibilidad-inventario-service.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      disponibilidadInventarioReducer.disponibilidadInventarioFeatureKey,
      disponibilidadInventarioReducer.reducer
    ),
    DisponibilidadInventarioModule,
    EffectsModule.forFeature([DisponibilidadInventarioEffects]),
  ],
})
export class DisponibilidadInventarioReducerModule {}
