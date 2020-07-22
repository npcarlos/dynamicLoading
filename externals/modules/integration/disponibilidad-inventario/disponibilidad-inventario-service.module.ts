import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { DisponibilidadInventarioRestClientService } from './disponibilidad-inventario-rest-client.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: DisponibilidadInventarioRestClientService,
      useClass: DisponibilidadInventarioRestClientService,
      deps: [RestIntegrationService],
    },
  ],
})
export class DisponibilidadInventarioModule {}
