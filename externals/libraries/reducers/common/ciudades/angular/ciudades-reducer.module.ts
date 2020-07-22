import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CiudadesIntegrationModule } from '~modules/integration/ciudades';

import * as ciudadesReducer from './ciudades.reducer';
import { CiudadesEffects } from './ciudades.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(ciudadesReducer.ciudadesFeatureKey, ciudadesReducer.reducer),

    CiudadesIntegrationModule,
    EffectsModule.forFeature([CiudadesEffects]),
  ],
})
export class CiudadesReducerModule {}
