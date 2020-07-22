import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as NumerosReducer from './numeros.reducer';
import { NumeroModel } from '~libraries/domain/common/numeros';
import { ReducerNumerosState, NumerosState } from '../core/numeros.state';

export interface ApplicationState {
  numeros: Map<string, any>;
}

const selectNumerosFeature = (state: ApplicationState): ReducerNumerosState =>
  <ReducerNumerosState>state.numeros.toJS();

//
const selectNumerosData = (state: NumerosState): NumeroModel[] => state.numeros;

//
export const selectNumeros = createSelector(selectNumerosFeature, selectNumerosData);
