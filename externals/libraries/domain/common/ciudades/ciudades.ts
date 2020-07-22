import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface Municipios {
  codigo: string;
  nombre: string;
}

export interface CiudadesTemplate extends EntityTemplate {
  codigoDane: string;
  nombre: string;
  municipios: Municipios[];
}

export class CiudadesModel extends EntityModel<CiudadesTemplate> implements CiudadesTemplate {
  codigoDane: string;
  nombre: string;
  municipios: Municipios[];
}
