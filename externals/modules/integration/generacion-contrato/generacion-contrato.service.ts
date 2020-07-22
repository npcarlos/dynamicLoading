import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import {
  GeneracionContratoTemplate,
  GeneracionContratoModel,
  GeneracionContratoResponseTemplate,
} from '~libraries/domain/common/generacion-contrato';
import { ClienteModel } from '~libraries/domain/common/cliente';

@Injectable({
  providedIn: 'root',
})
export class GeneracionContratoIntegrationService extends RestServiceTemplate<
  GeneracionContratoTemplate,
  GeneracionContratoModel
> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.generacioncontrato');
  }

  fetchContrato(orderNumber: string, nut: string, fingerNumber: string): Observable<GeneracionContratoModel> {
    const parametersLegalization: any = {
      orderNumber: orderNumber,
      nut: nut,
      fingerNumber: fingerNumber,
    };
    let arrayParameters: any = JSON.stringify(parametersLegalization);
    return this.fetchOperacionContrato('getContrato', 'generateContract', arrayParameters);
  }

  fetchDocumento(cliente: ClienteModel, nut: string, fingerNumber: string): Observable<GeneracionContratoModel> {
    const parametersLegalization: any = {
      documentType: cliente.documentType,
      documentNumber: cliente.documentNumber,
      nut: nut,
      fingerNumber: fingerNumber,
    };
    let arrayParameters: any = JSON.stringify(parametersLegalization);
    return this.fetchOperacionContrato('getDocumento', 'generateATDP', arrayParameters);
  }

  fetchLegalizacion(orderNumber: string): Observable<GeneracionContratoModel> {
    const parametersOrder: any = {
      orderNumber: orderNumber,
    };
    let arrayParameters: any = JSON.stringify(parametersOrder);
    return this.fetchOperacionContrato('getLegalizacion', 'postSalesLegalization', arrayParameters);
  }

  fetchOperacionContrato(metodo: string, operacion: string, message: string) {
    return this.restIntegrationService.post<GeneracionContratoResponseTemplate, GeneracionContratoModel>(this, metodo, {
      headerRequest: {
        transactionId: 'string',
        system: 'string',
        target: 'string',
        user: 'string',
        password: 'string',
        requestDate: '2008-09-28T20:49:45',
        ipApplication: 'string',
        traceabilityId: 'string',
      },
      getOperation: operacion,
      message: message,
    });
  }

  parseResponse(response: GeneracionContratoTemplate): GeneracionContratoModel {
    return new GeneracionContratoModel(response);
  }
}
