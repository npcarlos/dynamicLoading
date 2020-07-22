import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';
import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';

export interface RiesgoHDCState {
  hdc: RiesgohcModel;
}

export interface RiesgoListasState {
  listas: RiesgoListasModel;
}

export interface ReducerRiesgoState extends RiesgoHDCState, RiesgoListasState {}
