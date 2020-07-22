import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/shopping-cart.reducer';
import { actionsObject } from './shopping-cart.actions';

const shoppingCartReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const shoppingCartFeatureKey = 'shoppingCart';

export function reducer(state: any, action: Action) {
  return shoppingCartReducer(state, action);
}
