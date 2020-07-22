import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import {
  ReducerAtributosContextoClienteState,
  AtributosContextoClienteState,
} from '../core/atributos-contexto-cliente.state';
import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';

export interface ApplicationState {
  atributosContextoCliente: Map<string, any>;
}

const selectAtributosContextoClienteFeature = (state: ApplicationState): ReducerAtributosContextoClienteState =>
  <ReducerAtributosContextoClienteState>state.atributosContextoCliente.toJS();

//
const selectAtributosContextoClienteData = (state: AtributosContextoClienteState): AtributosContextoClienteModel =>
  state.cabecera;

//
export const selectAtributosContextoCliente = createSelector(
  selectAtributosContextoClienteFeature,
  selectAtributosContextoClienteData
);
