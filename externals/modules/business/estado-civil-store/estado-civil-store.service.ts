import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';
import * as EstadoCivilReducer from '~libraries/reducers/common/estado-civil/angular';

@Injectable({
  providedIn: 'root',
})
export class EstadoCivilStoreService {
  constructor(private store: Store<EstadoCivilReducer.ApplicationState>) {}

  // Funciones de selectores
  getEstadoCivil(): Observable<EstadoCivilModel[]> {
    return notNullSelect(EstadoCivilReducer.selectEstadoCivil)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarEstadoCivil() {
    this.store.dispatch(EstadoCivilReducer.fetchEstadoCivil());
  }
}
