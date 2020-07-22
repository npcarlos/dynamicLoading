import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import * as ClienteReducer from '~libraries/reducers/common/cliente/angular';

@Injectable({
  providedIn: 'root',
})
export class ClienteStoreService {
  constructor(private store: Store<ClienteReducer.ApplicationState>) {}

  // Funciones de selectores
  getCliente(): Observable<ClienteModel> {
    return notNullSelect(ClienteReducer.selectCliente)(this.store);
  }

  actualizarCliente(cliente: ClienteModel) {
    this.store.dispatch(ClienteReducer.actualizarCliente({ cliente }));
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarCliente(numeroCuentaCliente: string) {
    this.store.dispatch(ClienteReducer.fetchCliente({ numeroCuentaCliente }));
  }

  crearCliente(cliente: ClienteModel, direccion: DireccionModel) {
    this.store.dispatch(ClienteReducer.createCliente({ cliente, direccion }));
  }
}
