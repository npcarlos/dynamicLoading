import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_READ_STORAGE_MEDIUM_ACTION, FETCH_READ_STORAGE_MEDIUM_ACTION, ACTUALIZAR_SEARCH_STORAGE_MEDIUM_ACTION, FETCH_SEARCH_STORAGE_MEDIUM_ACTION } from '../core/storage-medium.constants';
import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';


// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarReadStorageMedium = createAction(ACTUALIZAR_READ_STORAGE_MEDIUM_ACTION, props<{ readStorageMedium: ReadStorageMediumModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchReadStorageMedium = createAction(
  FETCH_READ_STORAGE_MEDIUM_ACTION, props<{ id: string }>()
);

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarSearchStorageMedium = createAction(ACTUALIZAR_SEARCH_STORAGE_MEDIUM_ACTION, props<{ searchStorageMedium: SearchStorageMediumModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchSearchStorageMedium = createAction(FETCH_SEARCH_STORAGE_MEDIUM_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObjectStorageMedium: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_SEARCH_STORAGE_MEDIUM_ACTION]: actualizarSearchStorageMedium,

  [FETCH_SEARCH_STORAGE_MEDIUM_ACTION]: fetchSearchStorageMedium,

  [ACTUALIZAR_READ_STORAGE_MEDIUM_ACTION]: actualizarReadStorageMedium,

  [FETCH_READ_STORAGE_MEDIUM_ACTION]: fetchReadStorageMedium,
};
