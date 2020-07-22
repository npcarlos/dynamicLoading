import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/departamentos.reducer';
import { actionsObject } from './departamentos.actions';

const departamentosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const departamentosFeatureKey = 'departamentos';

export function reducer(state: any, action: Action) {
  return departamentosReducer(state, action);
}
