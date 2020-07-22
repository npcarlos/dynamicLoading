import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';
import { GrafologoIntegrationService } from '~modules/integration/grafologo/grafologo.service';

import * as GrafologoActions from './grafologo.actions';
import { GrafologoResponseIntegrationService } from '~modules/integration/grafologo/grafologo-response.service';

@Injectable()
export class GrafologoEffects {
  createGrafologo = createEffect(() =>
    this.actions$.pipe(
      ofType(GrafologoActions.createGrafologo),
      mergeMap((action) =>
        this.grafologoIntegrationService
          .createGrafologo(action.cliente, action.huellaImagen, action.file)
          .pipe(map((grafologo: GrafologoModel) => GrafologoActions.actualizarGrafologo({ grafologo })))
      )
    )
  );

  loadGrafologo = createEffect(() =>
    this.actions$.pipe(
      ofType(GrafologoActions.fetchGrafologo),
      mergeMap((action) =>
        this.grafologoResponseIntegrationService
          .fetchGrafologo(action.grafologo)
          .pipe(
            map((grafologoResponse: GrafologoResponseModel) =>
              GrafologoActions.actualizarGrafologoResponse({ grafologoResponse })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private grafologoIntegrationService: GrafologoIntegrationService,
    private grafologoResponseIntegrationService: GrafologoResponseIntegrationService
  ) {}
}
