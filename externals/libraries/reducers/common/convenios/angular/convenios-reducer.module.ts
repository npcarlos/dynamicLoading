import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ConveniosIntegrationModule } from '~modules/integration/convenios';

import * as conveniosReducer from './convenios.reducer';
import { ConveniosEffects } from './convenios.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(conveniosReducer.conveniosFeatureKey, conveniosReducer.reducer),

    ConveniosIntegrationModule,
    EffectsModule.forFeature([ConveniosEffects]),
  ],
})
export class ConveniosReducerModule {}
