import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, flatMap } from 'rxjs/operators';

import { ClienteModel, ClienteCustomerIdTemplate } from '~libraries/domain/common/cliente';
import { ClienteIntegrationService } from '~modules/integration/cliente/cliente.service';
import { ClienteCreateIntegrationService } from '~modules/integration/cliente';

import * as ClienteActions from './cliente.actions';

@Injectable()
export class ClienteEffects {
  loadCliente = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.fetchCliente),
      mergeMap((action) =>
        this.clienteIntegrationService
          .fetchCliente(action.numeroCuentaCliente)
          .pipe(map((cliente: ClienteModel) => ClienteActions.actualizarCliente({ cliente })))
      )
    )
  );

  createCliente = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.createCliente),
      mergeMap((action) =>
        this.clienteCreateIntegrationService.createCliente(action.cliente, action.direccion).pipe(
          flatMap((clienteTemplate: ClienteCustomerIdTemplate) => {
            return this.clienteIntegrationService.fetchCliente(clienteTemplate.customerID);
          }),
          map((cliente: ClienteModel) => ClienteActions.actualizarCliente({ cliente }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private clienteIntegrationService: ClienteIntegrationService,
    private clienteCreateIntegrationService: ClienteCreateIntegrationService
  ) {}
}
