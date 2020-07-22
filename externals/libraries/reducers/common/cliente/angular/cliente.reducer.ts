import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/cliente.reducer';
import { actionsObject } from './cliente.actions';

const clienteReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const clienteFeatureKey = 'cliente';

export function reducer(state: any, action: Action) {
  return clienteReducer(state, action);
}
