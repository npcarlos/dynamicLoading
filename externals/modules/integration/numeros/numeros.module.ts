import { NgModule } from '@angular/core';
import { ClaroHttpModule, SoapIntegrationService } from '~modules/infraestructure/claro-http-module';

import { NumerosIntegrationService } from './numeros.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: NumerosIntegrationService,
      useClass: NumerosIntegrationService,
      deps: [SoapIntegrationService],
    },
  ],
})
export class NumerosIntegrationModule {}
