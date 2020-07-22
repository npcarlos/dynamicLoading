import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import { UsuarioModel } from '~libraries/domain/common/usuario';
import * as UsuarioReducer from '~libraries/reducers/common/usuario/angular';
import { UsuarioStoreService } from './usuario-store.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioResolver extends ReducerSelectorResolver<UsuarioReducer.ApplicationState, UsuarioModel> {
  constructor(
    private usuarioStoreService: UsuarioStoreService,
    protected store: Store<UsuarioReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest() {
    let idUser = sessionStorage.getItem('idUser');
    this.usuarioStoreService.solicitarUsuario(idUser !== 'null' ? idUser : null);
    return false;
  }

  getReducerSelector() {
    return UsuarioReducer.selectUsuario;
  }
}
