import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario/disponibilidad-inventario';
import * as DisponibilidadInventarioReducer from '~libraries/reducers/common/disponibilidad-inventario/angular';
import { DisponibilidadInventarioStoreService } from './disponibilidad-inventario-store.service';

@Injectable({
  providedIn: 'root',
})
export class DisponibilidadInventarioResolver extends ReducerSelectorResolver<
  DisponibilidadInventarioReducer.ApplicationState,
  DisponibilidadInventarioModel[]
> {
  constructor(
    private disponibilidadInventarioStoreService: DisponibilidadInventarioStoreService,
    protected store: Store<DisponibilidadInventarioReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest() {
    return true;
  }

  getReducerSelector() {
    return DisponibilidadInventarioReducer.selectDisponibilidadInventario;
  }
}
