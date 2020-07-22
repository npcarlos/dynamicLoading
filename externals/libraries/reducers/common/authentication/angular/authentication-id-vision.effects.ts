import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, flatMap } from 'rxjs/operators';
import { AuthenticationRestService } from '~modules/integration/authentication-id-vision/authentication-id-vision.service';
import { AuthenticationByOTPService } from '~modules/integration/authentication-id-vision/authentication-otp.service';
import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';
import * as authenticationActions from './authentication-id-vision.actions';

@Injectable()
export class authenticationEffects {
  authenticationIdVision = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.fetchAuthenticationIDVIsion),
      mergeMap((action) =>
        this.authenticationIDVisionService
          .authentication(action.cliente, action.direccion, action.documentoCliente)
          .pipe(
            map((authentication: AuthenticationModel) =>
              authenticationActions.ActualizarAuthenticationIDVIsion({ authentication })
            )
          )
      )
    )
  );

  checkByOtp = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.fetchCheckByOtp),
      mergeMap((action) =>
        this.authenticationByOTPService
          .checkByOTP(action.authenticationIDVision, action.documentoCliente)
          .pipe(map((checkByOtp: AuthenticationModel) => authenticationActions.ActualizarCheckByOtp({ checkByOtp })))
      )
    )
  );

  sendPinOtp = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.fetchSendPinOtp),
      mergeMap((action) =>
        this.authenticationSendOTPService
          .sendPinForCheckOtp(action.authenticationOTP)
          .pipe(map((sendPinOtp: AuthenticationModel) => authenticationActions.ActualizarSendPinOtp({ sendPinOtp })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authenticationIDVisionService: AuthenticationRestService,
    private authenticationByOTPService: AuthenticationByOTPService,
    private authenticationSendOTPService: AuthenticationByOTPService
  ) {}
}
