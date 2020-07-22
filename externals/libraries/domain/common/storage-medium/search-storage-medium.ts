import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface SearchStorageMediumResponseTemplate {
  responseStatus: any;
  storageMediumList: SearchStorageMediumListTemplate;
}

export interface SearchStorageMediumListTemplate {
  storageMedium: SearchStorageMediumTemplate;
}

export interface SearchStorageMediumTemplate extends EntityTemplate {
  iccid: string;
  imsi: string;
  status: string;
  storageMediumClass: string;
  dealerId: string;
  physicalHlrCode: string;
  portNumberingPlanCode: string;
}

export class SearchStorageMediumModel extends EntityModel<SearchStorageMediumTemplate> implements SearchStorageMediumTemplate {
  iccid: string;
  imsi: string;
  status: string;
  storageMediumClass: string;
  dealerId: string;
  physicalHlrCode: string;
  portNumberingPlanCode: string;
}
