import { Injectable } from '@angular/core';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import {
  AuthenticationTemplate,
  AuthenticationModel,
  AuthenticationResponseTemplate,
} from '~libraries/domain/common/authenticationIdVision';

import { Observable } from 'rxjs';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import { DocumentoClienteModel } from '~libraries/domain/common/authenticationIdVision/authenticationCliente';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationRestService extends RestServiceTemplate<AuthenticationTemplate, AuthenticationModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.autenticacionIDVision');
  }

  authenticationMock() {
    const authenticationResponse = require('./authentication-id-vision.json');
    return new Observable<AuthenticationModel>((subscriber) => subscriber.next(authenticationResponse));
  }

  authentication(
    cliente: ClienteModel,
    direccion: DireccionModel,
    documentoCliente: DocumentoClienteModel
  ): Observable<AuthenticationModel> {
    return this.restIntegrationService.put<AuthenticationTemplate, AuthenticationModel>(this, 'authentication', {
      headerRequest: {
        transactionId: 'string',
        system: 'string',
        user: 'string',
        password: 'string',
        requestDate: new Date().toISOString(),
        ipApplication: 'string',
        traceabilityId: 'string',
      },
      IdType: cliente.documentType,
      IdNumber: '2944795', // cliente.documentNumber,
      IdExpeditionDate: '02/08/1961', //TODO cliente.documentIssueDate
      IdExpeditionPlaceDept: documentoCliente.departamento,
      IdExpeditionPlaceDeptDescription: documentoCliente.departamento,
      IdExpeditionPlaceMunic: documentoCliente.municipio,
      IdExpeditionPlaceMunicDescription: documentoCliente.municipio,
      LastName: cliente.secondName,
      RecentPhoneNumber: documentoCliente.phoneNumber,
      ViaAddressType: direccion.splitAddres.tipoViaPrincipal,
      NumberViaAddress: direccion.splitAddres.numViaPrincipal,
      NumberViaGenAddress: direccion.splitAddres.numViaGeneradora,
      AddressPlate: direccion.splitAddres.placaDireccion,
    });
  }

  parseAuthenticationResponse(response: AuthenticationResponseTemplate): AuthenticationModel {
    console.log('service authentication Id vision', response.DCResponse);
    const decision = response.DCResponse.ContextData.Field.find((item) => item.key === 'Decision');
    if (decision && decision.content === 'Fail') {
      throw new Error('Autenficación Id Vision fallida no cumple con los parametos');
    }
    return new AuthenticationModel(response.DCResponse);
  }

  // Generic parseResponse
  parseResponse(response: AuthenticationTemplate): AuthenticationModel {
    return new AuthenticationModel(response);
  }
}
