import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import * as AtributosContextoClienteReducer from '~libraries/reducers/fullstack/atributos-contexto-cliente/angular';

@Injectable({
  providedIn: 'root',
})
export class AtributosContextoClienteStoreService {
  constructor(private store: Store<AtributosContextoClienteReducer.ApplicationState>) {}

  // Funciones de selectores
  getAtributosContextoCliente(): Observable<AtributosContextoClienteModel> {
    return notNullSelect(AtributosContextoClienteReducer.selectAtributosContextoCliente)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarAtributosContextoCliente(tipoDocumento: string, numeroIdentificacion: string) {
    this.store.dispatch(
      AtributosContextoClienteReducer.fetchAtributosContextoCliente({ tipoDocumento, numeroIdentificacion })
    );
  }
}
