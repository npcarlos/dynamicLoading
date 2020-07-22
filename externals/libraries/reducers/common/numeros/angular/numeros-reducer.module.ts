import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NumerosIntegrationModule } from '~modules/integration/numeros';

import * as numerosReducer from './numeros.reducer';
import { NumerosEffects } from './numeros.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(numerosReducer.numerosFeatureKey, numerosReducer.reducer),

    NumerosIntegrationModule,
    EffectsModule.forFeature([NumerosEffects]),
  ],
})
export class NumerosReducerModule {}
