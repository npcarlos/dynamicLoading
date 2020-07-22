import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';

import { TecnologiaModel, TecnologiaTemplate } from '~libraries/domain/fullstack/catalogo';
import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { CatalogoBaseIntegrationService } from './catalogo.base';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class CatalogoTecnologiasIntegrationService extends CatalogoBaseIntegrationService<
  TecnologiaTemplate,
  TecnologiaModel
> {
  private static CATEGORIA_NOMBRE_CATALOGO_TECNOLOGIAS: string = 'productCategory';
  private static CATEGORIA_VALOR_CATALOGO_TECNOLOGIAS: string = 'TecnologiaGeneral';

  private static CATEGORIA_NOMBRE_CATALOGO_TECNOLOGIAS_ASOCIACIONES: string = 'id';

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService);
  }

  fetchCatalogoTecnologias(atributosContextoCliente: AtributosContextoClienteModel) {
    return this.fetchCatalogo(
      CatalogoTecnologiasIntegrationService.CATEGORIA_NOMBRE_CATALOGO_TECNOLOGIAS,
      CatalogoTecnologiasIntegrationService.CATEGORIA_VALOR_CATALOGO_TECNOLOGIAS,
      atributosContextoCliente
    );
  }

  fetchCatalogoTecnologiasAsociaciones(
    categoriaValor: string,
    atributosContextoCliente: AtributosContextoClienteModel
  ) {
    return this.fetchCatalogo(
      CatalogoTecnologiasIntegrationService.CATEGORIA_NOMBRE_CATALOGO_TECNOLOGIAS_ASOCIACIONES,
      categoriaValor,
      atributosContextoCliente
    );
  }

  convertToModel(data: any): TecnologiaModel {
    data.image = '/assets/images/tecnologia/portatil-hewlett-packard.jpg'; //`/assets/images/tecnologia/${data.id}.png`;
    return new TecnologiaModel(<TecnologiaTemplate>data);
  }
}
