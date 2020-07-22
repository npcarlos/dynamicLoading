import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { InventarioModel } from '~libraries/domain/common/inventario';
import { InventarioIntegrationService } from '~modules/integration/inventario';

import * as InventarioActions from './inventario.actions';
import { forkJoin } from 'rxjs';

@Injectable()
export class InventarioEffects {
  loadInventario = createEffect(() =>
    this.actions$.pipe(
      ofType(InventarioActions.fetchInventario),
      mergeMap((action) =>
        forkJoin(
          action.seriales.map((serial: string) => this.inventarioIntegrationService.fetchInventario(serial))
        ).pipe(map((seriales: InventarioModel[]) => InventarioActions.actualizarInventario({ seriales })))
      )
    )
  );

  constructor(private actions$: Actions, private inventarioIntegrationService: InventarioIntegrationService) {}
}
