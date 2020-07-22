import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { NumeroModel } from '~libraries/domain/common/numeros';
import * as NumerosReducer from '~libraries/reducers/common/numeros/angular';

@Injectable({
  providedIn: 'root',
})
export class NumerosStoreService {
  constructor(private store: Store<NumerosReducer.ApplicationState>) {}

  // Funciones de selectores
  getNumeros(): Observable<NumeroModel[]> {
    return notNullSelect(NumerosReducer.selectNumeros)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarNumeros() {
    this.store.dispatch(NumerosReducer.fetchNumeros());
  }
}
