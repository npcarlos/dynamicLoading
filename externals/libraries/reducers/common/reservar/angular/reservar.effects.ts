import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { ReservarModel } from '~libraries/domain/common/reservar';
import { ReservarIntegrationService } from '~modules/integration/reservar';

import * as ReservarActions from './reservar.actions';

@Injectable()
export class ReservarEffects {
  loadReservar = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservarActions.fetchReservar),
      mergeMap((action) =>
        this.reservarIntegrationService
          .fetchReservar(action.resourceType, action.resourceNumber)
          .pipe(map((reservar: ReservarModel) => ReservarActions.actualizarReservar({ reservar })))
      )
    )
  );

  constructor(private actions$: Actions, private reservarIntegrationService: ReservarIntegrationService) {}
}
