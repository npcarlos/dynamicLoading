import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as ReservarReducer from './reservar.reducer';
import { ReservarModel } from '~libraries/domain/common/reservar';
import { ReducerReservarState, ReservarState } from '../core/reservar.state';

export interface ApplicationState {
  reservar: Map<string, any>;
}

const selectReservarFeature = (state: ApplicationState): ReducerReservarState =>
  <ReducerReservarState>state.reservar.toJS();

//
const selectReservarData = (state: ReservarState): ReservarModel[] => state.reservar;

//
export const selectReservar = createSelector(selectReservarFeature, selectReservarData);
