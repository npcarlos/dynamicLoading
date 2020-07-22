import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface HeaderResponse {
  responseDate: Date;
  traceabilityId: string;
}

export interface DescriptionError {
  code: string;
  message: string;
}

export interface Lists {
  list: string;
  action: string;
  reason: string;
}

export interface InfoList {
  descriptionError?: DescriptionError;
  lists?: Lists;
}

export interface List {
  list: string;
  coincidence: string;
  observations: string;
}

export interface RiesgoListasTemplate extends EntityTemplate{
  headerResponse: HeaderResponse;
  infoList: InfoList[];
  lists: List[];
}

export class RiesgoListasModel extends EntityModel<RiesgoListasTemplate> implements RiesgoListasTemplate {
  headerResponse: HeaderResponse;
  infoList: InfoList[];
  lists: List[];
}
