import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';
import * as StorageMediumReducer from '~libraries/reducers/common/storage-medium/angular';

@Injectable({
  providedIn: 'root',
})
export class StorageMediumStoreService {
  constructor(private store: Store<StorageMediumReducer.ApplicationState>) {}

  // Funciones de selectores
  getReadStorageMedium(): Observable<ReadStorageMediumModel> {
    return notNullSelect(StorageMediumReducer.selectReadStorageMedium)(this.store);
  }

  getSearchStorageMedium(): Observable<SearchStorageMediumModel> {
    return notNullSelect(StorageMediumReducer.selectSearchStorageMedium)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarReadStorageMedium(id: string) {
    this.store.dispatch(StorageMediumReducer.fetchReadStorageMedium({ id }));
  }

  solicitarSearchStorageMedium() {
    this.store.dispatch(StorageMediumReducer.fetchSearchStorageMedium());
  }
}
