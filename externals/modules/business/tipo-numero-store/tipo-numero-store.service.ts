import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';
import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';
import * as TipoNumeroReducer from '~libraries/reducers/common/tipo-numero/angular';

@Injectable({
  providedIn: 'root',
})
export class TipoNumeroStoreService {
  constructor(private store: Store<TipoNumeroReducer.ApplicationState>) {}

  // Funciones de selectores
  getTipoNumero(): Observable<TipoNumeroModel[]> {
    return notNullSelect(TipoNumeroReducer.selectTipoNumero)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarTipoNumero() {
    this.store.dispatch(TipoNumeroReducer.fetchTipoNumero());
  }
}
