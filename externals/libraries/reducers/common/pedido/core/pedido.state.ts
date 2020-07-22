import { PedidoModel } from '~libraries/domain/common/pedido';

export interface PedidoState {
  pedido: PedidoModel[];
}

export interface ReducerPedidoState extends PedidoState {}
