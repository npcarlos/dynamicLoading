import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { DepartamentosModel } from '~libraries/domain/common/departamentos';
import { DepartamentosIntegrationService } from '~modules/integration/departamentos';

import * as DepartamentosActions from './departamentos.actions';

@Injectable()
export class DepartamentosEffects {
  loadDepartamentos = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartamentosActions.fetchDepartamentos),
      mergeMap((action) =>
        this.departamentosIntegrationService
          .fetchDepartamentos()
          .pipe(
            map((departamentos: DepartamentosModel[]) =>
              DepartamentosActions.actualizarDepartamentos({ departamentos })
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private departamentosIntegrationService: DepartamentosIntegrationService) {}
}
