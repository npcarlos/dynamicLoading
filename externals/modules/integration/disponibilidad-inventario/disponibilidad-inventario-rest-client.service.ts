import { Injectable } from '@angular/core';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { Observable } from 'rxjs';
import {
  DisponibilidadInventarioModel,
  DisponibilidadInventarioTemplate,
} from '~libraries/domain/fullstack/disponibilidad-inventario/disponibilidad-inventario';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class DisponibilidadInventarioRestClientService extends RestServiceTemplate<
  DisponibilidadInventarioTemplate,
  DisponibilidadInventarioModel
> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.disponibilidadInventario');
  }

  fetchDisponibilidadInventarioMock() {
    const disponibilidadInvResponse = require('./disponibilidad-inventario.json');
    return new Observable<DisponibilidadInventarioModel>((subscriber) =>
      subscriber.next(this.parseResponse(disponibilidadInvResponse))
    );
  }

  public fetchDisponibilidadInventario(stockTexto: string) {
    return this.restIntegrationService.get<DisponibilidadInventarioTemplate, DisponibilidadInventarioModel>(
      this,
      'fetchDisponibilidadInventario',
      {
        texto: stockTexto,
      }
    );
  }

  public buildFetchDisponibilidadInventarioURL(url: string): string {
    return `${url}/query`;
  }

  parseResponse(response: DisponibilidadInventarioTemplate): DisponibilidadInventarioModel {
    return new DisponibilidadInventarioModel(response);
  }
}
