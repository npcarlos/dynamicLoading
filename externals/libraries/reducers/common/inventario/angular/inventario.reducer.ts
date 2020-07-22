import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/inventario.reducer';
import { actionsObject } from './inventario.actions';

const inventarioReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const inventarioFeatureKey = 'inventario';

export function reducer(state: any, action: Action) {
  return inventarioReducer(state, action);
}
