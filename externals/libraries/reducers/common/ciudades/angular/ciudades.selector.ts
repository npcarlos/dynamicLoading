import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as CiudadesReducer from './ciudades.reducer';
import { ReducerCiudadesState, CiudadesState } from '../core/ciudades.state';
import { CiudadesModel } from '~libraries/domain/common/ciudades';

export interface ApplicationState {
  ciudades: Map<string, any>;
}

const selectCiudadesFeature = (state: ApplicationState): ReducerCiudadesState =>
  <ReducerCiudadesState>state.ciudades.toJS();

//
const selectCiudadesData = (state: CiudadesState): CiudadesModel[] => state.ciudades;

//
export const selectCiudades = createSelector(selectCiudadesFeature, selectCiudadesData);
