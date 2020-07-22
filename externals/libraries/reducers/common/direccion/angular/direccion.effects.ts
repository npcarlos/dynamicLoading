import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, flatMap } from 'rxjs/operators';
import { DireccionIntegrationService } from '~modules/integration/direccion/direccion.service';
import { DireccionModel, DireccionIdTemplate } from '~libraries/domain/common/direccion';

import * as DireccionActions from './direccion.actions';

@Injectable()
export class DireccionEffects {
  loadObtenerDireccionPorToken = createEffect(() =>
    this.actions$.pipe(
      ofType(DireccionActions.fetchObtenerDireccionPorToken),
      mergeMap((action) =>
        this.direccionIntegrationService
          .findDirByToken(action.token)
          .pipe(
            flatMap((direccionIdTemplate: DireccionIdTemplate) =>
              this.direccionIntegrationService.consultaDireccion(direccionIdTemplate)
            )
          )
          .pipe(
            map((direccion: DireccionModel) => {
              direccion.esNueva = true;
              return DireccionActions.agregarDireccion({ direccion });
            })
          )
      )
    )
  );

  loadObtenerDireccionPorId = createEffect(() =>
    this.actions$.pipe(
      ofType(DireccionActions.fetchObtenerDireccionPorId),
      mergeMap((action) =>
        this.direccionIntegrationService
          .consultaDireccion({
            direccionDetalladaId: action.id,
          })
          .pipe(map((direccion: DireccionModel) => DireccionActions.agregarDireccion({ direccion })))
      )
    )
  );

  constructor(private actions$: Actions, private direccionIntegrationService: DireccionIntegrationService) {}
}
