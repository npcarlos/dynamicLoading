import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RiesgoIntegrationModule } from '~modules/integration/riesgoListas';

import * as riesgoReducer from './matriz.reducer';
import { MatrizEffects } from './matriz.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(riesgoReducer.matrizRiesgoFeatureKey, riesgoReducer.reducer),

    RiesgoIntegrationModule,
    EffectsModule.forFeature([MatrizEffects]),
  ],
})
export class MatrizRiesgoReducerModule {}
