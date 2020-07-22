import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PedidoIntegrationModule } from '~modules/integration/pedido';

import * as pedidoReducer from './pedido.reducer';
import { PedidoEffects } from './pedido.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(pedidoReducer.pedidoFeatureKey, pedidoReducer.reducer),

    PedidoIntegrationModule,
    EffectsModule.forFeature([PedidoEffects]),
  ],
})
export class PedidoReducerModule {}
