import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import {
  AtributosContextoClienteResponseTemplate,
  AtributosContextoClienteTemplate,
  AtributosContextoClienteModel,
} from '~libraries/domain/fullstack/atributos-contexto-cliente';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class ContextAttributesRestClientService extends RestServiceTemplate<
  AtributosContextoClienteTemplate,
  AtributosContextoClienteModel
> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.atributosContextoCliente');
  }

  fetchAtributosContextoCliente(
    tipoDocumento: string,
    numeroIdentificacion: string
  ): Observable<AtributosContextoClienteModel> {
    return this.restIntegrationService.get<AtributosContextoClienteResponseTemplate, AtributosContextoClienteModel>(
      this,
      'getContextAttributes',
      {
        requestDate: new Date().toISOString(),
      },
      {
        tipoDocumento,
        numeroIdentificacion,
      }
    );
  }

  getContextAttributesMock(): Observable<AtributosContextoClienteModel> {
    return new Observable((observer) => observer.next(require('./atributos-contexto-cliente.json')));
  }

  buildGetContextAttributesURL(url: string, variables: { tipoDocumento: string; numeroIdentificacion: string }) {
    return `${url}/${variables.tipoDocumento}/${variables.numeroIdentificacion}`;
  }

  parseGetContextAttributesResponse(response: AtributosContextoClienteResponseTemplate) {
    return this.parseResponse(response.body.pop());
  }

  parseResponse(response: AtributosContextoClienteTemplate): AtributosContextoClienteModel {
    return new AtributosContextoClienteModel(response);
  }
}
