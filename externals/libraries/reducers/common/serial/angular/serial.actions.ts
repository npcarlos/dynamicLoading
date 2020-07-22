import { createAction, props, ActionCreator } from '@ngrx/store';

import { SerialModel } from '~libraries/domain/common/serial';
import {
  ACTUALIZAR_SERIALES_EQUIPOS_ACTION,
  ACTUALIZAR_SERIALES_TECNOLOGIAS_ACTION,
  ACTUALIZAR_SERIALES_PLANES_ACTION,
} from '../core/serial.constants';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarSerialesPlanes = createAction(
  ACTUALIZAR_SERIALES_PLANES_ACTION,
  props<{ serialesPlanes: SerialModel[] }>()
);

export const actualizarSerialesEquipos = createAction(
  ACTUALIZAR_SERIALES_EQUIPOS_ACTION,
  props<{ serialesEquipos: SerialModel[] }>()
);

export const actualizarSerialesTecnologias = createAction(
  ACTUALIZAR_SERIALES_TECNOLOGIAS_ACTION,
  props<{ serialesTecnologias: SerialModel[] }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_SERIALES_PLANES_ACTION]: actualizarSerialesPlanes,
  [ACTUALIZAR_SERIALES_EQUIPOS_ACTION]: actualizarSerialesEquipos,
  [ACTUALIZAR_SERIALES_TECNOLOGIAS_ACTION]: actualizarSerialesTecnologias,
};
