import { NgModule } from '@angular/core';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { GeneracionContratoIntegrationService } from './generacion-contrato.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: GeneracionContratoIntegrationService,
      useClass: GeneracionContratoIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class GeneracionContratoIntegrationModule {}
