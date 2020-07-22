import { Map } from 'immutable';

import {
  ACTUALIZAR_SERIALES_EQUIPOS_ACTION,
  ACTUALIZAR_SERIALES_PLANES_ACTION,
  ACTUALIZAR_SERIALES_TECNOLOGIAS_ACTION,
} from './serial.constants';
import { SerialModel } from '~libraries/domain/common/serial';
import { ReducerSerialState } from './serial.state';

const initialStateValue: ReducerSerialState = {
  serialesPlanes: [],
  serialesEquipos: [],
  serialesTecnologias: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_SERIALES_PLANES_ACTION]: (store: Map<string, any>, action: { serialesPlanes: SerialModel[] }) =>
    store.set('serialesPlanes', action.serialesPlanes),
  [ACTUALIZAR_SERIALES_EQUIPOS_ACTION]: (store: Map<string, any>, action: { serialesEquipos: SerialModel[] }) =>
    store.set('serialesEquipos', action.serialesEquipos),
  [ACTUALIZAR_SERIALES_TECNOLOGIAS_ACTION]: (store: Map<string, any>, action: { serialesTecnologias: SerialModel[] }) =>
    store.set('serialesTecnologias', action.serialesTecnologias),
};
