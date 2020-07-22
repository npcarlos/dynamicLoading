import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { SerialModel } from '~libraries/domain/common/serial';
import * as SerialReducer from '~libraries/reducers/common/serial/angular';

@Injectable({
  providedIn: 'root',
})
export class SerialStoreService {
  constructor(private store: Store<SerialReducer.ApplicationState>) {}

  // Funciones de selectores
  getSerialesPlanes(): Observable<SerialModel[]> {
    return notNullSelect(SerialReducer.selectSerialesPlanes)(this.store);
  }

  getSerialesEquipos(): Observable<SerialModel[]> {
    return notNullSelect(SerialReducer.selectSerialesEquipos)(this.store);
  }

  getSerialesTecnologias(): Observable<SerialModel[]> {
    return notNullSelect(SerialReducer.selectSerialesTecnologias)(this.store);
  }

  actualizarSerialesPlanes(serialesPlanes: SerialModel[]) {
    this.store.dispatch(SerialReducer.actualizarSerialesPlanes({ serialesPlanes }));
  }

  actualizarSerialesEquipos(serialesEquipos: SerialModel[]) {
    this.store.dispatch(SerialReducer.actualizarSerialesEquipos({ serialesEquipos }));
  }

  actualizarSerialesTecnologias(serialesTecnologias: SerialModel[]) {
    this.store.dispatch(SerialReducer.actualizarSerialesTecnologias({ serialesTecnologias }));
  }
}
