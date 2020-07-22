import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GenerosIntegrationModule } from '~modules/integration/generos';

import * as generosReducer from './generos.reducer';
import { GenerosEffects } from './generos.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(generosReducer.generosFeatureKey, generosReducer.reducer),

    GenerosIntegrationModule,
    EffectsModule.forFeature([GenerosEffects]),
  ],
})
export class GenerosReducerModule {}
