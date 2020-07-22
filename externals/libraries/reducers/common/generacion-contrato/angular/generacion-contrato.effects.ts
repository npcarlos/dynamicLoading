import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { GeneracionContratoIntegrationService } from '~modules/integration/generacion-contrato';
import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';

import * as GeneracionContratoActions from './generacion-contrato.actions';

@Injectable()
export class GeneracionContratoEffects {
  loadLegalizacion = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneracionContratoActions.fetchLegalizacion),
      mergeMap((action) =>
        this.legalizacionIntegrationService
          .fetchLegalizacion(action.orderNumber)
          .pipe(
            map((legalizacion: GeneracionContratoModel) =>
              GeneracionContratoActions.actualizarLegalizacion({ legalizacion })
            )
          )
      )
    )
  );

  loadDocumento = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneracionContratoActions.fetchDocumento),
      mergeMap((action) =>
        this.documentoIntegrationService
          .fetchDocumento(action.cliente, action.nut, action.fingerNumber)
          .pipe(
            map((documento: GeneracionContratoModel) => GeneracionContratoActions.actualizarDocumento({ documento }))
          )
      )
    )
  );

  loadContrato = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneracionContratoActions.fetchContrato),
      mergeMap((action) =>
        this.contratoIntegrationService
          .fetchContrato(action.orderNumber, action.nut, action.fingerNumber)
          .pipe(map((contrato: GeneracionContratoModel) => GeneracionContratoActions.actualizarContrato({ contrato })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private legalizacionIntegrationService: GeneracionContratoIntegrationService,
    private documentoIntegrationService: GeneracionContratoIntegrationService,
    private contratoIntegrationService: GeneracionContratoIntegrationService
  ) {}
}
