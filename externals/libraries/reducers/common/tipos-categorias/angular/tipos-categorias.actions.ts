import { createAction, props, ActionCreator } from '@ngrx/store';

import { ACTUALIZAR_TIPOS_CATEGORIAS_ACTION, FETCH_TIPOS_CATEGORIAS_ACTION } from '../core/tipos-categorias.constants';
import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarTiposCategorias = createAction(
  ACTUALIZAR_TIPOS_CATEGORIAS_ACTION,
  props<{ tiposCategorias: TiposCategoriasModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetcTiposCategorias = createAction(FETCH_TIPOS_CATEGORIAS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_TIPOS_CATEGORIAS_ACTION]: actualizarTiposCategorias,

  [FETCH_TIPOS_CATEGORIAS_ACTION]: fetcTiposCategorias,
};
