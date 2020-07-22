import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { RiesgohcModel, RiesgohcTemplate } from '~libraries/domain/common/riesgoHC';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class RiesgoHCIntegrationService extends RestServiceTemplate<RiesgohcTemplate, RiesgohcModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.riesgoHC');
  }

  fetchRiesgoHC(cliente: ClienteModel, usuario: UsuarioModel): Observable<RiesgohcModel> {
    let request = {
      clave: '73ZUZ',
      identificacion: cliente.documentNumber,
      primerApellido: cliente.secondName,
      producto: '60',
      tipoIdentificacion: cliente.documentType,
      usuario: '52263842',
      region: 'R1',
      origen: 'INS',
      parametros: {
        parametro: [
          {
            tipo: 'T',
            nombre: '01',
            valor: '425168',
          },
          {
            tipo: 'T',
            nombre: '02',
            valor: 'DISTRIBUIDOR PRINCIPAL BUCARAMANGA',
          },
          {
            tipo: 'T',
            nombre: '03',
            valor: '890124125',
          },
        ],
      },
    };
    return this.restIntegrationService.put<RiesgohcTemplate, RiesgohcModel>(this, 'fetchRiesgoHC', request);
  }

  fetchRiesgoHCMock(): Observable<RiesgohcModel> {
    return new Observable<RiesgohcModel>((subscriber) => subscriber.next(require('./riesgoHC.json')));
  }

  parseResponse(response: RiesgohcTemplate): RiesgohcModel {
    return new RiesgohcModel(response);
  }
}
