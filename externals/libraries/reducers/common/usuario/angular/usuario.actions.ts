import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_USUARIO_ACTION, FETCH_USUARIO_ACTION } from '../core/usuario.constants';
import { UsuarioModel } from '~libraries/domain/common/usuario';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarUsuario = createAction(ACTUALIZAR_USUARIO_ACTION, props<{ usuario: UsuarioModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchUsuario = createAction(FETCH_USUARIO_ACTION, props<{ idUsuario: string }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_USUARIO_ACTION]: actualizarUsuario,

  [FETCH_USUARIO_ACTION]: fetchUsuario,
};
