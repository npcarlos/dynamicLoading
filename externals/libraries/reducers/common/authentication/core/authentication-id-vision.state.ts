import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';

export interface AuthenticationState {
  authentication: AuthenticationModel;
}

export interface CheckByOtpState {
  checkByOTP: AuthenticationModel;
}

export interface SendPinOtpState {
  sendPinOtp: AuthenticationModel;
}

export interface ReducerAuthenticationState extends AuthenticationState, CheckByOtpState, SendPinOtpState {}
