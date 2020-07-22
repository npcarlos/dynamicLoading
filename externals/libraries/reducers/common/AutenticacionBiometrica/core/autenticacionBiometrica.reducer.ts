import {
  ACTUALIZAR_CONEXION_BIOMETRICO_ACTION,
  ACTUALIZAR_AUTENTICACION_ACTION,
  ACTUALIZAR_TOKEN_AUTENTICACION_ACTION,
  ACTUALIZAR_EJECUCION_APP_ACTION,
  ACTUALIZAR_IMAGEN_HUELLA_APP_ACTION,
  ACTUALIZAR_TOKEN_IMAGEN_HUELLA_APP_ACTION,
} from './autenticacionBiometrica.constants';
import { Map } from 'immutable';
import { ReducerAutenticacionBiometricaState } from './autenticacionBiometrica.state';
import {
  BiometriaModel,
  EjecucionNutModel,
  HuellaImagenModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';

const initialStateValue: ReducerAutenticacionBiometricaState = {
  tokenConexion: null,
  token: null,
  biometria: null,
  tokenNut: null,
  tokenAutenticacion: null,
  tokenImagen: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_CONEXION_BIOMETRICO_ACTION]: (store: Map<string, any>, action: { tokenConexion: string }) =>
    store.set('tokenConexion', action.tokenConexion),
  [ACTUALIZAR_TOKEN_AUTENTICACION_ACTION]: (store: Map<string, any>, action: { token: string }) =>
    store.set('token', action.token),
  [ACTUALIZAR_AUTENTICACION_ACTION]: (store: Map<string, any>, action: { biometria: BiometriaModel }) =>
    store.set('biometria', action.biometria),
  [ACTUALIZAR_EJECUCION_APP_ACTION]: (store: Map<string, any>, action: { tokenNut: EjecucionNutModel }) =>
    store.set('tokenNut', action.tokenNut),
  [ACTUALIZAR_IMAGEN_HUELLA_APP_ACTION]: (
    store: Map<string, any>,
    action: { tokenAutenticacion: BiometriaImagenModel }
  ) => store.set('tokenAutenticacion', action.tokenAutenticacion),
  [ACTUALIZAR_TOKEN_IMAGEN_HUELLA_APP_ACTION]: (store: Map<string, any>, action: { tokenImagen: HuellaImagenModel }) =>
    store.set('tokenImagen', action.tokenImagen),
};
