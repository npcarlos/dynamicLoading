import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, flatMap } from 'rxjs/operators';
// tslint:disable-next-line: max-line-length
import { DisponibilidadInventarioRestClientService } from '~modules/integration/disponibilidad-inventario/disponibilidad-inventario-rest-client.service';
import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';
import * as DisponibilidadInventarioActions from './disponibilidad-inventario.actions';
import { forkJoin } from 'rxjs';

@Injectable()
export class DisponibilidadInventarioEffects {
  loadDisponibilidadInventario = createEffect(() =>
    this.actions$.pipe(
      ofType(DisponibilidadInventarioActions.fetchDisponibilidadInventarios),
      mergeMap((action) =>
        forkJoin(
          action.stockTexto.map((stock: string) =>
            this.disponibilidadInventarioIntegrationService.fetchDisponibilidadInventario(stock)
          )
        ).pipe(
          map((disponibilidadInventarios: DisponibilidadInventarioModel[]) =>
            DisponibilidadInventarioActions.actualizarDisponibilidadInventarios({ disponibilidadInventarios })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private disponibilidadInventarioIntegrationService: DisponibilidadInventarioRestClientService
  ) {}
}
