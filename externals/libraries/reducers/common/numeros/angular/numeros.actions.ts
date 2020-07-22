import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_NUMEROS_ACTION, FETCH_NUMEROS_ACTION } from '../core/numeros.constants';
import { NumeroModel } from '~libraries/domain/common/numeros';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarNumeros = createAction(ACTUALIZAR_NUMEROS_ACTION, props<{ numeros: NumeroModel[] }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchNumeros = createAction(FETCH_NUMEROS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_NUMEROS_ACTION]: actualizarNumeros,

  [FETCH_NUMEROS_ACTION]: fetchNumeros,
};
