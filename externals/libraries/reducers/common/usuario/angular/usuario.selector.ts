import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as UsuarioReducer from './usuario.reducer';
import {
  ReducerUsuarioState,
  UsuarioState,

} from '../core/usuario.state';
import { UsuarioModel } from '~libraries/domain/common/usuario';

export interface ApplicationState {
  usuario: Map<string, any>;
}

const selectUsuarioFeature = (state: ApplicationState): ReducerUsuarioState =>
  <ReducerUsuarioState>state.usuario.toJS();

//
const selectUsuarioData = (state: UsuarioState): UsuarioModel => state.usuario;

//
export const selectUsuario = createSelector(selectUsuarioFeature, selectUsuarioData);
