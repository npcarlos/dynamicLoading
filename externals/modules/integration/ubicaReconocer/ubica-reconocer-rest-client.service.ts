import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { SettingsService } from '~modules/infraestructure/settings/settings.service';
import { Observable } from 'rxjs';

import { UbicaReconocerModel, UbicaReconocerTemplate } from '~libraries/domain/fullstack/ubica-reconocer';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class UbicaReconocerRestClientService extends RestServiceTemplate<UbicaReconocerTemplate, UbicaReconocerModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.ubicaReconocer');
  }

  fetchUbicacionReconocerMock() {
    const ubicaReconoceRsponse = require('./ubica-reconocer.json');
    return new Observable<UbicaReconocerModel>((subscriber) =>
      subscriber.next(this.parseResponse(ubicaReconoceRsponse))
    );
  }

  public fetchUbicacionReconocer(cliente: ClienteModel, usuarioConsulta: string) {
    return this.restIntegrationService.get<UbicaReconocerTemplate, UbicaReconocerModel>(
      this,
      'fetchUbicacionReconocer',
      {
        transactionId: 'string',
        system: 'string',
        target: 'string',
        user: 'string',
        password: 'string',
        requestDate: '2020-06-07T20:30:45',
        ipApplication: 'string',
        traceabilityId: 'string',
        primerApellido: cliente.secondName,
        tipoDocumento: cliente.documentType,
        numDocumento: cliente.documentNumber,
        usuarioConsulta: usuarioConsulta,
      }
    );
  }

  public buildFetchUbicacionReconocerURL(url: string): string {
    return `${url}/getInformacion`;
  }

  public parseResponse(response: UbicaReconocerTemplate): UbicaReconocerModel {
    if (response.fault.codigoRespuesta !== 1) {
      throw new Error('validacion no realizada');
    }
    return new UbicaReconocerModel(response);
  }
}
