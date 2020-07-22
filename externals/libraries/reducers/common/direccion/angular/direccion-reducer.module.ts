import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DireccionIntegrationModule } from '~modules/integration/direccion';

import * as direccionReducer from './direccion.reducer';
import { DireccionEffects } from './direccion.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(direccionReducer.direccionFeatureKey, direccionReducer.reducer),

    DireccionIntegrationModule,
    EffectsModule.forFeature([DireccionEffects]),
  ],
})
export class DireccionReducerModule {}
