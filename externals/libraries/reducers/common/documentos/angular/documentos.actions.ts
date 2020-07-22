import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_DOCUMENTOS_ACTION, FETCH_DOCUMENTOS_ACTION } from '../core/documentos.constants';
import { DocumentoModel } from '~libraries/domain/common/documentos';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarDocumentos = createAction(
  ACTUALIZAR_DOCUMENTOS_ACTION,
  props<{ documentos: DocumentoModel[] }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchDocumentos = createAction(FETCH_DOCUMENTOS_ACTION);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_DOCUMENTOS_ACTION]: actualizarDocumentos,

  [FETCH_DOCUMENTOS_ACTION]: fetchDocumentos,
};
