import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface listaReportesBeanValidacionImeiTemplate {
  tipoReporte?: string;
  operador?: string;
  fechaReporte?: string;
  msisdn?: string;
}

export interface messageValidacionImeiTemplate {
  codigo: string;
  description: string;
  isReported: string;
  imei: string;
  listaReportesBean: listaReportesBeanValidacionImeiTemplate;
}
export interface headerResponseValidacionImeiTemplate {
  responseDate: string;
  traceabilityId: string;
}

export interface ValidacionImeiTemplate extends EntityTemplate {
  headerResponse: headerResponseValidacionImeiTemplate;
  isValid: boolean;
  message: messageValidacionImeiTemplate;
}

export class ValidacionImeiModel extends EntityModel<ValidacionImeiTemplate> implements ValidacionImeiTemplate {
  headerResponse: headerResponseValidacionImeiTemplate;
  isValid: boolean;
  message: messageValidacionImeiTemplate;
}
