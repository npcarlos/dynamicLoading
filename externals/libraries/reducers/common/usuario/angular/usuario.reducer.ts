import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/usuario.reducer';
import { actionsObject } from './usuario.actions';

const usuarioReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const usuarioFeatureKey = 'usuario';

export function reducer(state: any, action: Action) {
  return usuarioReducer(state, action);
}
