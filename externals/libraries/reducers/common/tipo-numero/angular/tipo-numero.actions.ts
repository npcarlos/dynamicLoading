import { createAction, props, ActionCreator } from '@ngrx/store';
import { FETCH_TIPO_NUMERO_ACTION, ACTUALIZAR_TIPO_NUMERO_ACTION } from '../core/tipo-numero.constants';
import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarTipoNumero = createAction(
  ACTUALIZAR_TIPO_NUMERO_ACTION,
  props<{ tipoNumero: TipoNumeroModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchTipoNumero = createAction(FETCH_TIPO_NUMERO_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_TIPO_NUMERO_ACTION]: actualizarTipoNumero,

  [FETCH_TIPO_NUMERO_ACTION]: fetchTipoNumero,
};
