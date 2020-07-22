import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { RiesgoListasModel, RiesgoListasTemplate } from '~libraries/domain/common/riesgoListas';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class RiesgoListasIntegrationService extends RestServiceTemplate<RiesgoListasTemplate, RiesgoListasModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.listas');
  }

  fetchRiesgoListas(cliente: ClienteModel, usuario: UsuarioModel): Observable<RiesgoListasModel> {
    let request = {
      headerRequest: {
        transactionId: '1',
        system: 'sys',
        target: 'target',
        user: 'prueba',
        password: 'test',
        requestDate: '2008-09-28T20:49:45',
        ipApplication: '1',
        traceabilityId: '1',
      },
      channel: 'PRESENCIAL',
      typeProcess: 'PROMOCIONES',
      document: {
        typeDocument: cliente.darCodigoTipoDocumento(),
        numberDocument: cliente.documentNumber,
      },
      phone: {
        areaCode: '057',
        phone: cliente.contactInfo[0].contactInfo,
      },
      typeIdentification: cliente.darCodigoTipoDocumento(),
      mail: cliente.email,
      identification: cliente.documentNumber,
      name: cliente.firstName,
      punctuation: '100',
      observations: 'prueba',
      lists: 'ONU|OFAC|FBI',
      dv: '1',
    };

    return this.restIntegrationService.put<RiesgoListasTemplate, RiesgoListasModel>(this, 'fetchRiesgoListas', request);
  }

  fetchRiesgoListasMock(): Observable<RiesgoListasModel> {
    const listas = require('./riesgoListas.json');
    return new Observable<RiesgoListasModel>((subscriber) => subscriber.next(this.parseResponse(listas)));
  }

  parseResponse(response: RiesgoListasTemplate): RiesgoListasModel {
    return new RiesgoListasModel(response);
  }
}
