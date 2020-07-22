import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_UBICA_RECONOCER_ACTION, FETCH_UBICA_RECONOCER_ACTION } from '../core/ubica-reconocer.constants';
import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';
import { ClienteModel } from '~libraries/domain/common/cliente';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarUbicaReconocer = createAction(
  ACTUALIZAR_UBICA_RECONOCER_ACTION,
  props<{ ubicaReconocer: UbicaReconocerModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchUbicaReconocer = createAction(
  FETCH_UBICA_RECONOCER_ACTION,
  props<{ clienteModel: ClienteModel; usuarioConsulta: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_UBICA_RECONOCER_ACTION]: actualizarUbicaReconocer,

  [FETCH_UBICA_RECONOCER_ACTION]: fetchUbicaReconocer,
};
