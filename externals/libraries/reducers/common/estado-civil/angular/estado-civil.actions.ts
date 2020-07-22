import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_ESTADOCIVIL_ACTION, FETCH_ESTADOCIVIL_ACTION } from '../core/estado-civil.constants';
import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarEstadoCivil = createAction(
  ACTUALIZAR_ESTADOCIVIL_ACTION,
  props<{ estadoCivil: EstadoCivilModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchEstadoCivil = createAction(FETCH_ESTADOCIVIL_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_ESTADOCIVIL_ACTION]: actualizarEstadoCivil,

  [FETCH_ESTADOCIVIL_ACTION]: fetchEstadoCivil,
};
