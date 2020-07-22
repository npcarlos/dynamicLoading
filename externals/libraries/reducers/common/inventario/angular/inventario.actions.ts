import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_INVENTARIO_ACTION,
  FETCH_INVENTARIO_ACTION,
  LIMPIAR_INVENTARIO_ACTION,
} from '../core/inventario.constants';
import { InventarioModel } from '~libraries/domain/common/inventario';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarInventario = createAction(
  ACTUALIZAR_INVENTARIO_ACTION,
  props<{ seriales: InventarioModel[] }>()
);
export const limpiarInventario = createAction(LIMPIAR_INVENTARIO_ACTION);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchInventario = createAction(FETCH_INVENTARIO_ACTION, props<{ seriales: string[] }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_INVENTARIO_ACTION]: actualizarInventario,
  [LIMPIAR_INVENTARIO_ACTION]: limpiarInventario,
  [FETCH_INVENTARIO_ACTION]: fetchInventario,
};
