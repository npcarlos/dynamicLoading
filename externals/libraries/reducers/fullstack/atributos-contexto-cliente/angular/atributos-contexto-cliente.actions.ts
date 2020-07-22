import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION,
  FETCH_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION,
} from '../core/atributos-contexto-cliente.constants';
import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarAtributosContextoCliente = createAction(
  ACTUALIZAR_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION,
  props<{ cabecera: AtributosContextoClienteModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchAtributosContextoCliente = createAction(
  FETCH_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION,
  props<{ tipoDocumento: string; numeroIdentificacion: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION]: actualizarAtributosContextoCliente,
  [FETCH_ATRIBUTOS_CONTEXTO_CLIENTE_ACTION]: fetchAtributosContextoCliente,
};
