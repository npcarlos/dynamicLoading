import {
  ACTUALIZAR_AUTHENTICATION_ID_VISION_ACTION,
  ACTUALIZAR_CHECK_BY_OTP_ACTION,
  ACTUALIZAR_SEND_PIN_OTP_ACTION,
} from './authentication-id-vision.constants';
import { Map } from 'immutable';
import { ReducerAuthenticationState } from './authentication-id-vision.state';
import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';

const initialStateValue: ReducerAuthenticationState = {
  authentication: null,
  checkByOTP: null,
  sendPinOtp: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_AUTHENTICATION_ID_VISION_ACTION]: (
    store: Map<string, any>,
    action: { authentication: AuthenticationModel }
  ) => store.set('authentication', action.authentication),

  [ACTUALIZAR_CHECK_BY_OTP_ACTION]: (store: Map<string, any>, action: { checkOTP: AuthenticationModel }) =>
    store.set('checkOTP', action.checkOTP),

  [ACTUALIZAR_SEND_PIN_OTP_ACTION]: (store: Map<string, any>, action: { sendPinOtp: AuthenticationModel }) =>
    store.set('sendPinOtp', action.sendPinOtp),
};
