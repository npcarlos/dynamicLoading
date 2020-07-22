import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as autenticacionBiometricaReducer from './angular/autenticacionBiometrica.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AutenticacionBiometricaEffects } from './angular/autenticacionBiometrica.effects';
import { AutenticacionBiometricaIntegrationModule } from '~modules/integration/autenticacionBiometrica';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      autenticacionBiometricaReducer.autenticacionBiometricaFeatureKey,
      autenticacionBiometricaReducer.reducer
    ),

    AutenticacionBiometricaIntegrationModule,
    EffectsModule.forFeature([AutenticacionBiometricaEffects]),
  ],
})
export class AutenticacionBiometricaReducerModule {}
