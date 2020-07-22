import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { GrafologoResponseModel, GrafologoResponseTemplate, GrafologoModel } from '~libraries/domain/common/grafologo';

@Injectable({
  providedIn: 'root',
})
export class GrafologoResponseIntegrationService extends SoapService<
  GrafologoResponseTemplate,
  GrafologoResponseModel
> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.grafologo.get');
  }

  parseResponse(response: any): GrafologoResponseModel {
    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }

    return new GrafologoResponseModel(response);
  }

  fetchGrafologo(grafologo: GrafologoModel) {
    return this.fetchService('verifyIdentity', {
      clientID: this.soapIntegrationService.settings.getConfiguration(
        'services.integration.common.grafologo.get.clientID'
      ),
      accessToken: this.soapIntegrationService.settings.getConfiguration(
        'services.integration.common.grafologo.get.accessToken'
      ),
      transaccionId: grafologo.transactionId,
    });
  }
}
