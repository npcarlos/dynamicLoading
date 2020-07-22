import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { PedidoIntegrationService } from './pedido.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: PedidoIntegrationService,
      useClass: PedidoIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class PedidoIntegrationModule {}
