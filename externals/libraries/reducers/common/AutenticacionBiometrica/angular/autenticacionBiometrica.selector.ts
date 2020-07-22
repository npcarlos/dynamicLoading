import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import {
  ReducerAutenticacionBiometricaState,
  ConexionBiometriaState,
  AutenticacionState,
  TokenAutenticacionState,
  SolicitarEjecucionAppState,
  ValidarAutenticacionImagenHuellaAppState,
  SolicitarTokenImagenHuellaAppState,
} from '../core/autenticacionBiometrica.state';
import {
  BiometriaModel,
  HuellaImagenModel,
  EjecucionNutModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';

export interface ApplicationState {
  autenticacionBiometrica: Map<string, any>;
}

const selectAutenticacionBiometricaFeature = (state: ApplicationState): ReducerAutenticacionBiometricaState =>
  <ReducerAutenticacionBiometricaState>state.autenticacionBiometrica.toJS();

//
const selectConexionBiometricoData = (state: ConexionBiometriaState): string => state.tokenConexion;
const selectTokenData = (state: TokenAutenticacionState): string => state.token;
const selectAutenticacionData = (state: AutenticacionState): BiometriaModel => state.biometria;
const selectSolicitarEjecucionAppData = (state: SolicitarEjecucionAppState): EjecucionNutModel => state.tokenNut;
const selectValidarImagenHuellaAppData = (state: ValidarAutenticacionImagenHuellaAppState): BiometriaImagenModel =>
  state.tokenAutenticacion;
const selectSolicitarTokenImagenHuellaAppData = (state: SolicitarTokenImagenHuellaAppState): HuellaImagenModel =>
  state.tokenImagen;

//
export const selectConexionBiometrico = createSelector(
  selectAutenticacionBiometricaFeature,
  selectConexionBiometricoData
);

export const selectTokenAutenticacion = createSelector(selectAutenticacionBiometricaFeature, selectTokenData);
export const selectAutenticacion = createSelector(selectAutenticacionBiometricaFeature, selectAutenticacionData);

export const selectSolicitarEjecucionApp = createSelector(
  selectAutenticacionBiometricaFeature,
  selectSolicitarEjecucionAppData
);
export const selectValidarImagenHuellaApp = createSelector(
  selectAutenticacionBiometricaFeature,
  selectValidarImagenHuellaAppData
);
export const selectSolicitarImagenHuellaApp = createSelector(
  selectAutenticacionBiometricaFeature,
  selectSolicitarTokenImagenHuellaAppData
);
