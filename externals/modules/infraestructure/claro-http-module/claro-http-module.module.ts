import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { NgxSoapService, NgxSoapModule } from 'ngx-soap';

import { SettingsModule, SettingsService } from '../../../modules/infraestructure/settings';
import { ErrorManagementService, ErrorManagementModule } from '../../../modules/infraestructure/error-management';
import { EventManagementModule, EventManagerService } from '../../../modules/infraestructure/event-management';

import { RestIntegrationService } from './rest-service.service';
//import { SoapIntegrationService } from './soap-service.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule, 
    //NgxSoapModule, 
    SettingsModule, 
    EventManagementModule, 
    ErrorManagementModule],
  providers: [
    {
      provide: RestIntegrationService,
      useClass: RestIntegrationService,
      deps: [HttpClient, SettingsService, EventManagerService, ErrorManagementService],
    },
    /*{
      provide: SoapIntegrationService,
      useClass: SoapIntegrationService,
      deps: [NgxSoapService, SettingsService, EventManagerService, ErrorManagementService],
    },*/
  ],
})
export class ClaroHttpModule {}
