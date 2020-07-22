import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { ValidacionImeiTemplate, ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';
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
export class ValidacionImeiIntegrationService extends RestServiceTemplate<ValidacionImeiTemplate, ValidacionImeiModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.imei');
  }

  public parseResponse(response: ValidacionImeiTemplate): ValidacionImeiModel {
    return new ValidacionImeiModel(response);
  }

  validarImei(imei: string): Observable<ValidacionImeiModel> {
    return this.restIntegrationService.get<ValidacionImeiTemplate, ValidacionImeiModel>(
      this,
      'validarImei',
      {
        requestDate: new Date().toISOString(),
      },
      {
        imei,
      }
    );
  }

  public buildValidarImeiURL(url: string, variables: { imei: string }): string {
    return `${url}bdoNegativo/{"imei":"${variables.imei}"}`;
  }

  public parseValidarImeiResponse(response): ValidacionImeiModel {
    response.message = JSON.parse(response.message);
    if (!response.isValid) {
      throw new Error(response.message.description);
    }
    if (response.message.isReported) {
      throw new Error('El imei esta reportado.');
    }
    return new ValidacionImeiModel(response);
  }
}
