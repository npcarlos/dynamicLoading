import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface NumeroTemplate extends EntityTemplate {
  dnId: string;
  number: string;
  serviceType: string;
  status: string;
  npCode: string;
  numberType: string;
  hlCode: string;
  hmCode: string;
  rsCode: string;
  sdpId: string;
}

export class NumeroModel extends EntityModel<NumeroTemplate> implements NumeroTemplate {
  dnId: string;
  number: string;
  serviceType: string;
  status: string;
  npCode: string;
  numberType: string;
  hlCode: string;
  hmCode: string;
  rsCode: string;
  sdpId: string;
}
