import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerPedidoState, PedidoState } from '../core/pedido.state';
import { PedidoModel } from '~libraries/domain/common/pedido';

export interface ApplicationState {
  pedido: Map<string, any>;
}

const selectPedidoFeature = (state: ApplicationState): ReducerPedidoState => <ReducerPedidoState>state.pedido.toJS();

//
const selectPedidoData = (state: PedidoState): PedidoModel[] => state.pedido;

//
export const selectPedido = createSelector(selectPedidoFeature, selectPedidoData);
