import { createAction, props, ActionCreator } from '@ngrx/store';

import { GenerosModel } from '~libraries/domain/common/generos';

import { ACTUALIZAR_GENEROS_ACTION, FETCH_GENEROS_ACTION } from '../core/generos.constants';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarGeneros = createAction(ACTUALIZAR_GENEROS_ACTION, props<{ generos: GenerosModel[] }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchGeneros = createAction(FETCH_GENEROS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_GENEROS_ACTION]: actualizarGeneros,

  [FETCH_GENEROS_ACTION]: fetchGeneros,
};
