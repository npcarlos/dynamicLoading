import { NgModule } from '@angular/core';

import { PedidoReducerModule } from '~libraries/reducers/common/pedido/angular';
import { PedidoStoreService } from './pedido-store.service';

@NgModule({
  declarations: [],
  imports: [PedidoReducerModule],
  providers: [PedidoStoreService],
})
export class PedidoStoreModule {}
