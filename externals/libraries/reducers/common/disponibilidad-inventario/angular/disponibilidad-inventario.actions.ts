import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  FETCH_DISP_INVENTARIO_ACTION,
  ACTUALIZAR_DISP_INVENTARIO_ACTION,
} from '../core/disponibilidad-inventario.constants';
import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarDisponibilidadInventarios = createAction(
  ACTUALIZAR_DISP_INVENTARIO_ACTION,
  props<{ disponibilidadInventarios: DisponibilidadInventarioModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchDisponibilidadInventarios = createAction(
  FETCH_DISP_INVENTARIO_ACTION,
  props<{ stockTexto: string[] }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_DISP_INVENTARIO_ACTION]: actualizarDisponibilidadInventarios,
  [FETCH_DISP_INVENTARIO_ACTION]: fetchDisponibilidadInventarios,
};
