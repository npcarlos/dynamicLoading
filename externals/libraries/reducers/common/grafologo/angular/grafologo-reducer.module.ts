import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GrafologoIntegrationModule } from '~modules/integration/grafologo/grafologo.module';

import * as grafologoReducer from './grafologo.reducer';
import { GrafologoEffects } from './grafologo.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(grafologoReducer.grafologoFeatureKey, grafologoReducer.reducer),

    GrafologoIntegrationModule,
    EffectsModule.forFeature([GrafologoEffects]),
  ],
})
export class GrafologoReducerModule {}
