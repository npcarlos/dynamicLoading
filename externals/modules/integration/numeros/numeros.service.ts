import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { NumeroModel, NumeroTemplate } from '~libraries/domain/common/numeros';

declare var require: any;

interface ResponseStatus {
  code?: string;
  message?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NumerosIntegrationService extends SoapService<NumeroTemplate, NumeroModel> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.numeracionMovil');
  }

  parseResponse(response: any): NumeroModel[] {
    const status = <ResponseStatus>response.responseStatus;
    if (status.code !== 'FS_ESB_0') {
      throw new Error('El número móvil no se pudo consultar.');
    }
    const respuesta: any[] = <any[]>response.resources.resource;
    return respuesta.map((data) => this.convertToModel(data));
  }

  convertToModel(data: any): NumeroModel {
    return new NumeroModel(<NumeroTemplate>data);
  }

  fetchNumeros() {
    const { soapHeader, body } = this.soapIntegrationService.settings.getConfiguration(`${this.alias}`);
    return this.fetchService('getNumberResources', body, {
      soapHeader: soapHeader,
      name: 'headerRequest',
      namespace: 'v2',
      xmlns: 'http://www.ericsson.com/esb/data/generico/CommonTypes/v2/',
    });
  }

  getNumberResourcesMock() {
    return new Observable((subscriber) => subscriber.next(require('./numeros.json')));
  }
}
