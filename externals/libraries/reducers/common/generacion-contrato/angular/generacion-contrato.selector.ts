import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';

import {
  ReducerGeneracionContratoState,
  LegalizacionState,
  DocumentoState,
  ContratoState,
} from '../core/generacion-contrato.state';

export interface ApplicationState {
  generacionContrato: Map<string, any>;
}

const selectGeneracionContratoFeature = (state: ApplicationState): ReducerGeneracionContratoState =>
  <ReducerGeneracionContratoState>state.generacionContrato.toJS();

//
const selectLegalizacionData = (state: LegalizacionState): GeneracionContratoModel => state.legalizacion;
const selectDocumentoData = (state: DocumentoState): GeneracionContratoModel => state.documento;
const selectContratoData = (state: ContratoState): GeneracionContratoModel => state.contrato;

//
export const selectLegalizacion = createSelector(selectGeneracionContratoFeature, selectLegalizacionData);
export const selectDocumento = createSelector(selectGeneracionContratoFeature, selectDocumentoData);
export const selectContrato = createSelector(selectGeneracionContratoFeature, selectContratoData);
