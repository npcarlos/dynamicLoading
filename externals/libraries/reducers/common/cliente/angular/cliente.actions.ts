import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_CLIENTE_ACTION, FETCH_CLIENTE_ACTION, CREATE_CLIENTE_ACTION } from '../core/cliente.constants';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarCliente = createAction(ACTUALIZAR_CLIENTE_ACTION, props<{ cliente: ClienteModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchCliente = createAction(FETCH_CLIENTE_ACTION, props<{ numeroCuentaCliente: string }>());
export const createCliente = createAction(
  CREATE_CLIENTE_ACTION,
  props<{ cliente: ClienteModel; direccion: DireccionModel }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_CLIENTE_ACTION]: actualizarCliente,

  [FETCH_CLIENTE_ACTION]: fetchCliente,
  [CREATE_CLIENTE_ACTION]: createCliente,
};
