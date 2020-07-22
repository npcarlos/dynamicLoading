import { NgModule } from '@angular/core';

import { OrderNegotiatorReducerModule } from '~libraries/reducers/fullstack/order-negotiator/angular';
import { OrderNegotiatorStoreService } from './order-negotiator-services-store.service';
import { ShoppingCartResolver } from './order-negotiator-services-store.resolver';

@NgModule({
  declarations: [],
  imports: [OrderNegotiatorReducerModule],
  providers: [OrderNegotiatorStoreService, ShoppingCartResolver],
})
export class OrderNegotiatorStoreModule {}
