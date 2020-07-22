import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface TiposCategoriasTemplate extends EntityTemplate {
  nombreCategoria: string;
}

export class TiposCategoriasModel extends EntityModel<TiposCategoriasTemplate> implements TiposCategoriasTemplate {
  nombreCategoria: string;
}
