import { createAction, props, ActionCreator } from '@ngrx/store';

import { EventoModel } from '~libraries/domain/common/loader';

import * as LoaderConstants from '../core/loader.constants';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const registrarEvento = createAction(LoaderConstants.REGISTRAR_EVENTO_ACTION, props<{ evento: EventoModel }>());
export const eliminarEvento = createAction(LoaderConstants.ELIMINAR_EVENTO_ACTION, props<{ evento: EventoModel }>());
export const limpiarColaEventos = createAction(LoaderConstants.LIMPIAR_COLA_EVENTOS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [LoaderConstants.REGISTRAR_EVENTO_ACTION]: registrarEvento,
  [LoaderConstants.ELIMINAR_EVENTO_ACTION]: eliminarEvento,
  [LoaderConstants.LIMPIAR_COLA_EVENTOS_ACTION]: limpiarColaEventos,
};
