import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { CiudadesModel } from '~libraries/domain/common/ciudades';
import * as CiudadesReducer from '~libraries/reducers/common/ciudades/angular';

@Injectable({
  providedIn: 'root',
})
export class CiudadesStoreService {
  constructor(private store: Store<CiudadesReducer.ApplicationState>) {}

  // Funciones de selectores
  getCiudades(): Observable<CiudadesModel[]> {
    return notNullSelect(CiudadesReducer.selectCiudades)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarCiudades(codigoDaneDepartamento: string) {
    this.store.dispatch(CiudadesReducer.fetchCiudades({ codigoDaneDepartamento }));
  }
}
