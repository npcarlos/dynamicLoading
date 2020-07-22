import { NgModule } from '@angular/core';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { ValidacionImeiIntegrationService } from './validacion-imei.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ValidacionImeiIntegrationService,
      useClass: ValidacionImeiIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class ValidacionImeiIntegrationModule {}
