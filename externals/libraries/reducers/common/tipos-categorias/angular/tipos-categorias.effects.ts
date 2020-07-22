import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import * as TiposCategoriasActions from './tipos-categorias.actions';
import { TiposCategoriasIntegrationService } from '~modules/integration/tipos-categorias/tipos-categorias.service';
import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';

@Injectable()
export class TiposCategoriasEffects {
  loadTiposPlanes = createEffect(() =>
    this.actions$.pipe(
      ofType(TiposCategoriasActions.fetcTiposCategorias),
      mergeMap(() =>
        this.tiposCategoriasIntegrationService
          .fetchTiposCategorias()
          .pipe(
            map((tiposCategorias: TiposCategoriasModel[]) =>
              TiposCategoriasActions.actualizarTiposCategorias({ tiposCategorias })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private tiposCategoriasIntegrationService: TiposCategoriasIntegrationService
  ) {}
}
