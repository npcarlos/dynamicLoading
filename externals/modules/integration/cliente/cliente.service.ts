import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { ClienteModel, ClienteTemplate } from '~libraries/domain/common/cliente';
import { Observable } from 'rxjs';

declare var require;

interface ResponseStatus {
  code?: string;
  message?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteIntegrationService extends SoapService<ClienteTemplate, ClienteModel> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.cliente.get');
  }

  parseResponse(response: any, options: any): ClienteModel {
    const status = <ResponseStatus>response._responseStatus;
    if (status.code !== 'FS_ESB_0') {
      throw new Error('El cliente no existe en el sistema.');
    }

    if (!(response.listadoDirecciones instanceof Array)) {
      let listadoDirecciones = [];
      listadoDirecciones.push(response.listadoDirecciones);
      response.listadoDirecciones = listadoDirecciones;
    }
    response.id = options.accountNumber;
    return new ClienteModel(<ClienteTemplate>response);
  }

  fetchCliente(numeroCuentaCliente: string) {
    const soapHeader = this.soapIntegrationService.settings.getConfiguration(`${this.alias}.soapHeader`);
    return this.fetchService(
      'getCustomerProfile',
      {
        accountNumber: numeroCuentaCliente,
      },
      {
        soapHeader: soapHeader,
        name: 'headerRequest',
        namespace: 'v2',
        xmlns: 'http://www.ericsson.com/esb/data/generico/CommonTypes/v2/',
      },
      {
        accountNumber: numeroCuentaCliente,
      }
    );
  }

  getCustomerProfileMock() {
    return new Observable((subscriber) => subscriber.next(require('./cliente.json')));
  }
}
