import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, flatMap } from 'rxjs/operators';
import { UbicaReconocerRestClientService } from '~modules/integration/ubicaReconocer/ubica-reconocer-rest-client.service';
import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';
import * as UbicaReconocerActions from './ubica-reconocer.actions';

@Injectable()
export class UbicaReconocerEffects {
  loadUbicaReconocer = createEffect(() =>
    this.actions$.pipe(
      ofType(UbicaReconocerActions.fetchUbicaReconocer),
      mergeMap((action) =>
        this.ubicaReconocerIntegrationService
          .fetchUbicacionReconocer(action.clienteModel, action.usuarioConsulta)
          .pipe(
            map((ubicaReconocer: UbicaReconocerModel) =>
              UbicaReconocerActions.actualizarUbicaReconocer({ ubicaReconocer })
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private ubicaReconocerIntegrationService: UbicaReconocerRestClientService) {}
}
