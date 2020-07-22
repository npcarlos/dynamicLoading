import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { UsuarioModel } from '~libraries/domain/common/usuario';
import { UsuarioIntegrationService } from '~modules/integration/usuario/usuario.service';

import * as UsuarioActions from './usuario.actions';

@Injectable()
export class UsuarioEffects {
  loadUsuario = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuarioActions.fetchUsuario),
      mergeMap((action) =>
        this.usuarioIntegrationService
          .fetchUsuario(action.idUsuario)
          .pipe(map((usuario: UsuarioModel) => UsuarioActions.actualizarUsuario({ usuario })))
      )
    )
  );

  constructor(private actions$: Actions, private usuarioIntegrationService: UsuarioIntegrationService) {}
}
