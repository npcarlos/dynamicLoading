import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  AGREGAR_DIRECCION_ACTION,
  FETCH_OBTENER_DIRECCION_POR_TOKEN_ACTION,
  FETCH_OBTENER_DIRECCION_POR_ID_ACTION,
} from '../core/direccion.constants';
import { DireccionModel } from '~libraries/domain/common/direccion';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const agregarDireccion = createAction(AGREGAR_DIRECCION_ACTION, props<{ direccion: DireccionModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchObtenerDireccionPorToken = createAction(
  FETCH_OBTENER_DIRECCION_POR_TOKEN_ACTION,
  props<{ token: string }>()
);
export const fetchObtenerDireccionPorId = createAction(FETCH_OBTENER_DIRECCION_POR_ID_ACTION, props<{ id: string }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [AGREGAR_DIRECCION_ACTION]: agregarDireccion,

  [FETCH_OBTENER_DIRECCION_POR_TOKEN_ACTION]: fetchObtenerDireccionPorToken,
  [FETCH_OBTENER_DIRECCION_POR_ID_ACTION]: fetchObtenerDireccionPorId,
};
