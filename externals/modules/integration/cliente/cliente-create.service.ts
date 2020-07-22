import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { ClienteModel, ClienteCustomerIdTemplate, ClienteCustomerIdModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';

declare var require: any;

interface ResponseStatus {
  code?: string;
  message?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteCreateIntegrationService extends SoapService<ClienteCustomerIdTemplate, ClienteCustomerIdModel> {
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.cliente.create');
  }

  parseResponse(response: any) {
    const status = <ResponseStatus>response.ResponseStatus;
    if (status && status.code !== 'FS_ESB_0') {
      throw new Error('El cliente no pudo ser creado: ' + status.message);
    }
    return new ClienteCustomerIdModel(response);
  }

  createCliente(cliente: ClienteModel, direccion: DireccionModel): Observable<ClienteCustomerIdTemplate> {
    const soapHeader = this.soapIntegrationService.settings.getConfiguration(`${this.alias}.soapHeader`);
    return <Observable<ClienteCustomerIdTemplate>>this.fetchService(
      'CreateCustomerProfile',
      {
        documentType: cliente.documentType,
        documentNumber: cliente.documentNumber,
        documentIssueDate: moment(cliente.documentIssueDate).format('YYYY-MM-DDTHH:mm:ss'),
        firstSurName: cliente.secondName,
        firstName: cliente.name,
        otherSurNames: cliente.otherSurNames,
        customerCategory: '1',
        email: cliente.email,
        phoneNumber: cliente.phoneNumber,
        district: direccion.city.uperGeographycLevel.uperGeographycLevel.daneCode,
        city: direccion.city.uperGeographycLevel.daneCode,
        cityArea: direccion.city.uperGeographycLevel.uperGeographycLevel.daneCode,
        MGLAddressId: direccion.addressId,
        address: direccion.igacAddress,
        billCycle: cliente?.billCycle,

        gender: cliente.gender,
        civilStatus: cliente.maritalStatus,
        clientSince: moment().format('YYYY-MM-DDTHH:mm:ss'),
        dateOfBirth: cliente.dateOfBirth,
      },
      {
        soapHeader: soapHeader,
        name: 'headerRequest',
        namespace: 'v4',
        xmlns: 'http://www.amx.com/Schema/commonTypes/v4/',
      }
    );
  }

  CreateCustomerProfileMock() {
    return new Observable((subscriber) => subscriber.next(require('./crear-cliente.json')));
  }
}
