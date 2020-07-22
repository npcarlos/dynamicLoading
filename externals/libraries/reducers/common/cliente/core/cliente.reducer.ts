import { ACTUALIZAR_CLIENTE_ACTION } from './cliente.constants';
import { Map } from 'immutable';
import { ReducerClienteState } from './cliente.state';
import { ClienteModel } from '~libraries/domain/common/cliente';

const initialStateValue: ReducerClienteState = {
  cliente: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_CLIENTE_ACTION]: (store: Map<string, any>, action: { cliente: ClienteModel }) => {
    sessionStorage.setItem('account', action.cliente.id || '');
    sessionStorage.setItem('documentNumber', action.cliente.documentNumber || '');
    sessionStorage.setItem('documentType', `${action.cliente.documentType}` || '');
    return store.set('cliente', action.cliente);
  },
};
