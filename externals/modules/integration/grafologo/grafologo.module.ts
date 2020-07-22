import { NgModule } from '@angular/core';

import { ClaroHttpModule, SoapIntegrationService } from '~modules/infraestructure/claro-http-module';

import { GrafologoIntegrationService } from './grafologo.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: GrafologoIntegrationService,
      useClass: GrafologoIntegrationService,
      deps: [SoapIntegrationService],
    },
  ],
})
export class GrafologoIntegrationModule {}
