import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerInventarioState, InventarioState } from '../core/inventario.state';
import { InventarioModel } from '~libraries/domain/common/inventario';

export interface ApplicationState {
  inventario: Map<string, any>;
}

const selectInventarioFeature = (state: ApplicationState): ReducerInventarioState =>
  <ReducerInventarioState>state.inventario.toJS();

//
const selectInventarioData = (state: InventarioState): InventarioModel[] => state.seriales;

//
export const selectInventario = createSelector(selectInventarioFeature, selectInventarioData);
