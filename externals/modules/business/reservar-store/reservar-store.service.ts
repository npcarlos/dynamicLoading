import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';
import { ReservarModel } from '~libraries/domain/common/reservar';
import * as ReservarReducer from '~libraries/reducers/common/reservar/angular';

@Injectable({
  providedIn: 'root',
})
export class ReservarStoreService {
  constructor(private store: Store<ReservarReducer.ApplicationState>) {}

  // Funciones de selectores
  getReservar(): Observable<ReservarModel[]> {
    return notNullSelect(ReservarReducer.selectReservar)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarReservar(resourceType: string, resourceNumber: string) {
    this.store.dispatch(ReservarReducer.fetchReservar({ resourceType, resourceNumber }));
  }
}
