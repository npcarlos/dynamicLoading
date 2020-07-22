import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as EstadoCivilReducer from './estado-civil.reducer';
import { ReducerEstadoCivilState, EstadoCivilState } from '../core/estado-civil.state';
import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';

export interface ApplicationState {
  estadoCivil: Map<string, any>;
}

const selectEstadoCivilFeature = (state: ApplicationState): ReducerEstadoCivilState =>
  <ReducerEstadoCivilState>state.estadoCivil.toJS();

//
const selectEstadoCivilData = (state: EstadoCivilState): EstadoCivilModel[] => state.estadoCivil;

//
export const selectEstadoCivil = createSelector(selectEstadoCivilFeature, selectEstadoCivilData);
