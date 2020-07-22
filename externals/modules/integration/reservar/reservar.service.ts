import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { ReservarModel, ReservarTemplate } from '~libraries/domain/common/reservar';

interface ResponseStatus {
  code?: string;
  message?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReservarIntegrationService extends SoapService<ReservarTemplate, ReservarModel> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.reservar');
  }

  parseResponse(response: any): ReservarModel {
    const status = <ResponseStatus>response.responseStatus;
    if (status.code !== 'FS_ESB_0') {
      throw new Error('El número móvil ya esta reservado.');
    }
    return new ReservarModel(<ReservarTemplate>status);
  }

  fetchReservar(resourceType: string, resourceNumber: string) {
    const parametros = Object.assign(this.soapIntegrationService.settings.getConfiguration(`${this.alias}.body`), {
      resourceType,
      resourceNumber,
    });

    const soapHeader = this.soapIntegrationService.settings.getConfiguration(`${this.alias}.soapHeader`);
    return this.fetchService('ReserveSerialNumber', parametros, {
      soapHeader: soapHeader,
      name: 'headerRequest',
      namespace: 'v4',
      xmlns: 'http://www.amx.com/Schema/commonTypes/v4',
    });
  }
}
