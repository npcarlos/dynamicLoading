import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { SerialModel } from '~libraries/domain/common/serial';
import {
  ReducerSerialState,
  SerialesEquiposState,
  SerialesPlanesState,
  SerialesTecnologiasState,
} from '../core/serial.state';

export interface ApplicationState {
  serial: Map<string, any>;
}

const selectSerialFeature = (state: ApplicationState): ReducerSerialState => <ReducerSerialState>state.serial.toJS();

//
const selectSerialesPlanesData = (state: SerialesPlanesState): SerialModel[] => state.serialesPlanes;
const selectSerialesEquiposData = (state: SerialesEquiposState): SerialModel[] => state.serialesEquipos;
const selectSerialesTecnologiasData = (state: SerialesTecnologiasState): SerialModel[] => state.serialesTecnologias;

//
export const selectSerialesPlanes = createSelector(selectSerialFeature, selectSerialesPlanesData);
export const selectSerialesEquipos = createSelector(selectSerialFeature, selectSerialesEquiposData);
export const selectSerialesTecnologias = createSelector(selectSerialFeature, selectSerialesTecnologiasData);
