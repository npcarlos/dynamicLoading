import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsuarioIntegrationModule } from '~modules/integration/usuario';

import * as usuarioReducer from './usuario.reducer';
import { UsuarioEffects } from './usuario.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(usuarioReducer.usuarioFeatureKey, usuarioReducer.reducer),

    UsuarioIntegrationModule,
    EffectsModule.forFeature([UsuarioEffects]),
  ],
})
export class UsuarioReducerModule {}
