import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface LogMessageList {
  type: string;
  text: string;
}

export interface PedidoTemplate extends EntityTemplate {
  headerResponse: any;
  messageBody: string;
  saleDocument: string;
  logMessageList: LogMessageList[];
}

export class PedidoModel extends EntityModel<PedidoTemplate> implements PedidoTemplate {
  headerResponse: any;
  messageBody: string;
  saleDocument: string;
  logMessageList: LogMessageList[];
}
