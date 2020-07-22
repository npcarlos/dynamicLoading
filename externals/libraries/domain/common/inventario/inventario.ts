import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface MessageList {
  type: string;
  text: string;
}

export interface InventarioTemplate extends EntityTemplate {
  headerResponse: any;
  distributorSocialName: string;
  taxIdentificationNumberType: string;
  taxIdentificationNumber: number;
  imeiNumber: string;
  clientName: string;
  taxIdentificationNumberType1: number;
  taxIdentificationNumber1: number;
  businessDocumentNumber: number;
  creationRecordDate: string;
  recordedTime: string;
  delivery: number;
  recordedTime1: string;
  businessDocumentNumber1: number;
  commercialDocumentDate: string;
  serialNumber: string;
  shortTextMaterial: string;
  materialNumber: string;
  materialType: string;
  clienteNumber1: string;
  town: string;
  invoiceType: string;
  center: string;
  salesOffice: string;
  amount: number;
  saleAddressPoint: string;
  messageList: MessageList[];
}

export class InventarioModel extends EntityModel<InventarioTemplate> implements InventarioTemplate {
  headerResponse: any;
  distributorSocialName: string;
  taxIdentificationNumberType: string;
  taxIdentificationNumber: number;
  imeiNumber: string;
  clientName: string;
  taxIdentificationNumberType1: number;
  taxIdentificationNumber1: number;
  businessDocumentNumber: number;
  creationRecordDate: string;
  recordedTime: string;
  delivery: number;
  recordedTime1: string;
  businessDocumentNumber1: number;
  commercialDocumentDate: string;
  serialNumber: string;
  shortTextMaterial: string;
  materialNumber: string;
  materialType: string;
  clienteNumber1: string;
  town: string;
  invoiceType: string;
  center: string;
  salesOffice: string;
  amount: number;
  saleAddressPoint: string;
  messageList: MessageList[];
}
