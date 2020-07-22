import { NgModule } from '@angular/core';
import { UsuarioIntegrationService } from './usuario.service';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: UsuarioIntegrationService,
      useClass: UsuarioIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class UsuarioIntegrationModule {}
