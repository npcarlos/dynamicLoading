import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RiesgoHCIntegrationService } from './riesgoHC.service';
import { RiesgoListasIntegrationService } from './riesgoListas.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: RiesgoHCIntegrationService,
      deps: [RestIntegrationService],
    },
    {
      provide: RiesgoListasIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class RiesgoIntegrationModule {}
