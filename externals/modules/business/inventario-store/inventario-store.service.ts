import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { InventarioModel } from '~libraries/domain/common/inventario';
import * as InventarioReducer from '~libraries/reducers/common/inventario/angular';

@Injectable({
  providedIn: 'root',
})
export class InventarioStoreService {
  constructor(private store: Store<InventarioReducer.ApplicationState>) {}

  // Funciones de selectores
  getInventario(): Observable<InventarioModel[]> {
    return notNullSelect(InventarioReducer.selectInventario)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  limpiarInventario() {
    this.store.dispatch(InventarioReducer.limpiarInventario());
  }

  solicitarInventario(seriales: string[]) {
    this.store.dispatch(InventarioReducer.fetchInventario({ seriales }));
  }
}
