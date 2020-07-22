import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { GenerosModel } from '~libraries/domain/common/generos';
import { GenerosIntegrationService } from '~modules/integration/generos';

import * as GenerosActions from './generos.actions';

@Injectable()
export class GenerosEffects {
  loadGeneros = createEffect(() =>
    this.actions$.pipe(
      ofType(GenerosActions.fetchGeneros),
      mergeMap(() =>
        this.generosIntegrationService
          .fetchGeneros()
          .pipe(map((generos: GenerosModel[]) => GenerosActions.actualizarGeneros({ generos })))
      )
    )
  );

  constructor(private actions$: Actions, private generosIntegrationService: GenerosIntegrationService) {}
}
