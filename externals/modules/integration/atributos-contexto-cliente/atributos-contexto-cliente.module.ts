import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { ContextAttributesRestClientService } from './atributos-contexto-cliente.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ContextAttributesRestClientService,
      useClass: ContextAttributesRestClientService,
      deps: [RestIntegrationService],
    },
  ],
})
export class ContextAttributesRestClientModule {}
