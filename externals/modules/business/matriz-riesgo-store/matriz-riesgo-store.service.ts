import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { RiesgoListasModel } from '~libraries/domain/common/riesgoListas';
import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';

import * as MatrizRiesgoReducer from '~libraries/reducers/common/matriz-riesgo/angular';

@Injectable({
  providedIn: 'root',
})
export class MatrizRiesgoStoreService {
  constructor(private store: Store<MatrizRiesgoReducer.ApplicationState>) {}

  // Funciones de selectores
  getRiesgoListas(): Observable<RiesgoListasModel> {
    return notNullSelect(MatrizRiesgoReducer.selectListas)(this.store);
  }

  getRiesgoHC(): Observable<RiesgohcModel> {
    return notNullSelect(MatrizRiesgoReducer.selectHc)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarMatrizListas(cliente: ClienteModel, usuario: UsuarioModel) {
    this.store.dispatch(MatrizRiesgoReducer.fetchMatrizListas({ cliente, usuario }));
  }

  solicitarMatrizRiesgo(cliente: ClienteModel, usuario: UsuarioModel) {
    this.store.dispatch(MatrizRiesgoReducer.fetchMatrizRiesgo({ cliente, usuario }));
  }
}
