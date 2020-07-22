import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/atributos-contexto-cliente.reducer';
import { actionsObject } from './atributos-contexto-cliente.actions';

const atributosContextoClienteReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const atributosContextoClienteFeatureKey = 'atributosContextoCliente';

export function reducer(state: any, action: Action) {
  return atributosContextoClienteReducer(state, action);
}
