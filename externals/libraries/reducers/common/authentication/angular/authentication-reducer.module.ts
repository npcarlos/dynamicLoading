import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authenticationReducer from './authentication-id-vision.reducer';
import { authenticationEffects } from './authentication-id-vision.effects';
import { AuthenticationIntegrationModule } from '~modules/integration/authentication-id-vision/authentication-id-vision.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(authenticationReducer.authenticationFeatureKey, authenticationReducer.reducer),
    AuthenticationIntegrationModule,
    EffectsModule.forFeature([authenticationEffects]),
  ],
})
export class AuthenticationReducerModule {}
