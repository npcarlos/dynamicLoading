import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/catalogo.reducer';
import { actionsObject } from './catalogo.actions';

const catalogoReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const catalogoFeatureKey = 'catalogo';

export function reducer(state: any, action: Action) {
  return catalogoReducer(state, action);
}
