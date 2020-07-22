import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { GenerosModel } from '~libraries/domain/common/generos';
import { ReducerGenerosState, GenerosState } from '../core/generos.state';

export interface ApplicationState {
  generos: Map<string, any>;
}

const selectGenerosFeature = (state: ApplicationState): ReducerGenerosState =>
  <ReducerGenerosState>state.generos.toJS();

//
const selectGenerosData = (state: GenerosState): GenerosModel[] => state.generos;

//
export const selectGeneros = createSelector(selectGenerosFeature, selectGenerosData);
