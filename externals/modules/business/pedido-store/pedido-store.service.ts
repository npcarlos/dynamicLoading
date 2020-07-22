import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { PedidoModel } from '~libraries/domain/common/pedido';
import * as PedidoReducer from '~libraries/reducers/common/pedido/angular';

import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { DireccionModel } from '~libraries/domain/common/direccion';

@Injectable({
  providedIn: 'root',
})
export class PedidoStoreService {
  constructor(private store: Store<PedidoReducer.ApplicationState>) {}

  // Funciones de selectores
  getPedido(): Observable<PedidoModel[]> {
    return notNullSelect(PedidoReducer.selectPedido)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarPedido(
    shoppingCart: ShoppingCartModel,
    cliente: ClienteModel,
    usuario: UsuarioModel,
    direccion: DireccionModel
  ) {
    this.store.dispatch(PedidoReducer.fetchPedido({ shoppingCart, cliente, usuario, direccion }));
  }
}
