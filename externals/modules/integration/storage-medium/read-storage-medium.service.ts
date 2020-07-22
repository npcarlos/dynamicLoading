import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { ReadStorageMediumTemplate, ReadStorageMediumModel } from '~libraries/domain/common/storage-medium';

@Injectable({
  providedIn: 'root',
})
export class ReadStorageMediumIntegrationService extends SoapService<
  ReadStorageMediumTemplate,
  ReadStorageMediumModel
> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.fullstack.readStorageMedium');
  }

  parseResponse(response: ReadStorageMediumTemplate): ReadStorageMediumModel {
    return new ReadStorageMediumModel(response);
  }

  fetchReadStorageMedium(id: string) {
    const soapHeader = this.soapIntegrationService.settings.getConfiguration(`${this.alias}.soapHeader`);
    const parametros = { id: id };
    return this.fetchService('readStorageMedium', parametros, {
      soapHeader: soapHeader,
      name: 'headerRequest',
      namespace: 'v2',
      xmlns: 'http://www.ericsson.com/esb/data/generico/CommonTypes/v2/',
    });
  }
}
