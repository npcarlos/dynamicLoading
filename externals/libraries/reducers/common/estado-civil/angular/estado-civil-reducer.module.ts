import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EstadoCivilIntegrationModule } from '~modules/integration/estado-civil';

import * as estadoCivilReducer from './estado-civil.reducer';
import { EstadoCivilEffects } from './estado-civil.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(estadoCivilReducer.estadoCivilFeatureKey, estadoCivilReducer.reducer),

    EstadoCivilIntegrationModule,
    EffectsModule.forFeature([EstadoCivilEffects]),
  ],
})
export class EstadoCivilReducerModule {}
