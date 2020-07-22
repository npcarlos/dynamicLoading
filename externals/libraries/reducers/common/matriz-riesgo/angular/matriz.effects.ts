import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';
import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';
import { RiesgoHCIntegrationService, RiesgoListasIntegrationService } from '~modules/integration/riesgoListas';

import * as MatrizActions from './matriz.actions';

@Injectable()
export class MatrizEffects {
  loadRiesgo = createEffect(() =>
    this.actions$.pipe(
      ofType(MatrizActions.fetchMatrizRiesgo),
      mergeMap((action) =>
        this.riesgoHCIntegrationService
          //.fetchRiesgoHC(action.cliente, action.usuario)
          .fetchRiesgoHCMock()
          .pipe(map((hdc: RiesgohcModel) => MatrizActions.actualizarMatrizRiesgo({ hdc })))
      )
    )
  );

  loadListas = createEffect(() =>
    this.actions$.pipe(
      ofType(MatrizActions.fetchMatrizListas),
      mergeMap((action) =>
        this.riesgoListasIntegrationService
          .fetchRiesgoListas(action.cliente, action.usuario)
          .pipe(map((listas: RiesgoListasModel) => MatrizActions.actualizarMatrizListas({ listas })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private riesgoHCIntegrationService: RiesgoHCIntegrationService,
    private riesgoListasIntegrationService: RiesgoListasIntegrationService
  ) {}
}
