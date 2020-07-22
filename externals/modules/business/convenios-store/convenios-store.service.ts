import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ConvenioModel } from '~libraries/domain/common/convenios';
import * as ConveniosReducer from '~libraries/reducers/common/convenios/angular';

@Injectable({
  providedIn: 'root',
})
export class ConveniosStoreService {
  constructor(private store: Store<ConveniosReducer.ApplicationState>) {}

  // Funciones de selectores
  getConvenios(): Observable<ConvenioModel[]> {
    return notNullSelect(ConveniosReducer.selectConvenios)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarConvenios() {
    this.store.dispatch(ConveniosReducer.fetchConvenios());
  }
}
