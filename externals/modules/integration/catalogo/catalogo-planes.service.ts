import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { CatalogoBaseIntegrationService } from './catalogo.base';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { PlanModel, PlanTemplate, CatalogoModel } from '~libraries/domain/fullstack/catalogo';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class CatalogoPlanesIntegrationService extends CatalogoBaseIntegrationService<PlanTemplate, PlanModel> {
  private static CATEGORIA_NOMBRE_CATALOGO_PLANES: string = 'productCategory';
  private static CATEGORIA_VALOR_CATALOGO_PLANES: string = 'PosPlaDes';

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService);
  }

  fetchCatalogoPlanes(atributosContextoCliente: AtributosContextoClienteModel) {
    return this.fetchCatalogo(
      CatalogoPlanesIntegrationService.CATEGORIA_NOMBRE_CATALOGO_PLANES,
      CatalogoPlanesIntegrationService.CATEGORIA_VALOR_CATALOGO_PLANES,
      atributosContextoCliente
    );
  }

  convertToModel(data: any): PlanModel {
    data.image = '/assets/images/plan/24222.png'; //`/assets/images/plan/${data.id}.png`;
    return new PlanModel(<PlanTemplate>data);
  }
}
