import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_CONEXION_BIOMETRICO_ACTION,
  ACTUALIZAR_AUTENTICACION_ACTION,
  ACTUALIZAR_TOKEN_AUTENTICACION_ACTION,
  ACTUALIZAR_EJECUCION_APP_ACTION,
  ACTUALIZAR_IMAGEN_HUELLA_APP_ACTION,
  ACTUALIZAR_TOKEN_IMAGEN_HUELLA_APP_ACTION,
  FETCH_CONEXION_BIOMETRICO_ACTION,
  FETCH_TOKEN_ACTION,
  FETCH_AUTENTICACION_ACTION,
  FETCH_EJECUCION_APP_ACTION,
  FETCH_IMAGEN_HUELLA_APP_ACTION,
  FETCH_TOKEN_IMAGEN_HUELLA_APP_ACTION,
} from '../core/autenticacionBiometrica.constants';
import {
  BiometriaModel,
  EjecucionNutModel,
  HuellaImagenModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { ClienteModel } from '~libraries/domain/common/cliente';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarConexionBiometrico = createAction(
  ACTUALIZAR_CONEXION_BIOMETRICO_ACTION,
  props<{ tokenConexion: string }>()
);

export const actualizarAutenticacion = createAction(
  ACTUALIZAR_AUTENTICACION_ACTION,
  props<{ biometria: BiometriaModel }>()
);

export const actualizaTokenAutenticacion = createAction(
  ACTUALIZAR_TOKEN_AUTENTICACION_ACTION,
  props<{ token: string }>()
);

export const actualizarEjecucionApp = createAction(
  ACTUALIZAR_EJECUCION_APP_ACTION,
  props<{ tokenNut: EjecucionNutModel }>()
);

export const actualizarImagenHuellaApp = createAction(
  ACTUALIZAR_IMAGEN_HUELLA_APP_ACTION,
  props<{ tokenAutenticacion: BiometriaImagenModel }>()
);

export const actualizarTokenImagenHuellaApp = createAction(
  ACTUALIZAR_TOKEN_IMAGEN_HUELLA_APP_ACTION,
  props<{ tokenImagen: HuellaImagenModel }>()
);
// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchConexionBiometrico = createAction(FETCH_CONEXION_BIOMETRICO_ACTION);
export const fetchToken = createAction(FETCH_TOKEN_ACTION);
export const fetchAutenticacion = createAction(
  FETCH_AUTENTICACION_ACTION,
  props<{ usuario: UsuarioModel; cliente: ClienteModel; onTokenGenerado: (token: string) => void }>()
);

export const fetchSolicitarEjecucionApp = createAction(FETCH_AUTENTICACION_ACTION, props<{ tokenNut: string }>());

export const fetchValidarImagenHuellaApp = createAction(
  FETCH_IMAGEN_HUELLA_APP_ACTION,
  props<{ tokenAutenticacion: string }>()
);

export const fetchSolicitarTokenImagenHuellaApp = createAction(
  FETCH_TOKEN_IMAGEN_HUELLA_APP_ACTION,
  props<{ tokenImagen: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_CONEXION_BIOMETRICO_ACTION]: actualizarConexionBiometrico,
  [ACTUALIZAR_AUTENTICACION_ACTION]: actualizarAutenticacion,
  [ACTUALIZAR_TOKEN_AUTENTICACION_ACTION]: actualizaTokenAutenticacion,
  [ACTUALIZAR_EJECUCION_APP_ACTION]: actualizarEjecucionApp,
  [ACTUALIZAR_IMAGEN_HUELLA_APP_ACTION]: actualizarImagenHuellaApp,
  [ACTUALIZAR_TOKEN_IMAGEN_HUELLA_APP_ACTION]: actualizarTokenImagenHuellaApp,

  [FETCH_CONEXION_BIOMETRICO_ACTION]: fetchConexionBiometrico,
  [FETCH_AUTENTICACION_ACTION]: fetchAutenticacion,
  [FETCH_EJECUCION_APP_ACTION]: fetchSolicitarEjecucionApp,
  [FETCH_IMAGEN_HUELLA_APP_ACTION]: fetchValidarImagenHuellaApp,
  [FETCH_TOKEN_IMAGEN_HUELLA_APP_ACTION]: fetchSolicitarTokenImagenHuellaApp,
};
