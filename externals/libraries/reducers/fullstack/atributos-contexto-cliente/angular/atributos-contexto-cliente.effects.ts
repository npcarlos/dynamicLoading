import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { ContextAttributesRestClientService } from '~modules/integration/atributos-contexto-cliente';

import * as ContextAttributesClientActions from './atributos-contexto-cliente.actions';

@Injectable()
export class ContextAttributesClientEffects {
  loadAtributosContextoCliente = createEffect(() =>
    this.actions$.pipe(
      ofType(ContextAttributesClientActions.fetchAtributosContextoCliente),
      mergeMap((action) =>
        this.contextAttributesRestClientService
          .fetchAtributosContextoCliente(action.tipoDocumento, action.numeroIdentificacion)
          .pipe(
            map((cabecera: AtributosContextoClienteModel) =>
              ContextAttributesClientActions.actualizarAtributosContextoCliente({ cabecera })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private contextAttributesRestClientService: ContextAttributesRestClientService
  ) {}
}
