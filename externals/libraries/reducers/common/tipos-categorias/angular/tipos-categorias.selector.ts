import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { ReducerTiposCategoriasState, TiposCategoriasState } from '../core/tipos-categorias.state';
import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';

export interface ApplicationState {
  tipoPlan: Map<string, any>;
}

const selectTiposCategoriasFeature = (state: ApplicationState): ReducerTiposCategoriasState =>
  <ReducerTiposCategoriasState>state.tipoPlan.toJS();

//
const selectTiposCategoriaData = (state: TiposCategoriasState): TiposCategoriasModel[] => state.tiposCategoria;

//
export const selectTiposCategorias = createSelector(selectTiposCategoriasFeature, selectTiposCategoriaData);
