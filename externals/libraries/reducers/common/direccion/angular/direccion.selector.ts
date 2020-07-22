import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerDireccionState, DireccionState } from '../core/direccion.state';
import { DireccionModel } from '~libraries/domain/common/direccion';

export interface ApplicationState {
  direccion: Map<string, any>;
}

const selectDireccionFeature = (state: ApplicationState): ReducerDireccionState =>
  <ReducerDireccionState>state.direccion.toJS();

//
const selectDireccionData = (state: DireccionState): DireccionModel[] => state.direcciones;

//
export const selectDirecciones = createSelector(selectDireccionFeature, selectDireccionData);
