import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';
import { EstadoCivilIntegrationService } from '~modules/integration/estado-civil';

import * as EstadoCivilActions from './estado-civil.actions';

@Injectable()
export class EstadoCivilEffects {
  loadEstadoCivil = createEffect(() =>
    this.actions$.pipe(
      ofType(EstadoCivilActions.fetchEstadoCivil),
      mergeMap(() =>
        this.estadoCivilIntegrationService
          .fetchEstadoCivil()
          .pipe(map((estadoCivil: EstadoCivilModel[]) => EstadoCivilActions.actualizarEstadoCivil({ estadoCivil })))
      )
    )
  );

  constructor(private actions$: Actions, private estadoCivilIntegrationService: EstadoCivilIntegrationService) {}
}
