import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface GenerosTemplate extends EntityTemplate {
  genero: string;
  descripcion: string;
}

export class GenerosModel extends EntityModel<GenerosTemplate> implements GenerosTemplate {
  genero: string;
  descripcion: string;
}
