import { NgModule } from '@angular/core';

import { ClaroHttpModule, SoapIntegrationService } from '~modules/infraestructure/claro-http-module';

import { ReservarIntegrationService } from './reservar.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ReservarIntegrationService,
      useClass: ReservarIntegrationService,
      deps: [SoapIntegrationService],
    },
  ],
})
export class ReservarIntegrationModule {}
