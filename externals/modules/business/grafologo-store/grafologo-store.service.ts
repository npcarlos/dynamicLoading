import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';
import * as GrafologoReducer from '~libraries/reducers/common/grafologo/angular';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { HuellaImagenModel } from '~libraries/domain/common/autenticacionBiometrica';

@Injectable({
  providedIn: 'root',
})
export class GrafologoStoreService {
  constructor(private store: Store<GrafologoReducer.ApplicationState>) {}

  // Funciones de selectores subcribes
  actualizarGrafologo(): Observable<GrafologoModel> {
    return notNullSelect(GrafologoReducer.selectGrafologo)(this.store);
  }

  getGrafologo(): Observable<GrafologoResponseModel> {
    return notNullSelect(GrafologoReducer.selectGrafologoResponse)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)

  crearGrafologo(cliente: ClienteModel, huellaImagen: HuellaImagenModel, file: any) {
    this.store.dispatch(GrafologoReducer.createGrafologo({ cliente, huellaImagen, file }));
  }
  solicitarGrafologo(grafologo: GrafologoModel) {
    this.store.dispatch(GrafologoReducer.fetchGrafologo({ grafologo }));
  }
}
