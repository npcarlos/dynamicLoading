import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as ConveniosReducer from './convenios.reducer';
import { ReducerConveniosState, ConveniosState } from '../core/convenios.state';
import { ConvenioModel } from '~libraries/domain/common/convenios';

export interface ApplicationState {
  convenios: Map<string, any>;
}

const selectConveniosFeature = (state: ApplicationState): ReducerConveniosState =>
  <ReducerConveniosState>state.convenios.toJS();

//
const selectConveniosData = (state: ConveniosState): ConvenioModel[] => state.convenios;

//
export const selectConvenios = createSelector(selectConveniosFeature, selectConveniosData);
