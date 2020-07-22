import {
  BiometriaModel,
  HuellaImagenModel,
  EjecucionNutModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';

export interface SolicitarTokenImagenHuellaAppState {
  tokenImagen: HuellaImagenModel;
}

export interface ValidarAutenticacionImagenHuellaAppState {
  tokenAutenticacion: BiometriaImagenModel;
}

export interface SolicitarEjecucionAppState {
  tokenNut: EjecucionNutModel;
}

export interface AutenticacionState {
  biometria: BiometriaModel;
}

export interface TokenAutenticacionState {
  token: string;
}

export interface ConexionBiometriaState {
  tokenConexion: string;
}

export interface ReducerAutenticacionBiometricaState
  extends ConexionBiometriaState,
    AutenticacionState,
    TokenAutenticacionState,
    SolicitarEjecucionAppState,
    ValidarAutenticacionImagenHuellaAppState,
    SolicitarTokenImagenHuellaAppState {}
