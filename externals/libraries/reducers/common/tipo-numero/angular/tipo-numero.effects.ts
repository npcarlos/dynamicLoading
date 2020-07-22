import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';
import { TipoNumeroIntegrationService } from '~modules/integration/tipo-numero';

import * as TipoNumeroActions from './tipo-numero.actions';

@Injectable()
export class TipoNumeroEffects {
  loadTipoNumero = createEffect(() =>
    this.actions$.pipe(
      ofType(TipoNumeroActions.fetchTipoNumero),
      mergeMap(() =>
        this.tipoNumeroIntegrationService
          .fetchTipoNumero()
          .pipe(map((tipoNumero: TipoNumeroModel[]) => TipoNumeroActions.actualizarTipoNumero({ tipoNumero })))
      )
    )
  );

  constructor(private actions$: Actions, private tipoNumeroIntegrationService: TipoNumeroIntegrationService) {}
}
