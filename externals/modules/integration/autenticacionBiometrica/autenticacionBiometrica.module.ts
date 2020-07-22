import { NgModule } from '@angular/core';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { AutenticacionBiometricaIntegrationService } from './autenticacionBiometrica.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: AutenticacionBiometricaIntegrationService,
      useClass: AutenticacionBiometricaIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class AutenticacionBiometricaIntegrationModule {}
