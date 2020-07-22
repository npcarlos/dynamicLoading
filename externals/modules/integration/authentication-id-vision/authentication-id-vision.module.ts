import { NgModule } from '@angular/core';
import { AuthenticationRestService } from './authentication-id-vision.service';
import { ClaroHttpModule, RestIntegrationService } from '~modules/infraestructure/claro-http-module';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: AuthenticationRestService,
      useClass: AuthenticationRestService,
      deps: [RestIntegrationService],
    },
  ],
})
export class AuthenticationIntegrationModule {}
