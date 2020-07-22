import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_DEPARTAMENTOS_ACTION, FETCH_DEPARTAMENTOS_ACTION } from '../core/departamentos.constants';
import { DepartamentosModel } from '~libraries/domain/common/departamentos';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarDepartamentos = createAction(
  ACTUALIZAR_DEPARTAMENTOS_ACTION,
  props<{ departamentos: DepartamentosModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchDepartamentos = createAction(FETCH_DEPARTAMENTOS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_DEPARTAMENTOS_ACTION]: actualizarDepartamentos,

  [FETCH_DEPARTAMENTOS_ACTION]: fetchDepartamentos,
};
