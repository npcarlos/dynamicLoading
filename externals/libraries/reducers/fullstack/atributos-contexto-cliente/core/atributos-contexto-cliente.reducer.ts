import { Map } from 'immutable';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';

import { ReducerAtributosContextoClienteState } from './atributos-contexto-cliente.state';
import { ACTUALIZAR_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION } from './atributos-contexto-cliente.constants';

const initialStateValue: ReducerAtributosContextoClienteState = {
  cabecera: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION]: (
    store: Map<string, any>,
    action: { cabecera: AtributosContextoClienteModel }
  ) => store.set('cabecera', action.cabecera),
};
