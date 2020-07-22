import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ReadStorageMediumTemplate extends EntityTemplate {
  iccid: string;
  imsi: string;
  authenticationKey: string;
  pin: string;
  pin2: string;
  puk: string;
  puk2: string;
  status: string;
  dealerId: string;
}

export class ReadStorageMediumModel extends EntityModel<ReadStorageMediumTemplate> implements ReadStorageMediumTemplate {
  iccid: string;
  imsi: string;
  authenticationKey: string;
  pin: string;
  pin2: string;
  puk: string;
  puk2: string;
  status: string;
  dealerId: string;
}
