import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import * as NumerosActions from './numeros.actions';
import { NumerosIntegrationService } from '~modules/integration/numeros/numeros.service';
import { NumeroModel } from '~libraries/domain/common/numeros';

@Injectable()
export class NumerosEffects {
  loadNumeros = createEffect(() =>
    this.actions$.pipe(
      ofType(NumerosActions.fetchNumeros),
      mergeMap((action) =>
        this.numerosIntegrationService
          .fetchNumeros()
          .pipe(map((numeros: NumeroModel[]) => NumerosActions.actualizarNumeros({ numeros })))
      )
    )
  );

  constructor(private actions$: Actions, private numerosIntegrationService: NumerosIntegrationService) {}
}
