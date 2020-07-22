import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_VALIDACION_IMEI_ACTION, FETCH_VALIDACION_IMEI_ACTION } from '../core/validacion-imei.constants';
import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)

export const actualizarValidacionImei = createAction(
  ACTUALIZAR_VALIDACION_IMEI_ACTION,
  props<{ seriales: ValidacionImeiModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)

export const fetchValidacionImei = createAction(FETCH_VALIDACION_IMEI_ACTION, props<{ seriales: string[] }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_VALIDACION_IMEI_ACTION]: actualizarValidacionImei,
  [FETCH_VALIDACION_IMEI_ACTION]: fetchValidacionImei,
};
