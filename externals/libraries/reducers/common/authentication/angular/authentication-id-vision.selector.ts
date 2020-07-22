import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as authenticationReducer from './authentication-id-vision.reducer';
import {
  ReducerAuthenticationState,
  AuthenticationState,
  CheckByOtpState,
  SendPinOtpState,
} from '../core/authentication-id-vision.state';
import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';

export interface ApplicationState {
  autenticacion: Map<string, any>;
}

const selectAuthenticationFeature = (state: ApplicationState): ReducerAuthenticationState =>
  <ReducerAuthenticationState>state.autenticacion.toJS();

//
const selectAuthenticationData = (state: AuthenticationState): AuthenticationModel => state.authentication;
const selectCheckByOtpData = (state: CheckByOtpState): AuthenticationModel => state.checkByOTP;
const selectSendPinOtpData = (state: SendPinOtpState): AuthenticationModel => state.sendPinOtp;

//
export const selectAuthentication = createSelector(selectAuthenticationFeature, selectAuthenticationData);
export const selectCheckByOt = createSelector(selectAuthenticationFeature, selectCheckByOtpData);
export const selectSendPinOtp = createSelector(selectAuthenticationFeature, selectSendPinOtpData);
