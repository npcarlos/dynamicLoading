import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { AutenticacionBiometricaIntegrationService } from '~modules/integration/autenticacionBiometrica/autenticacionBiometrica.service';
import {
  BiometriaModel,
  EjecucionNutModel,
  HuellaImagenModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';

import * as AutenticacionBiometricaActions from './autenticacionBiometrica.actions';

@Injectable()
export class AutenticacionBiometricaEffects {
  loadConexion = createEffect(() =>
    this.actions$.pipe(
      ofType(AutenticacionBiometricaActions.fetchConexionBiometrico),
      mergeMap((action) =>
        this.AutenticacionBiometricaIntegrationService.validarConexionBiometrico().pipe(
          map((tokenConexion: string) => AutenticacionBiometricaActions.actualizarConexionBiometrico({ tokenConexion }))
        )
      )
    )
  );

  loadAutenticacion = createEffect(() =>
    this.actions$.pipe(
      ofType(AutenticacionBiometricaActions.fetchAutenticacion),
      mergeMap((action) =>
        this.AutenticacionBiometricaIntegrationService.validarAutenticacion(
          action.usuario,
          action.cliente,
          action.onTokenGenerado
        ).pipe(
          map((biometria: BiometriaModel) => AutenticacionBiometricaActions.actualizarAutenticacion({ biometria }))
        )
      )
    )
  );

  loadEjecucionAutenticacionApp = createEffect(() =>
    this.actions$.pipe(
      ofType(AutenticacionBiometricaActions.fetchSolicitarEjecucionApp),
      mergeMap((action) =>
        this.AutenticacionBiometricaIntegrationService.solicitarEjecucionAutenticacionApp(action.tokenNut).pipe(
          map((tokenNut: EjecucionNutModel) => AutenticacionBiometricaActions.actualizarEjecucionApp({ tokenNut }))
        )
      )
    )
  );

  loadImagenHuellaApp = createEffect(() =>
    this.actions$.pipe(
      ofType(AutenticacionBiometricaActions.fetchValidarImagenHuellaApp),
      mergeMap((action) =>
        this.AutenticacionBiometricaIntegrationService.validarAutenticacionImagenHuellaApp(
          action.tokenAutenticacion
        ).pipe(
          map((tokenAutenticacion: BiometriaImagenModel) =>
            AutenticacionBiometricaActions.actualizarImagenHuellaApp({ tokenAutenticacion })
          )
        )
      )
    )
  );

  loadTokenImagenHuellaApp = createEffect(() =>
    this.actions$.pipe(
      ofType(AutenticacionBiometricaActions.fetchSolicitarTokenImagenHuellaApp),
      mergeMap((action) =>
        this.AutenticacionBiometricaIntegrationService.solicitarTokenImagenHuellaApp(action.tokenImagen).pipe(
          map((tokenImagen: HuellaImagenModel) =>
            AutenticacionBiometricaActions.actualizarTokenImagenHuellaApp({ tokenImagen })
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private AutenticacionBiometricaIntegrationService: AutenticacionBiometricaIntegrationService
  ) {}
}
