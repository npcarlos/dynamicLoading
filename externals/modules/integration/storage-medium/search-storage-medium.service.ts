import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import {
  SearchStorageMediumModel,
  SearchStorageMediumTemplate,
  SearchStorageMediumResponseTemplate,
} from '~libraries/domain/common/storage-medium';

@Injectable({
  providedIn: 'root',
})
export class SearchStorageMediumIntegrationService extends SoapService<
  SearchStorageMediumTemplate,
  SearchStorageMediumModel
> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.fullstack.searchStorageMedium');
  }

  parseResponse(response: SearchStorageMediumResponseTemplate): SearchStorageMediumModel {
    return new SearchStorageMediumModel(response.storageMediumList.storageMedium);
  }

  fetchSearchStorageMedium() {
    const { soapHeader, body } = this.soapIntegrationService.settings.getConfiguration(`${this.alias}`);
    return this.fetchService('searchStorageMedium', body, {
      soapHeader: soapHeader,
      name: 'headerRequest',
      namespace: 'v2',
      xmlns: 'http://www.ericsson.com/esb/data/generico/CommonTypes/v2/',
    });
  }
}
