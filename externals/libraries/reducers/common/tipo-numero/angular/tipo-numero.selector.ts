import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { ReducerTipoNumeroState, TipoNumeroState } from '../core/tipo-numero.state';
import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';

export interface ApplicationState {
  tipoNumero: Map<string, any>;
}

const selectTipoNumeroFeature = (state: ApplicationState): ReducerTipoNumeroState =>
  <ReducerTipoNumeroState>state.tipoNumero.toJS();

//
const selectTipoNumeroData = (state: TipoNumeroState): TipoNumeroModel[] => state.tipoNumero;

//
export const selectTipoNumero = createSelector(selectTipoNumeroFeature, selectTipoNumeroData);
