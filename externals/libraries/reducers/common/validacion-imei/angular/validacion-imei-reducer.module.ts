import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as validacionImeiReducer from './validacion-imei.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ValidacionImeiEffects } from './validacion-imei.effects';
import { ValidacionImeiIntegrationModule } from '~modules/integration/validacion-imei';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(validacionImeiReducer.validacionImeiFeatureKey, validacionImeiReducer.reducer),

    ValidacionImeiIntegrationModule,
    EffectsModule.forFeature([ValidacionImeiEffects]),
  ],
})
export class ValidacionImeiReducerModule {}
