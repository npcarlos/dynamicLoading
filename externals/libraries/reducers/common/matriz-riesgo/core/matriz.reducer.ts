import { ACTUALIZAR_MATRIZ_RIESGO_ACTION, ACTUALIZAR_MATRIZ_LISTAS_ACTION } from './matriz.constants';
import { Map } from 'immutable';
import { ReducerRiesgoState } from './matriz.state';
import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';
import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';

const initialStateValue: ReducerRiesgoState = {
  hdc: null,
  listas: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_MATRIZ_RIESGO_ACTION]: (store: Map<string, any>, action: { hdc: RiesgohcModel }) =>
    store.set('hdc', action.hdc),
  [ACTUALIZAR_MATRIZ_LISTAS_ACTION]: (store: Map<string, any>, action: { listas: RiesgoListasModel }) =>
    store.set('listas', action.listas),
};
