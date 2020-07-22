import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_GRAFOLOGO_ACTION,
  ACTUALIZAR_GRAFOLOGO_RESPONSE_ACTION,
  CREATE_GRAFOLOGO_ACTION,
  FETCH_GRAFOLOGO_ACTION,
} from '../core/grafologo.constants';
import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { HuellaImagenModel } from '~libraries/domain/common/autenticacionBiometrica';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarGrafologo = createAction(ACTUALIZAR_GRAFOLOGO_ACTION, props<{ grafologo: GrafologoModel }>());
export const actualizarGrafologoResponse = createAction(
  ACTUALIZAR_GRAFOLOGO_ACTION,
  props<{ grafologoResponse: GrafologoResponseModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)

export const createGrafologo = createAction(
  CREATE_GRAFOLOGO_ACTION,
  props<{ cliente: ClienteModel; huellaImagen: HuellaImagenModel; file: any }>()
);
export const fetchGrafologo = createAction(FETCH_GRAFOLOGO_ACTION, props<{ grafologo: GrafologoModel }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_GRAFOLOGO_ACTION]: actualizarGrafologo,
  [ACTUALIZAR_GRAFOLOGO_RESPONSE_ACTION]: actualizarGrafologoResponse,

  [CREATE_GRAFOLOGO_ACTION]: createGrafologo,
  [FETCH_GRAFOLOGO_ACTION]: fetchGrafologo,
};
