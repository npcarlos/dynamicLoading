import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { InventarioTemplate, InventarioModel } from '~libraries/domain/common/inventario/inventario';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class InventarioIntegrationService extends RestServiceTemplate<InventarioTemplate, InventarioModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.inventario');
  }

  fetchInventario(imei: string): Observable<InventarioModel> {
    const header = this.restIntegrationService.settings.getConfiguration(`${this.alias}.header`);
    return this.restIntegrationService.put<InventarioTemplate, InventarioModel>(this, 'getInventario', {
      ...header,
      imei,
    });
  }

  buildGetInventarioURL(url: string) {
    return url;
  }

  parseGetInventarioResponse(response: InventarioTemplate) {
    return this.parseResponse(response);
  }

  getInventarioMock(): Observable<InventarioModel> {
    const response = require('./inventario.json');
    return new Observable((observer) => {
      observer.next(this.parseGetInventarioResponse(response));
      observer.complete();
    });
  }

  parseResponse(response: InventarioTemplate): InventarioModel {
    return new InventarioModel(response);
  }
}
