import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_MATRIZ_RIESGO_ACTION,
  ACTUALIZAR_MATRIZ_LISTAS_ACTION,
  FETCH_MATRIZ_RIESGO_ACTION,
  FETCH_MATRIZ_LISTAS_ACTION,
} from '../core/matriz.constants';
import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';
import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarMatrizRiesgo = createAction(ACTUALIZAR_MATRIZ_RIESGO_ACTION, props<{ hdc: RiesgohcModel }>());
export const actualizarMatrizListas = createAction(
  ACTUALIZAR_MATRIZ_LISTAS_ACTION,
  props<{ listas: RiesgoListasModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchMatrizRiesgo = createAction(
  FETCH_MATRIZ_RIESGO_ACTION,
  props<{ cliente: ClienteModel; usuario: UsuarioModel }>()
);
export const fetchMatrizListas = createAction(
  FETCH_MATRIZ_LISTAS_ACTION,
  props<{ cliente: ClienteModel; usuario: UsuarioModel }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_MATRIZ_RIESGO_ACTION]: actualizarMatrizRiesgo,
  [ACTUALIZAR_MATRIZ_LISTAS_ACTION]: actualizarMatrizListas,

  [FETCH_MATRIZ_RIESGO_ACTION]: fetchMatrizRiesgo,
  [FETCH_MATRIZ_LISTAS_ACTION]: fetchMatrizListas,
};
