import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ReservarIntegrationModule } from '~modules/integration/reservar';

import * as reservarReducer from './reservar.reducer';
import { ReservarEffects } from './reservar.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(reservarReducer.reservarFeatureKey, reservarReducer.reducer),

    ReservarIntegrationModule,
    EffectsModule.forFeature([ReservarEffects]),
  ],
})
export class ReservarReducerModule {}
