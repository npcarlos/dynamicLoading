import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface TipoNumeroTemplate extends EntityTemplate {
  tipoNumero: string;
}

export class TipoNumeroModel extends EntityModel<TipoNumeroTemplate> implements TipoNumeroTemplate {
  tipoNumero: string;
}
