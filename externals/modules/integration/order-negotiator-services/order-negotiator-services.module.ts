import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { ShoppingCartIntegrationService } from './order-negotiator-shopping-cart-rest-client.service';
import { OrderItemIntegrationService } from './order-negotiator-order-item-rest-client.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ShoppingCartIntegrationService,
      useClass: ShoppingCartIntegrationService,
      deps: [RestIntegrationService],
    },
    {
      provide: OrderItemIntegrationService,
      useClass: OrderItemIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class OrderNegotiatorIntegrationModule {}
