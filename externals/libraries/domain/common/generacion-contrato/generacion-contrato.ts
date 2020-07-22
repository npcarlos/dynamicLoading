import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface GeneracionContratoTemplate extends EntityTemplate {
  code: string;
  message: string;
  status: string;
}

export interface GeneracionContratoResponseTemplate {
  isValid: string;
  message: string;
}
export class GeneracionContratoModel extends EntityModel<GeneracionContratoTemplate>
  implements GeneracionContratoTemplate {
  code: string;
  message: string;
  status: string;
}
