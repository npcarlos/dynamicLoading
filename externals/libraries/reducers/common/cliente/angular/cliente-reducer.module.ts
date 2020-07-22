import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ClienteIntegrationModule } from '~modules/integration/cliente/cliente.module';

import * as clienteReducer from './cliente.reducer';
import { ClienteEffects } from './cliente.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(clienteReducer.clienteFeatureKey, clienteReducer.reducer),

    ClienteIntegrationModule,
    EffectsModule.forFeature([ClienteEffects]),
  ],
})
export class ClienteReducerModule {}
