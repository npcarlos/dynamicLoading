import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { PedidoModel } from '~libraries/domain/common/pedido';
import { PedidoIntegrationService } from '~modules/integration/pedido';

import * as PedidoActions from './pedido.actions';

@Injectable()
export class PedidoEffects {
  loadPedido = createEffect(() =>
    this.actions$.pipe(
      ofType(PedidoActions.fetchPedido),
      mergeMap((action) =>
        this.pedidoIntegrationService
          .fetchPedido(action.shoppingCart, action.cliente, action.usuario, action.direccion)
          .pipe(map((pedido: PedidoModel) => PedidoActions.actualizarPedido({ pedido })))
      )
    )
  );

  constructor(private actions$: Actions, private pedidoIntegrationService: PedidoIntegrationService) {}
}
