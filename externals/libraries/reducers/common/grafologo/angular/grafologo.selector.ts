import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as GrafologoReducer from './grafologo.reducer';
import { ReducerGrafologoState, GrafologoState, GrafologoResponseState } from '../core/grafologo.state';
import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';

export interface ApplicationState {
  grafologo: Map<string, any>;
}

const selectGrafologoFeature = (state: ApplicationState): ReducerGrafologoState =>
  <ReducerGrafologoState>state.grafologo.toJS();

//
const selectGrafologoData = (state: GrafologoState): GrafologoModel => state.grafologo;
const selectgetGrafologoData = (state: GrafologoResponseState): GrafologoResponseModel => state.grafologoResponse;

//
export const selectGrafologo = createSelector(selectGrafologoFeature, selectGrafologoData);
export const selectGrafologoResponse = createSelector(selectGrafologoFeature, selectgetGrafologoData);
