import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { EventoModel } from '~libraries/domain/common/loader';
import * as LoaderReducer from '~libraries/reducers/common/loader/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderStoreService {
  constructor(private store: Store<LoaderReducer.ApplicationState>) {}

  getEventos() {
    return notNullSelect(LoaderReducer.selectEventos)(this.store);
  }

  registrarEvento(evento: EventoModel) {
    this.store.dispatch(LoaderReducer.registrarEvento({ evento }));
  }

  eliminarEvento(evento: EventoModel) {
    this.store.dispatch(LoaderReducer.eliminarEvento({ evento }));
  }

  limpiarColaEventos() {
    this.store.dispatch(LoaderReducer.limpiarColaEventos());
  }
}
