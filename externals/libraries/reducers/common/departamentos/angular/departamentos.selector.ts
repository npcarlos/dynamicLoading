import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as DepartamentosReducer from './departamentos.reducer';
import { ReducerDepartamentosState, DepartamentosState } from '../core/departamentos.state';
import { DepartamentosModel } from '~libraries/domain/common/departamentos';

export interface ApplicationState {
  departamentos: Map<string, any>;
}

const selectDepartamentosFeature = (state: ApplicationState): ReducerDepartamentosState =>
  <ReducerDepartamentosState>state.departamentos.toJS();

//
const selectDepartamentosData = (state: DepartamentosState): DepartamentosModel[] => state.departamentos;

//
export const selectDepartamentos = createSelector(selectDepartamentosFeature, selectDepartamentosData);
