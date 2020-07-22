import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GeneracionContratoIntegrationModule } from '~modules/integration/generacion-contrato';

import * as generacionContratoReducer from './generacion-contrato.reducer';
import { GeneracionContratoEffects } from './generacion-contrato.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(generacionContratoReducer.generacionContratoFeatureKey, generacionContratoReducer.reducer),

    GeneracionContratoIntegrationModule,
    EffectsModule.forFeature([GeneracionContratoEffects]),
  ],
})
export class GeneracionContratoReducerModule {}
