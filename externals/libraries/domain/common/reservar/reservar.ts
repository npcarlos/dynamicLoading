import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ReservarTemplate extends EntityTemplate {
  code: string;
  message: string;
  status: string;
}

export class ReservarModel extends EntityModel<ReservarTemplate> implements ReservarTemplate {
  code: string;
  message: string;
  status: string;
}
