import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ValidacionImeiIntegrationService } from '~modules/integration/validacion-imei/validacion-imei.service';
import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';

import * as ValidacionImeiActions from './validacion-imei.actions';
import { forkJoin } from 'rxjs';

@Injectable()
export class ValidacionImeiEffects {
  loadValidacionImei = createEffect(() =>
    this.actions$.pipe(
      ofType(ValidacionImeiActions.fetchValidacionImei),
      mergeMap((action) =>
        forkJoin(
          action.seriales.map((serial: string) => this.ValidacionImeiIntegrationService.validarImei(serial))
        ).pipe(map((seriales: ValidacionImeiModel[]) => ValidacionImeiActions.actualizarValidacionImei({ seriales })))
      )
    )
  );

  constructor(private actions$: Actions, private ValidacionImeiIntegrationService: ValidacionImeiIntegrationService) {}
}
