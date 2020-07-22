import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';
import {
  ReadStorageMediumIntegrationService,
  SearchStorageMediumIntegrationService,
} from '~modules/integration/storage-medium';

import * as StorageMediumActions from './storage-medium.actions';

@Injectable()
export class StorageMediumEffects {
  loadReadStorageMedium = createEffect(() =>
    this.actions$.pipe(
      ofType(StorageMediumActions.fetchReadStorageMedium),
      mergeMap((action) =>
        this.readStorageMediumIntegrationService
          .fetchReadStorageMedium(action.id)
          .pipe(
            map((readStorageMedium: ReadStorageMediumModel) =>
              StorageMediumActions.actualizarReadStorageMedium({ readStorageMedium })
            )
          )
      )
    )
  );

  loadSearchStorageMedium = createEffect(() =>
    this.actions$.pipe(
      ofType(StorageMediumActions.fetchSearchStorageMedium),
      mergeMap((action) =>
        this.searchStorageMediumIntegrationService
          .fetchSearchStorageMedium()
          .pipe(
            map((searchStorageMedium: SearchStorageMediumModel) =>
              StorageMediumActions.actualizarSearchStorageMedium({ searchStorageMedium })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private readStorageMediumIntegrationService: ReadStorageMediumIntegrationService,
    private searchStorageMediumIntegrationService: SearchStorageMediumIntegrationService
  ) {}
}
