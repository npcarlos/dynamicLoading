import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_RESERVAR_ACTION, FETCH_RESERVAR_ACTION } from '../core/reservar.constants';
import { ReservarModel } from '~libraries/domain/common/reservar';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarReservar = createAction(ACTUALIZAR_RESERVAR_ACTION, props<{ reservar: ReservarModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchReservar = createAction(
  FETCH_RESERVAR_ACTION,
  props<{ resourceType: string; resourceNumber: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_RESERVAR_ACTION]: actualizarReservar,

  [FETCH_RESERVAR_ACTION]: fetchReservar,
};
