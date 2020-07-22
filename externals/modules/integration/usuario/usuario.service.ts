import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { UsuarioModel, UsuarioTemplate, UsuarioResponseTemplate } from '~libraries/domain/common/usuario';

declare var require;
@Injectable({
  providedIn: 'root',
})
export class UsuarioIntegrationService extends RestServiceTemplate<UsuarioTemplate, UsuarioModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.usuario');
  }

  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------
  // FetchUsuario
  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  /**
   *
   * @param documentId
   */
  fetchUsuario(documentId: string): Observable<UsuarioModel> {
    return this.restIntegrationService.get<UsuarioResponseTemplate, UsuarioModel>(
      this,
      'fetchUsuario',
      {
        requestDate: new Date().toISOString(),
      },
      {
        documentId,
      }
    );
  }

  /**
   *
   * @param response
   */
  parseFetchUsuarioResponse(response: UsuarioResponseTemplate) {
    return this.parseResponse(JSON.parse(response.message));
  }

  /**
   *
   * @param url
   * @param variables
   */
  buildFetchUsuarioURL(url: string, variables: { documentId: string }) {
    const parametersUser: any = {
      documentId: variables.documentId,
    };
    let arrayParameters: any = JSON.stringify(parametersUser);
    return `${url}/${arrayParameters}`;
  }

  /**
   *
   */
  fetchUsuarioMock() {
    return new Observable((subscriber) => subscriber.next(require('./usuario.json')));
  }

  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------
  // Default Methods
  // ----------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------
  parseResponse(response: UsuarioTemplate): UsuarioModel {
    return new UsuarioModel(response);
  }
}
