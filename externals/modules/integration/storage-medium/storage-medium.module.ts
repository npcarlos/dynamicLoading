import { NgModule } from '@angular/core';

import { ClaroHttpModule, SoapIntegrationService } from '~modules/infraestructure/claro-http-module';

import { ReadStorageMediumIntegrationService } from './read-storage-medium.service';
import { SearchStorageMediumIntegrationService } from './search-storage-medium.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: ReadStorageMediumIntegrationService,
      useClass: ReadStorageMediumIntegrationService,
      deps: [SoapIntegrationService],
    },
    {
      provide: SearchStorageMediumIntegrationService,
      useClass: SearchStorageMediumIntegrationService,
      deps: [SoapIntegrationService],
    },
  ],
})
export class StorageMediumIntegrationModule {}
