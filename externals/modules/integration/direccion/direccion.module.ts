import { NgModule } from '@angular/core';

import { DireccionIntegrationService } from './direccion.service';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: DireccionIntegrationService,
      useClass: DireccionIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class DireccionIntegrationModule {}
