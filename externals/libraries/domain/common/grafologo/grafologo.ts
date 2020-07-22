import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface GrafologoResponseTemplate extends EntityTemplate {
  validacionId: string;
}

export class GrafologoResponseModel extends EntityModel<GrafologoResponseTemplate>
  implements GrafologoResponseTemplate {
  validacionId: string;
}

export interface GrafologoTemplate extends EntityTemplate {
  transactionId: string;
  imageId: string;
}

export class GrafologoModel extends EntityModel<GrafologoTemplate> implements GrafologoTemplate {
  transactionId: string;
  imageId: string;
}
