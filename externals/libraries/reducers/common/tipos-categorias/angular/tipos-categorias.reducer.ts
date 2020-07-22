import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/tipos-categorias.reducer';
import { actionsObject } from './tipos-categorias.actions';

const tipoPlanReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const tiposCategoriaFeatureKey = 'tiposCategorias';

export function reducer(state: any, action: Action) {
  return tipoPlanReducer(state, action);
}
