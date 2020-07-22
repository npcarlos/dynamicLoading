import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerRiesgoState, RiesgoListasState, RiesgoHDCState } from '../core/matriz.state';
import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';
import { RiesgohcModel as RiesgoHCModel } from '~libraries/domain/common/riesgoHC';

export interface ApplicationState {
  riesgo: Map<string, any>;
}

const selectListasFeature = (state: ApplicationState): ReducerRiesgoState => <ReducerRiesgoState>state.riesgo.toJS();

//
const selectListasData = (state: RiesgoListasState): RiesgoListasModel => state.listas;
const selectHcData = (state: RiesgoHDCState): RiesgoHCModel => state.hdc;

//
export const selectListas = createSelector(selectListasFeature, selectListasData);
export const selectHc = createSelector(selectListasFeature, selectHcData);
