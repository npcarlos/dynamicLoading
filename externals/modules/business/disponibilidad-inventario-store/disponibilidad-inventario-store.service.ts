import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// tslint:disable-next-line: max-line-length
import * as DisponibilidadInventarioSelector from '~libraries/reducers/common/disponibilidad-inventario/angular/disponibilidad-inventario.selector';
import {
  fetchDisponibilidadInventarios,
  actualizarDisponibilidadInventarios,
} from '~libraries/reducers/common/disponibilidad-inventario/angular/disponibilidad-inventario.actions';
import { Observable } from 'rxjs';
import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';

@Injectable({
  providedIn: 'root',
})
export class DisponibilidadInventarioStoreService {
  constructor(private store: Store<DisponibilidadInventarioSelector.ApplicationState>) {}

  getDisponibilidadInventario(): Observable<DisponibilidadInventarioModel[]> {
    return this.store.select(DisponibilidadInventarioSelector.selectDisponibilidadInventario);
  }

  solicitarDisponibilidadInventario(stockTexto: string[]) {
    this.store.dispatch(fetchDisponibilidadInventarios({ stockTexto }));
  }
}
