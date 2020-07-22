import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_CONVENIOS_ACTION, FETCH_CONVENIOS_ACTION } from '../core/convenios.constants';
import { ConvenioModel } from '~libraries/domain/common/convenios';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarConvenios = createAction(ACTUALIZAR_CONVENIOS_ACTION, props<{ convenios: ConvenioModel[] }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchConvenios = createAction(FETCH_CONVENIOS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_CONVENIOS_ACTION]: actualizarConvenios,

  [FETCH_CONVENIOS_ACTION]: fetchConvenios,
};
