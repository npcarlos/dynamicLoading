import { ClienteModel } from '~libraries/domain/common/cliente';

export interface ClienteState {
  cliente: ClienteModel;
}


export interface ReducerClienteState extends ClienteState {}
