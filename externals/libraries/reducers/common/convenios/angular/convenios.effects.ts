import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { ConvenioModel } from '~libraries/domain/common/convenios';
import { ConveniosIntegrationService } from '~modules/integration/convenios';

import * as ConveniosActions from './convenios.actions';

@Injectable()
export class ConveniosEffects {
  loadConvenios = createEffect(() =>
    this.actions$.pipe(
      ofType(ConveniosActions.fetchConvenios),
      mergeMap((action) =>
        this.conveniosIntegrationService
          .fetchConvenios()
          .pipe(map((convenios: ConvenioModel[]) => ConveniosActions.actualizarConvenios({ convenios })))
      )
    )
  );

  constructor(private actions$: Actions, private conveniosIntegrationService: ConveniosIntegrationService) {}
}
