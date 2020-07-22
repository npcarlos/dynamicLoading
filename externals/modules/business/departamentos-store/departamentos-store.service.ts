import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { DepartamentosModel } from '~libraries/domain/common/departamentos';
import * as DepartamentosReducer from '~libraries/reducers/common/departamentos/angular';

@Injectable({
  providedIn: 'root',
})
export class DepartamentosStoreService {
  constructor(private store: Store<DepartamentosReducer.ApplicationState>) {}

  // Funciones de selectores
  getDepartamentos(): Observable<DepartamentosModel[]> {
    return notNullSelect(DepartamentosReducer.selectDepartamentos)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarDepartamentos() {
    this.store.dispatch(DepartamentosReducer.fetchDepartamentos());
  }
}
