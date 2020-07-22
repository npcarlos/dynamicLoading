import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/ciudades.reducer';
import { actionsObject } from './ciudades.actions';

const ciudadesReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const ciudadesFeatureKey = 'ciudades';

export function reducer(state: any, action: Action) {
  return ciudadesReducer(state, action);
}
