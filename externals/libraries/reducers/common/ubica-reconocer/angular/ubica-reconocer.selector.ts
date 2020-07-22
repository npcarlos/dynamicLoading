import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerUbicaReconocerState, UbicaReconocerState } from '../core/ubica-reconocer.state';
import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';

export interface ApplicationState {
  ubicaReconocer: Map<string, any>;
}

const selectUbicaReconocerFeature = (state: ApplicationState): ReducerUbicaReconocerState =>
  <ReducerUbicaReconocerState>state.ubicaReconocer.toJS();

const selectUbicaReconocerData = (state: UbicaReconocerState): UbicaReconocerModel => state.ubicaReconocer;

export const selectUbicaReconcer = createSelector(selectUbicaReconocerFeature, selectUbicaReconocerData);
