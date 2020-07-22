import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { CiudadesModel, Municipios } from '~libraries/domain/common/ciudades';
import { CiudadesIntegrationService } from '~modules/integration/ciudades';

import * as CiudadesActions from './ciudades.actions';

@Injectable()
export class CiudadesEffects {
  loadCiudades = createEffect(() =>
    this.actions$.pipe(
      ofType(CiudadesActions.fetchCiudades),
      mergeMap((action) =>
        this.ciudadesIntegrationService
          .fetchCiudades(action.codigoDaneDepartamento)
          .pipe(map((ciudades: Municipios[]) => CiudadesActions.actualizarCiudades({ ciudades })))
      )
    )
  );

  constructor(private actions$: Actions, private ciudadesIntegrationService: CiudadesIntegrationService) {}
}
