import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import * as GeneracionContratoReducer from '~libraries/reducers/common/generacion-contrato/angular';
import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';
import { ClienteModel } from '~libraries/domain/common/cliente';

@Injectable({
  providedIn: 'root',
})
export class GeneracionContratoStoreService {
  constructor(private store: Store<GeneracionContratoReducer.ApplicationState>) {}

  // Funciones de selectores subcribes
  actualizarContrato(): Observable<GeneracionContratoModel> {
    return notNullSelect(GeneracionContratoReducer.selectContrato)(this.store);
  }

  actualizarDocumento(): Observable<GeneracionContratoModel> {
    return notNullSelect(GeneracionContratoReducer.selectDocumento)(this.store);
  }

  actualizarLegalizacion(): Observable<GeneracionContratoModel> {
    return notNullSelect(GeneracionContratoReducer.selectLegalizacion)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarContrato(orderNumber: string, nut: string, fingerNumber: string) {
    this.store.dispatch(GeneracionContratoReducer.fetchContrato({ orderNumber, nut, fingerNumber }));
  }

  solicitarDocumento(cliente: ClienteModel, nut: string, fingerNumber: string) {
    this.store.dispatch(GeneracionContratoReducer.fetchDocumento({ cliente, nut, fingerNumber }));
  }
  solicitarLegalizacion(orderNumber: string) {
    this.store.dispatch(GeneracionContratoReducer.fetchLegalizacion({ orderNumber }));
  }
}
