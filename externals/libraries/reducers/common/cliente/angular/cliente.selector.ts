import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as ClienteReducer from './cliente.reducer';
import {
  ReducerClienteState,
  ClienteState,

} from '../core/cliente.state';
import { ClienteModel } from '~libraries/domain/common/cliente';

export interface ApplicationState {
  cliente: Map<string, any>;
}

const selectClienteFeature = (state: ApplicationState): ReducerClienteState =>
  <ReducerClienteState>state.cliente.toJS();

//
const selectClienteData = (state: ClienteState): ClienteModel => state.cliente;

//
export const selectCliente = createSelector(selectClienteFeature, selectClienteData);
