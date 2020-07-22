import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_AUTHENTICATION_ID_VISION_ACTION,
  ACTUALIZAR_CHECK_BY_OTP_ACTION,
  ACTUALIZAR_SEND_PIN_OTP_ACTION,
  FETCH_AUTHENTICATION_ID_VISION_ACTION,
  FETCH_CHECK_BY_OTP_ACTION,
  FETCH_SEND_PIN_OTP_ACTION,
} from '../core/authentication-id-vision.constants';
import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import { DocumentoClienteModel } from '~libraries/domain/common/authenticationIdVision/authenticationCliente';

export const ActualizarAuthenticationIDVIsion = createAction(
  ACTUALIZAR_AUTHENTICATION_ID_VISION_ACTION,
  props<{ authentication: AuthenticationModel }>()
);

export const ActualizarCheckByOtp = createAction(
  ACTUALIZAR_CHECK_BY_OTP_ACTION,
  props<{ checkByOtp: AuthenticationModel }>()
);

export const ActualizarSendPinOtp = createAction(
  ACTUALIZAR_SEND_PIN_OTP_ACTION,
  props<{ sendPinOtp: AuthenticationModel }>()
);

export const fetchAuthenticationIDVIsion = createAction(
  FETCH_AUTHENTICATION_ID_VISION_ACTION,
  props<{ cliente: ClienteModel; direccion: DireccionModel; documentoCliente: DocumentoClienteModel }>()
);

export const fetchCheckByOtp = createAction(
  FETCH_CHECK_BY_OTP_ACTION,
  props<{ authenticationIDVision: AuthenticationModel; documentoCliente: DocumentoClienteModel }>()
);

export const fetchSendPinOtp = createAction(
  FETCH_SEND_PIN_OTP_ACTION,
  props<{ authenticationOTP: AuthenticationModel }>()
);

export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_AUTHENTICATION_ID_VISION_ACTION]: ActualizarAuthenticationIDVIsion,
  [ACTUALIZAR_CHECK_BY_OTP_ACTION]: ActualizarCheckByOtp,
  [ACTUALIZAR_SEND_PIN_OTP_ACTION]: ActualizarSendPinOtp,
  [FETCH_AUTHENTICATION_ID_VISION_ACTION]: fetchAuthenticationIDVIsion,
  [FETCH_CHECK_BY_OTP_ACTION]: fetchCheckByOtp,
  [FETCH_SEND_PIN_OTP_ACTION]: fetchSendPinOtp,
};
