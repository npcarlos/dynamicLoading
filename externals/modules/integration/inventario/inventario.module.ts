import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { InventarioIntegrationService } from './inventario.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: InventarioIntegrationService,
      useClass: InventarioIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class InventarioIntegrationModule {}
