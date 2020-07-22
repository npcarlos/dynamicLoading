import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { UsuarioModel } from '~libraries/domain/common/usuario';
import * as UsuarioReducer from '~libraries/reducers/common/usuario/angular';

@Injectable({
  providedIn: 'root',
})
export class UsuarioStoreService {
  constructor(private store: Store<UsuarioReducer.ApplicationState>) {}

  // Funciones de selectores
  getUsuario(): Observable<UsuarioModel> {
    return notNullSelect(UsuarioReducer.selectUsuario)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarUsuario(idUsuario: string) {
    this.store.dispatch(UsuarioReducer.fetchUsuario({ idUsuario }));
  }
}
