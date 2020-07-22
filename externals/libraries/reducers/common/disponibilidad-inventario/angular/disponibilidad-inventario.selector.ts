import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import {
  ReducerDisponibilidadInventarioState,
  DisponibilidadInventarioState,
} from '../core/disponibilidad-inventario.state';
import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';

export interface ApplicationState {
  disponibilidadInventario: Map<string, any>;
}

const selectDisponibilidadInventarioFeature = (state: ApplicationState): ReducerDisponibilidadInventarioState =>
  state.disponibilidadInventario.toJS() as ReducerDisponibilidadInventarioState;

const selectDisponibilidadInventarioData = (state: DisponibilidadInventarioState): DisponibilidadInventarioModel[] =>
  state.disponibilidadInventarios;

export const selectDisponibilidadInventario = createSelector(
  selectDisponibilidadInventarioFeature,
  selectDisponibilidadInventarioData
);
