import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { UbicaReconocerRestClientService } from './ubica-reconocer-rest-client.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: UbicaReconocerRestClientService,
      useClass: UbicaReconocerRestClientService,
      deps: [RestIntegrationService],
    },
  ],
})
export class UbicaReconocerModule {}
