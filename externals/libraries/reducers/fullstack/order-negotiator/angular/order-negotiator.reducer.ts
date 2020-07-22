import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/order-negotiator.reducer';
import { actionsObject } from './order-negotiator.actions';

const shoppingCartReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const shoppingCartFeatureKey = 'orderNegotiator';

export function reducer(state: any, action: Action) {
  return shoppingCartReducer(state, action);
}
