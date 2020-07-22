import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { GenerosModel } from '~libraries/domain/common/generos';
import * as GenerosReducer from '~libraries/reducers/common/generos/angular';

@Injectable({
  providedIn: 'root',
})
export class GenerosStoreService {
  constructor(private store: Store<GenerosReducer.ApplicationState>) {}

  // Funciones de selectores
  getGeneros(): Observable<GenerosModel[]> {
    return notNullSelect(GenerosReducer.selectGeneros)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarGeneros() {
    this.store.dispatch(GenerosReducer.fetchGeneros());
  }
}
