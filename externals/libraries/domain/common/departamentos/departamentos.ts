import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface DepartamentosTemplate extends EntityTemplate {
  codigoDane: string;
  nombre: string;
}

export class DepartamentosModel extends EntityModel<DepartamentosTemplate> implements DepartamentosTemplate {
  codigoDane: string;
  nombre: string;
}
