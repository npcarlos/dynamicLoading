import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UbicaReconocerSelectors from '~libraries/reducers/common/ubica-reconocer/angular/ubica-reconocer.selector';
import {
  fetchUbicaReconocer,
  actualizarUbicaReconocer,
} from '~libraries/reducers/common/ubica-reconocer/angular/ubica-reconocer.actions';
import { Observable } from 'rxjs';
import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';
import { ClienteModel } from '~libraries/domain/common/cliente';

@Injectable({
  providedIn: 'root',
})
export class UbicaReconocerStoreService {
  constructor(private store: Store<UbicaReconocerSelectors.ApplicationState>) {}

  getUbicaReconocer(): Observable<UbicaReconocerModel> {
    return this.store.select(UbicaReconocerSelectors.selectUbicaReconcer);
  }

  actualizarUbicaReconocer(ubicaReconocer: UbicaReconocerModel) {
    this.store.dispatch(actualizarUbicaReconocer({ ubicaReconocer }));
  }

  solicitarUbicaReconocer(clienteModel: ClienteModel, usuarioConsulta: string) {
    this.store.dispatch(fetchUbicaReconocer({ clienteModel, usuarioConsulta }));
  }
}
