import { createAction, props, ActionCreator } from '@ngrx/store';
import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';

import {
  ACTUALIZAR_LEGALIZACION_ACTION,
  ACTUALIZAR_DOCUMENTO_ACTION,
  ACTUALIZAR_CONTRATO_ACTION,
  FETCH_LEGALIZACION_ACTION,
  FETCH_DOCUMENTO_ACTION,
  FETCH_CONTRATO_ACTION,
} from '../core/generacion-contrato.constants';
import { ClienteModel } from '~libraries/domain/common/cliente';

export const actualizarLegalizacion = createAction(
  ACTUALIZAR_LEGALIZACION_ACTION,
  props<{ legalizacion: GeneracionContratoModel }>()
);
export const actualizarDocumento = createAction(
  ACTUALIZAR_DOCUMENTO_ACTION,
  props<{ documento: GeneracionContratoModel }>()
);

export const actualizarContrato = createAction(
  ACTUALIZAR_CONTRATO_ACTION,
  props<{ contrato: GeneracionContratoModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchLegalizacion = createAction(FETCH_LEGALIZACION_ACTION, props<{ orderNumber: string }>());
export const fetchDocumento = createAction(
  FETCH_DOCUMENTO_ACTION,
  props<{ cliente: ClienteModel; nut: string; fingerNumber: string }>()
);
export const fetchContrato = createAction(
  FETCH_CONTRATO_ACTION,
  props<{ orderNumber: string; nut: string; fingerNumber: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_LEGALIZACION_ACTION]: actualizarLegalizacion,
  [ACTUALIZAR_DOCUMENTO_ACTION]: actualizarDocumento,
  [ACTUALIZAR_CONTRATO_ACTION]: actualizarContrato,
  [FETCH_LEGALIZACION_ACTION]: fetchLegalizacion,
  [FETCH_DOCUMENTO_ACTION]: fetchDocumento,
  [FETCH_CONTRATO_ACTION]: fetchContrato,
};
