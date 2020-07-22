import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/direccion.reducer';
import { actionsObject } from './direccion.actions';

const direccionReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const direccionFeatureKey = 'direccion';

export function reducer(state: any, action: Action) {
  return direccionReducer(state, action);
}
