import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import * as DireccionReducer from '~libraries/reducers/common/direccion/angular';
import { DireccionStoreService } from './direccion-store.service';
import { DireccionModel } from '~libraries/domain/common/direccion';

@Injectable({
  providedIn: 'root',
})
export class DireccionResolver extends ReducerSelectorResolver<DireccionReducer.ApplicationState, DireccionModel[]> {
  constructor(
    private direccionStoreService: DireccionStoreService,
    protected store: Store<DireccionReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest(): boolean {
    let direccion = sessionStorage.getItem('direccion');
    if (direccion) {
      this.direccionStoreService.obtenerDireccionPorId(direccion !== 'null' ? direccion : null);
      return false;
    } else {
      return true;
    }
  }

  getReducerSelector() {
    return DireccionReducer.selectDirecciones;
  }
}
