import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/pedido.reducer';
import { actionsObject } from './pedido.actions';

const pedidoReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const pedidoFeatureKey = 'pedido';

export function reducer(state: any, action: Action) {
  return pedidoReducer(state, action);
}
