import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';

import { EquipoModel, EquipoTemplate } from '~libraries/domain/fullstack/catalogo';
import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { CatalogoBaseIntegrationService } from './catalogo.base';

declare var require: any;
@Injectable({
  providedIn: 'root',
})
export class CatalogoEquiposIntegrationService extends CatalogoBaseIntegrationService<EquipoTemplate, EquipoModel> {
  private static CATEGORIA_NOMBRE_CATALOGO_EQUIPOS: string = 'productCategory';
  private static CATEGORIA_VALOR_CATALOGO_EQUIPOS: string = 'TerminalesGeneral';

  private static CATEGORIA_NOMBRE_CATALOGO_EQUIPOS_ASOCIACIONES: string = 'id';

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService);
  }

  fetchCatalogoEquipos(atributosContextoCliente: AtributosContextoClienteModel) {
    return this.fetchCatalogo(
      CatalogoEquiposIntegrationService.CATEGORIA_NOMBRE_CATALOGO_EQUIPOS,
      CatalogoEquiposIntegrationService.CATEGORIA_VALOR_CATALOGO_EQUIPOS,
      atributosContextoCliente
    );
  }

  fetchCatalogoEquiposAsociaciones(categoriaValor: string, atributosContextoCliente: AtributosContextoClienteModel) {
    return this.fetchCatalogo(
      CatalogoEquiposIntegrationService.CATEGORIA_NOMBRE_CATALOGO_EQUIPOS_ASOCIACIONES,
      categoriaValor,
      atributosContextoCliente
    );
  }

  convertToModel(data: any): EquipoModel {
    data.image = 'assets/images/equipo/iphone-11-64gb-4g-negro.jpg'; //`/assets/images/equipo/${data.id}.png`;
    return new EquipoModel(<EquipoTemplate>data);
  }
}
