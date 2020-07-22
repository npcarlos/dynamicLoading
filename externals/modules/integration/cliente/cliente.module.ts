import { NgModule } from '@angular/core';

import { ClaroHttpModule, SoapIntegrationService } from '~modules/infraestructure/claro-http-module';

import { ClienteIntegrationService } from './cliente.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ClienteIntegrationService,
      useClass: ClienteIntegrationService,
      deps: [SoapIntegrationService],
    },
  ],
})
export class ClienteIntegrationModule {}
