import { ACTUALIZAR_USUARIO_ACTION } from './usuario.constants';
import { Map } from 'immutable';
import { ReducerUsuarioState } from './usuario.state';
import { UsuarioModel } from '~libraries/domain/common/usuario';

const initialStateValue: ReducerUsuarioState = {
  usuario: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_USUARIO_ACTION]: (store: Map<string, any>, action: { usuario: UsuarioModel }) =>
    store.set('usuario', action.usuario),
 
};
