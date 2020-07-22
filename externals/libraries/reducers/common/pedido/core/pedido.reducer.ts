import { Map } from 'immutable';
import { ReducerPedidoState } from './pedido.state';
import { ACTUALIZAR_PEDIDO_ACTION } from './pedido.constants';
import { PedidoModel } from '~libraries/domain/common/pedido';

const initialStateValue: ReducerPedidoState = {
  pedido: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_PEDIDO_ACTION]: (store: Map<string, any>, action: { pedido: PedidoModel }) =>
    store.set('pedido', action.pedido),
};
