import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import {
  DireccionTemplate,
  DireccionIdTemplate,
  DireccionResponseTemplate,
  DireccionModel,
} from '~libraries/domain/common/direccion';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class DireccionIntegrationService extends RestServiceTemplate<DireccionTemplate, DireccionModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.direccion');
  }

  findDirByToken(tokenConsulta: string): Observable<DireccionIdTemplate> {
    return <Observable<DireccionIdTemplate>>(
      this.restIntegrationService.put<DireccionIdTemplate, DireccionIdTemplate>(
        this,
        'findDirByToken',
        { tokenConsulta },
        {}
      )
    );
  }

  buildFindDirByTokenURL(url: string): string {
    return `${url}/findDirBytoken`;
  }

  parseFindDirByTokenResponse(direccionDetalladaId: DireccionIdTemplate): DireccionIdTemplate {
    if (!direccionDetalladaId) {
      throw new Error('El id de la dirección no está definido.');
    }
    return direccionDetalladaId;
  }

  findDirByTokenMock() {
    return new Observable((subscriber) => subscriber.next(require('./dirByToken.json')));
  }

  // Consulta dirección
  consultaDireccion(direccionDetalladaId: DireccionIdTemplate): Observable<DireccionModel> {
    const consulta = {
      idDireccion: direccionDetalladaId.direccionDetalladaId,
      segmento: 'residencial',
      proyecto: 'ins',
    };
    return this.restIntegrationService.put<DireccionResponseTemplate, DireccionModel>(
      this,
      'consultaDireccion',
      consulta
    );
  }

  buildConsultaDireccionURL(url: string): string {
    return `${url}/consultaDireccion`;
  }

  parseConsultaDireccionResponse(response: DireccionResponseTemplate): DireccionModel {
    return this.parseResponse(response.addresses);
  }

  consultaDireccionMock() {
    return new Observable((subscriber) => subscriber.next(require('./direccion.json')));
  }

  // Generic
  parseResponse(response: DireccionTemplate): DireccionModel {
    if (!response) {
      throw new Error('La dirección que se intentó consultar no es válida.');
    }
    response.id = response.addressId;
    return new DireccionModel(response);
  }
}
