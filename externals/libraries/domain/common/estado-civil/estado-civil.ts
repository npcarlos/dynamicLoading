import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface EstadoCivilTemplate extends EntityTemplate {
  genero: string;
  descripcion: string;
}

export class EstadoCivilModel extends EntityModel<EstadoCivilTemplate> implements EstadoCivilTemplate {
  genero: string;
  descripcion: string;
}
